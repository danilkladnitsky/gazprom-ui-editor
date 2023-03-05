export type ParameterType = string;

export type Parameter = {
  label: string;
  type: ParameterType;
};

export const DEFAULT_PARAMETERS: Parameter[] = [
  {
    label: "Строка",
    type: "string",
  },
  {
    label: "Число",
    type: "number",
  },
];
