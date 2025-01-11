/// <reference types="cypress" />
declare namespace Cypress {
  interface Chainable<Subject> {

    create_a_board(project: any, API_TOKEN: any, API_KEY: any): Chainable<any>;
    open_boards(API_TOKEN: any, API_KEY: any): Chainable<any>;
    delete_board(_id: any, API_TOKEN: any, API_KEY: any): Chainable<any>;
    delete_card(_id: any, API_TOKEN: any, API_KEY: any): Chainable<any>;
    create_a_card(list_id: any, nome_card: String, API_TOKEN: any, API_KEY: any): Chainable<any>;
    create_a_new_list(_board_id: any, API_TOKEN: any, API_KEY: any): Chainable<any>;
    get_board(_id: any, API_TOKEN: any, API_KEY: any): Chainable<any>;
    update_board(board_id:any, board_name: any, description: any, API_TOKEN: any, API_KEY: any): Chainable<any>;
    get_card(_id: number, API_TOKEN: string, API_KEY: string): Chainable<any>;
    update_card(card_id: number, card_name: string, description: string, API_TOKEN: string, API_KEY: string): Chainable<any>;
  }
}
