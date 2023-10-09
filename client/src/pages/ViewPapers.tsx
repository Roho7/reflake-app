import axios from "axios";
import { useParams } from "react-router-dom";

function ViewPapers() {
  const { paperId } = useParams();

  const fetchData = async () => {
    const paperData = await axios.get("/papers/:paperId");
  };

  return <div></div>;
}

export default ViewPapers;
