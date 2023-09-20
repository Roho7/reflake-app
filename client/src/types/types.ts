export type LakeType = {
  lakeName: string;
  dayCreated: string;
  papers: PaperDataType[];
};

export interface Author {
  given: string;
  family: string;
}

export interface PaperDataType {
  DOI: string;
  URL: string;
  title: string;
  author: Author[];
  publisher: string;
}
