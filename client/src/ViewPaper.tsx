import { useRecoilValue } from "recoil";
import { setDOI } from "../config/atom";

interface PaperDataType {
  DOI: string;
  URL: string;
  title: string;
  author: [
    {
      given: string;
      family: string;
    },
  ];
  publisher: string;
}

function ViewPaper() {
  const paper = useRecoilValue<PaperDataType>(setDOI);

  return (
    <div>
      <p>{paper.URL}</p>
      <p>{paper.title}</p>
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
