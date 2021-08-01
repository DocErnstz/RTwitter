import React from "react";
import renderer from "react-test-renderer";
import Home from "../pages/index";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import Router from 'next/router'
jest.mock('next/router', ()=> ({push: jest.fn()}))

it("renders correctly", () => {
  const { getByText } = render(<Home />);
  fireEvent.click(getByText("SignUp"));
  getByText("logIn");
});

it("handlechange works", () => {
  const { getByLabelText } = render(<Home />);

  const emailInput = getByLabelText("email") as HTMLInputElement;
  const passwordInput = getByLabelText("password") as HTMLInputElement;

  fireEvent.change(emailInput, { target: { value: "helloworld" } });
  fireEvent.change(passwordInput, { target: { value: "helloworld" } });

  expect(emailInput.value).toEqual("helloworld");
  expect(passwordInput.value).toEqual("helloworld");
});

it("roouter change to main page", async () => {
  const { getByTestId, getByLabelText } = render(<Home />);
  
  const emailInput = getByLabelText("email") as HTMLInputElement;
  const passwordInput = getByLabelText("password") as HTMLInputElement;

  fireEvent.change(emailInput, { target: { value: "Ernesto467@hotmail.com.ar" } });
  fireEvent.change(passwordInput, { target: { value: "mercado" } });
  fireEvent.click(getByTestId('btnSub'));
  //Router.push("http://localhost:3000/");
  await waitFor(() => expect(Router.push).toHaveBeenCalledTimes(1))

})