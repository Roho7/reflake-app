import axios from "axios";
import { viewlakesURL } from "../config/URL";
import { useRecoilValue } from "recoil";
import { lakesState, usernameState } from "../config/atom";
import { useEffect, useState } from "react";

type LakeType = {
  lakeName: string;
  dayCreated: string;
  papers: [];
};

function AllLakes() {
  // const username = useRecoilValue(usernameState);
  const lakes = useRecoilValue(lakesState);

  return (
    <div>
      <button>show lakes</button>
      {lakes &&
        lakes.map((item: LakeType) => {
          return (
            <div>
              {item.lakeName}
              {item.dayCreated}
              {item.papers}
            </div>
          );
        })}
    </div>
  );
}

export default AllLakes;
