// Testing cypress with react
// Possibly need to npm install @cypress-react

// test to check that can navigate to all pages
describe("visit all the pages", () => {
  it("can visit the current page route", () => {
    // Home page
    cy.visit("/");
    cy.url().should("include", "/");
    // Docs Page
    cy.visit("/my-documents");
    cy.url().should("include", "/my-documents");
    // Create Trip Page
    cy.visit("/create-trip");
    cy.url().should("include", "/create-trip");
    // Single Doc Page
    cy.visit("/trips");
    cy.url().should("include", "/trips");
    // Trips Page
    cy.visit("/single-trip");
    cy.url().should("include", "/single-trip");
    // Single Trips Page
    cy.visit("/pagenotfound");
    cy.url().should("include", "/singggle-trip");
    // Error page - Page not found
  });
});

// test to check if user can add documents
// and they appear on the docs page

describe("user can add a document", () => {
  it("can click on add button on my documents page", () => {
    cy.visit("/my-documents");
    cy.click("img[className=plus-icon]").get("label").contains("pdf");
    cy.url("/single-doc");
  });
});

// test to check the functionality
//of the home button and back button

describe("home button and back button", () => {
  it("can go to home page and back a page", () => {
    cy.click('img[className="home"]');
    cy.url("/");
    cy.click('img[className="arrowBack"]');
    cy.go("back");
  });
});
