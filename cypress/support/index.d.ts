/// <reference types="cypress" />
declare namespace Cypress {
  interface Chainable<Subject> {

    create_a_board(project: any): Chainable<any>;
    open_boards(): Chainable<any>;
    delete_board(_id: any): Chainable<any>;

  }
}
