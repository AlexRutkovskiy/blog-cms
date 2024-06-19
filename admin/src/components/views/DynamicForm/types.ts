export const enum FIELD_TYPE {
  INPUT = "input",
  BUTTON = "button",
  CHECKBOX = "checkbox",
}

export interface IPropsDymanicComponents {
  id: string;
  fieldType: FIELD_TYPE;
  name: string;
  [key: string]: unknown;
}

export interface IProps {
  fields: IPropsDymanicComponents[];
  onSubmit: () => void;
}
