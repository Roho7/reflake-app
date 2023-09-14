import { useRecoilValue } from "recoil";
import { setDOI } from "../config/atom";
import axios from "axios";
import { URL } from "../config/URL";
import { useEffect, useState } from "react";

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
  const [openPopup, setOpenPopup] = useState(false);
  const paper = useRecoilValue<PaperDataType>(setDOI);

  const addPaper = async () => {
    console.log(paper);
    await axios.post(URL, paper);
  };
  const closePopup = (event: React.MouseEvent) => {
    event.preventDefault();
    setOpenPopup(false);
  };
  useEffect(() => {
    if (paper.DOI != "") {
      setOpenPopup(true);
    }
  }, [paper]);
  if (openPopup) {
    return (
      <div className="absolute left-1/2 bottom-1/2 bg-base-50 shadow-xl">
        <a
          onClick={closePopup}
          className="absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 p-4 hover:underline"
        >
          X
        </a>
        <div className="p-4">
          <a className="text-base-500" href={paper.URL}>
            {paper.URL}
          </a>
          <h1 className="font-bold my-1">{paper.title}</h1>
          {paper.author.map((person) => {
            return (
              <p className="italic" key={person.family}>
                <span>
                  {person.given} {person.family}
                </span>
              </p>
            );
          })}
        </div>
        <div className="flex">
          <button onClick={addPaper} className="w-full">
            Add Paper to
          </button>
          <select>
            <option value="Collection 1">Collection</option>
          </select>
        </div>
      </div>
    );
  }
}

export default ViewPaper;
