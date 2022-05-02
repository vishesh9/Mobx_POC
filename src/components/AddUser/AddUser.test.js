import React from "react";
import { render } from "react-testing-library";
import { AddUser } from "./AddUser";

it("checkSaveButtonRender", () => {
  const { queryByTestId } = render(<AddUser />);
  const element = queryByTestId("save-button");
  expect(element).toBeTruthy();
});

it("checkNameInputRender", () => {
  const { queryByTestId } = render(<AddUser />);
  const element = queryByTestId("name-input");
  expect(element).toBeTruthy();
});

it("checkAllCheckboxesRender", () => {
  const { queryByTestId } = render(<AddUser />);
  const [emailCheckbox, smsCheckbox, newsletterCheckbox] = [
    queryByTestId("email-checkbox"),
    queryByTestId("sms-checkbox"),
    queryByTestId("newsletter-checkbox")
  ];
  expect(emailCheckbox).toBeTruthy();
  expect(smsCheckbox).toBeTruthy();
  expect(newsletterCheckbox).toBeTruthy();
});
