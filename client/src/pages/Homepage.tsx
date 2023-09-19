import CreateLake from "../components/CreateLake";
import SearchPapers from "../components/SearchPapers";
import ViewPaper from "../components/ViewPaper";

function Homepage() {
  return (
    <div className="grid gap-4 grid-cols-2 grid-rows-2">
      <div className="flex gap-4 col-span-2">
        <div className="primary-box flex flex-col justify-between">
          <h2 className="text-3xl font-semibold">Welcome!</h2>
          <h1 className="text-6xl">Dr. Andrew Huberman</h1>
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
      </div>
      <div className="primary-box flex flex-col justify-between">
        <h2 className="font-bold">Your Lakes:</h2>
        <ul>
          <li>Alzheirmers</li>
          <li>Parkinsons</li>
          <li>Autism</li>
        </ul>
        <h2 className="font-bold mt-2">Create New Lake:</h2>
        <CreateLake />
      </div>
      <div className="primary-box bg-base-50 flex flex-col gap-2">
        <h2 className="font-bold">Start Collecting Knowledge</h2>
        <p className="text-base-500">Enter a DOI to add a paper</p>
        <div className="relative">
          <SearchPapers />
          <ViewPaper />
        </div>
        {/* <button>Add Paper</button> */}
      </div>
    </div>
  );
}

export default Homepage;
