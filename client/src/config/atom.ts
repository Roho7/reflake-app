import { atom } from "recoil";

export const countState = atom({
  key: "countState",
  default: 0,
});

export const setDOI = atom({
  key: "setDOI",
  default: {
    DOI: "",
    URL: "",
    title: "",
    author: [
      {
        given: "",
        family: "",
      },
    ],
    publisher: "",
  },
});
