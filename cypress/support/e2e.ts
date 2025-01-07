// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './api_commands_board'
import './api_commands_card'
import 'cypress-mochawesome-reporter/register';

// Alternatively you can use CommonJS syntax:
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

// uso do json schema na lib do Chai.
import chaiJsonSchema from 'chai-json-schema'; 
chai.use(chaiJsonSchema);