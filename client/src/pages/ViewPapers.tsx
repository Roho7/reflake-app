import { useRecoilValue } from "recoil";
import SideBar from "../components/SideBar";
import { activePaperState } from "../config/atom";

function ViewPapers() {
  const activePaper = useRecoilValue(activePaperState);
  console.log(activePaper);
  return (
    <div className="h-full w-full flex gap-4">
      <SideBar />
      <div className="m-4 p-4 w-full bg-base-50">
        <p className=" text-base-500">{activePaper[0].DOI}</p>
        <p className=" text-base-500">{activePaper[0].publisher}</p>
        <h1 className="font-bold"> {activePaper[0].title} </h1>
        {activePaper[0].author.map((p) => {
          return (
            <p>
              {p.given} {p.family}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default ViewPapers;
