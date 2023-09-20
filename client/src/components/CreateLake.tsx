import axios from "axios";
import { useState } from "react";
import { lakesURL } from "../config/URL";
import { useRecoilValue } from "recoil";
import { usernameState } from "../config/atom";

function CreateLake() {
  const username = useRecoilValue(usernameState);
  const [lakeName, setLakeName] = useState("");
  const handleChange = (e: any) => {
    setLakeName(e.target.value);
  };
  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    const obj = { lakeName: lakeName, username: username };
    await axios.post(lakesURL, obj);
  };
  return (
    <div>
      <input type="text" onChange={handleChange} placeholder="enter a name" />
      <button onClick={handleSubmit}>Create Lake</button>
    </div>
  );
}

export default CreateLake;
