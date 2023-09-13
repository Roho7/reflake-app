import { useSetRecoilState } from "recoil";
import { setDOI } from "../config/atom";
import { useState } from "react";
import axios from "axios";
import { URL } from "../config/URL";

function SearchPapers() {
  const [search, setSearch] = useState("");
  const setValue = useSetRecoilState(setDOI);

  const getPaper = async (doi: string) => {
    try {
      const response = await fetch(`https://api.crossref.org/works/${doi}`);
      if (response) {
        const data = await response.json();
        setValue(data.message);
        axios.post(URL, data.message);
        // console.log(data.message);
      } else {
        console.log("no response");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    getPaper(search);
  };

  return (
    <div>
      <form action="">
        <input
          type="text"
          name="doin"
          id="doi"
          placeholder="Enter DOI"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default SearchPapers;
