export interface Panda {
  key: string;
  name: string;
  image: string;
  interests?: string[] | undefined;
  onClick(): void;
}

export interface Item {
  panda: Panda;
}

export interface List {
  pandas: Panda[];
  onClick: (key: string) => void;
}
