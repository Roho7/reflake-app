import { useRecoilValue } from "recoil";
import { lakesState } from "../config/atom";
import { LakeType } from "../types/types";
import { useNavigate } from "react-router-dom";

function ViewLakes() {
  const lakes = useRecoilValue(lakesState);
  const navigate = useNavigate();
  const handleLakeClick = (lake: string) => {
    navigate(`/lakes/${lake}`);
    console.log();
  };
  return (
    <div className="w-full h-full p-10">
      <h1 className="mb-4 font-bold text-6xl">All Lakes</h1>
      <div className="grid grid-row-4 w-full">
        {lakes.map((item: LakeType) => {
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
      </div>
    </div>
  );
}

export default ViewLakes;
