import { render, screen } from "@testing-library/react";
import { Provider } from 'react-redux';
import { describe } from 'vitest';
import { store } from '../../store/store';
import Home from "./Home";

import {

  BrowserRouter
} from "react-router-dom";

//here we test that heading name templates exist or not
describe("Home component", () => {
  it("should render Home component correctly", () => {
    render(  <BrowserRouter ><Provider  store={store}><Home /></Provider></BrowserRouter>);
    const element = screen.getByRole("heading");
    expect(element).to.exist; //
    expect(element.textContent).to.equal('Templates'); // use Chai's to.equal property
  });
});

//test proceed to fill details button exists or not
describe("Home component", () => {
  it("should render Home component correctly", () => {
    render(  <BrowserRouter ><Provider  store={store}><Home /></Provider></BrowserRouter>);
    const button = screen.getByText('Proceed to Fill Details');
    expect(button).to.exist; //
  });
});




