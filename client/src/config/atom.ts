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

export const usernameState = atom({
  key: "usernameState",
  default: "",
});
