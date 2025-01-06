/// <reference types="cypress" />
declare namespace Cypress {
  interface Chainable<Subject> {

    create_a_board(project: any): Chainable<any>;
    open_boards(): Chainable<any>;
    delete_board(_id: any): Chainable<any>;
    delete_card(_id: any): Chainable<any>;
    create_a_card(list_id: any): Chainable<any>;
    create_a_new_list(_board_id: any): Chainable<any>;
  }
}
