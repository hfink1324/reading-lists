export type Expert = {
  slug: string;
  name: string;
  institution: string;
  field: string;
  bio: string;
  site?: string;
};

export type Text = {
  id: string;
  title: string;
  authors: string;
  year: number | string;
  doi?: string;
  isbn?: string;
};

export type Entry = {
  expertSlug: string;
  textId: string;
  note: string;
};

export const experts: Expert[] = [
  {
    slug: "dr-creationism",
    name: "Dr. Creationism",
    institution: "La-La Land",
    field: "Pseudoscience",
    bio: "I'm a pioneer in the field of brainwashing children.",
    site: "https://www.google.com",
  },
];

export const texts: Text[] = [
  {
    id: "the-bible",
    title: "The Bible",
    authors: "God",
    year: 1951,
    isbn: "9781885217721",
  },
  {
    id: "art-of-war",
    title: "The Art of War",
    authors: "Sun Tzu",
    year: "5th century BC",
    isbn: "9781645472834",
  },
  {
    id: "indoctrinate-question",
    title: "To Educate or to Indoctrinate: That is Still the Question",
    authors: "R. S. Laura",
    year: 2013,
    doi: "10.1111/j.1469-5812.1983.tb00091.x",
  },
];

export const entries: Entry[] = [
  {
    expertSlug: "dr-creationism",
    textId: "the-bible",
    note: "One of the best texts in this field because you only have to skim it to get the gist.",
  },
  {
    expertSlug: "dr-creationism",
    textId: "art-of-war",
    note: "The culture war is coming for us and we must be prepared. Yes, Jesus references peace over 100 times in the bible, but he didn't know that one day his followers might be subjected to lessons on evolution in public schools!",
  },
  {
    expertSlug: "dr-creationism",
    textId: "indoctrinate-question",
    note: "You know the answer.",
  },
];