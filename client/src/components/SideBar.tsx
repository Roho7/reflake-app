import { useRecoilValue } from "recoil";
import { lakesState } from "../config/atom";
import { LakeType, PaperDataType } from "../types/types";
import { useRef, useState } from "react";

function AllLakes() {
  const lakes = useRecoilValue(lakesState);
  const [viewPapers, setViewPapers] = useState(false);
  const setActivePaper = useRef("");
  const activePaperArray = useRef({
    lakeName: "",
    dayCreated: "",
    papers: [],
  });

  const handleLakeClick = (paper: string) => {
    setViewPapers(!viewPapers);
    setActivePaper.current = paper;
    activePaperArray.current = lakes.find((item: LakeType) => {
      return item.lakeName === setActivePaper.current;
    });
    console.log(activePaperArray.current.papers);
  };
  return (
    <div className="h-full w-1/4 lg:w-1/6 fixed px-6 py-20 z-0 left-0 bg-base-500 flex flex-col gap-3">
      {!viewPapers &&
        lakes.map((item: LakeType) => {
          return (
            <div className="home-button-box group">
              <div
                className="home-btn"
                onClick={() => handleLakeClick(item.lakeName)}
                key={item.lakeName}
              >
                <h2 className="text-seal-500">{item.lakeName}</h2>
                <p className="text-seal-100">Papers: {item.papers.length}</p>
              </div>
            </div>
          );
        })}
      {viewPapers &&
        activePaperArray.current.papers.map((item: any) => {
          return (
            <div className="p-2 bg-base-50 mb-2 box-border h-full w-full ">
              <p className="text-seal-100 text-xs ">{item.publisher}</p>
              <h2 className="text-seal-500">{item.title}</h2>
              <p className="text-seal-500">
                {item.author.map((item: { given: string; family: string }) => {
                  return (
                    <span className="text-seal-100">
                      {item.given} {item.family}
                    </span>
                  );
                })}
              </p>
            </div>
          );
        })}
    </div>
  );
}

export default AllLakes;
