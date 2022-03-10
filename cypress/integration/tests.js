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
    cy.visit("/singggle-trip");
    // cy.url().should("include", "Page not found");
    cy.get("h1").contains("Page not found");
    // Error page - Page not found
  });
});

// test to check the functionality
//of the home button and back button

describe("home button and back button", () => {
  it("can go to previous page when clicking on back arrow", () => {
    cy.visit("/my-documents");
    cy.visit("/my-trips");
    cy.get("button[class='arrowBack']").click();
    cy.url().should("include", "/my-documents");
  });

  it("can go to the home page when clicking home button", () => {
    cy.visit("my-documents");
    cy.get("a[class='home-link']").click();
    cy.get("img[class='logo']").should("exist");
  });
});

// test to check if user can add documents
// and they appear on the docs page

// describe("user can add a document", () => {
//   it("can click on add button on my documents page", () => {
//     cy.visit("/my-documents");
//     cy.get("input[id='upload-input']").click();
//     cy.downloadFile(
//       "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
//       "Downloads",
//       "dummy.pdf"
//     );
//     cy.readFile("src/assets/images/dummy.pdf");
//     cy.get('[type="file"]').attachFile({
//       filePath: "pdffilePath",
//       encoding: "base64",
//       mimeType: "application/pdf",
//     });
//   });
// });
