export interface Panda {
  key?: string;
  name: string;
  image: string;
  interests?: string[] | undefined;
}

export interface Item {
  name: string;
  interests?: string[] | undefined;
  onPress(): void;
}

interface Details {
  panda: Panda;
  onClose(): void;
}

export interface List {
  pandas: Panda[];
  onSelect(key: string): void;
}

export type errorMessageProps = {
  error: Error;
  onRetry(): void;
};

export interface formProps {
  onCancel(): void;
  onSubmit(values: dataFormValues): void;
}

export interface dataFormValues {
  name: string;
  interests: string;
  image: string;
}
