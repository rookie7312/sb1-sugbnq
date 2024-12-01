interface TableData {
  headers: string[];
  rows: (string | number)[][];
}

export const createTable = (headers: string[], rows: (string | number)[][]): TableData => {
  return { headers, rows };
};

export interface FAQ {
  question: string;
  answer: string;
}

export const createFAQSection = (faqs: FAQ[]): FAQ[] => {
  return faqs;
};