import { FIELD_TYPE } from "@components/views/DynamicForm/types";

export const fields = {
  signIn: [
    {
      id: "email",
      fieldType: FIELD_TYPE.INPUT,
      placeholder: "Enter email",
      label: "Email",
      name: "email",
    },
    {
      id: "password",
      type: "password",
      fieldType: FIELD_TYPE.INPUT,
      placeholder: "Enter password",
      label: "Password",
      name: "password",
    },
    {
      id: "submit",
      fieldType: FIELD_TYPE.BUTTON,
      label: "Sign In",
      name: "submit",
    },
  ],
  signUp: [
    {
      id: "firstName",
      fieldType: FIELD_TYPE.INPUT,
      placeholder: "Enter first name",
      label: "First name",
      name: "firstName",
    },
    {
      id: "secondName",
      fieldType: FIELD_TYPE.INPUT,
      placeholder: "Enter second name",
      label: "Second name",
      name: "secondName",
    },
    {
      id: "email",
      fieldType: FIELD_TYPE.INPUT,
      placeholder: "Enter email",
      label: "Email",
      name: "email",
    },
    {
      id: "password",
      type: "password",
      fieldType: FIELD_TYPE.INPUT,
      placeholder: "Enter password",
      label: "Password",
      name: "password",
    },
    {
      id: "submit",
      fieldType: FIELD_TYPE.BUTTON,
      label: "Sign Up",
      name: "submit",
      view: "primary",
    },
  ],
};
