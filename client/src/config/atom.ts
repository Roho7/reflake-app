import { atom } from "recoil";

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

export const lakesState = atom({
  key: "setLakes",
  default: [],
});

export const usernameState = atom({
  key: "usernameState",
  default: "",
});
