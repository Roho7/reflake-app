import { useRecoilValue } from "recoil";
import { setDOI } from "../config/atom";

interface Author {
  given: string;
  family: string;
}

interface PaperDataType {
  DOI: string;
  URL: string;
  title: string;
  author: Author[];
  publisher: string;
}

function ViewPaper() {
  const paper = useRecoilValue<PaperDataType>(setDOI);

  return (
    <div className="p-4 bg-gray-50">
      <a className="text-gray-400" href={paper.URL}>
        {" "}
        {paper.URL}
      </a>
      <h1>{paper.title}</h1>
      {paper.author.map((person) => {
        return (
          <p>
            <span>
              {person.given} {person.family}
            </span>
          </p>
        );
      })}
    </div>
  );
}

export default ViewPaper;
