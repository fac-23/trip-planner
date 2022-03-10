/* eslint-disable no-undef */
/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
const { downloadfile } = require("cypress-downloadfile/lib/addPlugin");
module.exports = (on, config) => {
  on("task", { downloadfile });
  return config;
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
};

context("downloadFile", () => {
  it("downloaded pdf file", () => {
    cy.downloadFile(
      "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      "Downloads",
      "dummy.pdf"
    );
    cy.readFile("src/assets/images/dummy.pdf");
  });
});
