export interface HistoryItem {
  nodeId: string;
  selectedOptionId: string | null;
}

export type Option = {
  id: string;
  label: string;
  desc?: string;
  resultText?: string | string[] | ((history: HistoryItem[]) => string[]);
  nextId: string;
  condition?: (history: HistoryItem[]) => boolean;
};

export type StoryNode = {
  id: string;
  title?: string;
  text: string[] | ((history: HistoryItem[]) => string[]);
  options: Option[];
};
