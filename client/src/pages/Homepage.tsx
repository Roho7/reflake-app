import CreateLake from "../components/CreateLake";
import SearchPapers from "../components/SearchPapers";
import PaperPopup from "../components/PopupViewPaper";
import { useRecoilValue } from "recoil";
import { lakesState, usernameState } from "../config/atom";
import { LakeType } from "../types/types";

function Homepage() {
  const username = useRecoilValue(usernameState);
  const lakes = useRecoilValue(lakesState);
  return (
    <div className="h-full mt-20">
      <div className="grid gap-4 grid-cols-2 grid-rows-2 border">
        <div className="primary-box flex flex-col justify-between">
          <h2 className="text-3xl font-semibold">Welcome!</h2>
          <h1 className="text-6xl">{username}</h1>
        </div>
        <div className="flex flex-col gap-4">
          <div className="home-button-box group">
            <div className="home-btn group-hover:bg-tangerine-500 ">
              <h2>See Latest News</h2>
            </div>
          </div>
          <div className="home-button-box group">
            <div className="home-btn group-hover:bg-mango-500 ">
              <h2>Discover Papers</h2>
            </div>
          </div>
        </div>
        <div className="primary-box flex flex-col justify-between bg-base-50">
          <h2 className="font-bold">
            <a href="/lakes">Your Lakes</a>
          </h2>
          <ul>
            {lakes.map((lake: LakeType) => {
              return (
                <li key={lake.lakeName}>
                  <a href={"/lakes/" + lake.lakeName}>{lake.lakeName}</a>
                </li>
              );
            })}
          </ul>
          <p className="text-base-500 my-2">Create a new lake</p>
          <CreateLake />
        </div>
        <div className="primary-box bg-base-50 flex flex-col gap-2 justify-between">
          <h2 className="font-bold">Start Collecting Knowledge</h2>
          <div>
            <p className="text-base-500 mb-2">Enter a DOI to add a paper</p>
            <div className="relative">
              <SearchPapers />
              <PaperPopup />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
