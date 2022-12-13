import { Raleway } from "@next/font/google";
import { mount } from "cypress/react18";

// with a <reference path="./component" /> at the top of your spec.
declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
    }
  }
}

const raleway = Raleway({
  weight: ["100", "300", "400", "600", "900"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-raleway",
});

// Example use:
// cy.mount(<MyComponent />)
Cypress.Commands.add("mount", (component, options = {}) => {
  const wrapped = (
    <div className={`${raleway.variable} font-sans`}>{component}</div>
  );

  return mount(wrapped, options);
});
