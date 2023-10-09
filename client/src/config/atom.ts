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
  default: [
    {
      lakeName: "",
      dayCreated: "",
      papers: [
        {
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
      ],
    },
  ],
});

export const activePaperState = atom({
  key: "activePaper",
  default: [
    {
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
  ],
});

export const usernameState = atom({
  key: "usernameState",
  default: "",
});
