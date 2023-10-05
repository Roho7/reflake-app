import { useRecoilValue } from "recoil";
import { lakesState, setDOI, usernameState } from "../config/atom";
import axios from "axios";
import { paperURL } from "../config/URL";
import { useEffect, useState } from "react";
import { LakeType, PaperDataType } from "../types/types";
import Cookies from "universal-cookie";

function ViewPaper() {
  const [openPopup, setOpenPopup] = useState(false);
  const lakes = useRecoilValue(lakesState);
  const paper = useRecoilValue<PaperDataType>(setDOI);
  const cookie = new Cookies(null, { path: "/" });
  const [selectedLake, setSelectedLake] = useState("");

  const addPaper = async () => {
    console.log("paper", paper);

    await axios.post(paperURL, {
      paper: paper,
      lake: selectedLake,
      username: cookie.get("username"),
    });
    setOpenPopup(false);
  };
  const closePopup = (event: React.MouseEvent) => {
    event.preventDefault();
    setOpenPopup(false);
  };

  const handleSelect = (e: any) => {
    console.log(e.target.value);
    setSelectedLake(e.target.value);
  };

  useEffect(() => {
    if (paper.DOI != "") {
      setOpenPopup(true);
    }
  }, [paper]);

  if (openPopup) {
    return (
      <div className="absolute z-10 left-1/2 bottom-1/2 bg-base-50 shadow-xl">
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
          <select value={selectedLake} onChange={handleSelect}>
            {lakes.map((item: LakeType) => {
              return <option value={item.lakeName}>{item.lakeName}</option>;
            })}
          </select>
        </div>
      </div>
    );
  }
}

export default ViewPaper;
