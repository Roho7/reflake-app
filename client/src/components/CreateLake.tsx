import axios from "axios";
import { useState } from "react";
import { lakesURL } from "../config/URL";

function CreateLake() {
  const [lakeName, setLakeName] = useState("");
  const handleChange = (e: any) => {
    setLakeName(e.target.value);
  };
  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    console.log(lakeName);
    const obj = { lakeName: lakeName };
    await axios.post(lakesURL, obj);
  };
  return (
    <div>
      <input type="text" onChange={handleChange} />
      <button onClick={handleSubmit}>Create Lake</button>
    </div>
  );
}

export default CreateLake;
