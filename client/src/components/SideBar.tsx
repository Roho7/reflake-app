import { useRecoilValue } from "recoil";
import { lakesState } from "../config/atom";
import { LakeType, PaperDataType } from "../types/types";
import { useRef, useState } from "react";

type LakeType2 = {
  lakeName: string;
  dayCreated: string;
  papers: PaperDataType[];
  _id: string;
};

function AllLakes() {
  const lakes = useRecoilValue<LakeType2>(lakesState);
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
    <div className="h-full w-1/6 fixed px-6 py-20 z-0 left-0 bg-base-500 flex flex-col">
      {viewPapers &&
        lakes.map((item: LakeType) => {
          return (
            <div
              className="p-2 bg-base-50 mb-2"
              onClick={() => handleLakeClick(item.lakeName)}
              key={item.lakeName}
            >
              <h2 className="text-seal-500">{item.lakeName}</h2>
              <p className="text-seal-100">Papers: {item.papers.length}</p>
            </div>
          );
        })}
      {!viewPapers &&
        activePaperArray.current.papers.map((item: any) => {
          return (
            <div className="p-2 bg-base-50 mb-2">
              <h2 className="text-seal-500">{item.DOI}</h2>
              <p className="text-seal-100">{item.URL}</p>
            </div>
          );
        })}
    </div>
  );
}

export default AllLakes;
