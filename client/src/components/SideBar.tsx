import { PaperDataType } from "../types/types";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { activePaperState } from "../config/atom";

function SideBar() {
  const { lakeId } = useParams();
  const [lakeData, setLakeData] = useState([]);
  const setActivePaper = useSetRecoilState(activePaperState);

  const fetchData = async () => {
    const response = await axios.get(`http://localhost:3000/lakes/${lakeId}`);
    console.log(response.data.lake.papers);
    setLakeData(response.data.lake.papers);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleLakeClick = (paper: string) => {
    setActivePaper(
      lakeData.filter((t: PaperDataType) => {
        return t.title === paper;
      }),
    );
  };

  return (
    <div className="h-full w-1/4 lg:w-1/6 p-4 z-0 left-0 bg-base-500 flex flex-col gap-3">
      {lakeData?.map((item: PaperDataType) => {
        return (
          <div className="home-button-box group">
            <div
              className="home-btn"
              onClick={() => handleLakeClick(item.title)}
              key={item.title}
            >
              <h3 className="text-seal-500 font-bold">{item.title}</h3>

              {item.author.map((p) => {
                return (
                  <p>
                    {p.given} {p.family}
                  </p>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SideBar;
