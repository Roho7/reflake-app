import "./App.css";
import SearchPapers from "./components/SearchPapers";
import ViewPaper from "./components/ViewPaper";

function App() {
  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center">
      <SearchPapers />
      <ViewPaper />
    </div>
  );
}

export default App;
