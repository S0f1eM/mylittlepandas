export interface Panda {
  key: string;
  name: string;
  image: string;
  interests?: string[] | undefined;
}

export interface Item {
  panda: Panda;
}

export interface List {
  pandas: Panda[];
}

export type errorMessageProps = {
  error: Error;
  onRetry(): void;
};
