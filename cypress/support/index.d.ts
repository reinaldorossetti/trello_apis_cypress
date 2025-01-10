/// <reference types="cypress" />
declare namespace Cypress {
  interface Chainable<Subject> {

    create_a_board(project: any): Chainable<any>;
    open_boards(): Chainable<any>;
    delete_board(_id: any): Chainable<any>;
    delete_card(_id: any, API_TOKEN: any, API_KEY: any): Chainable<any>;
    create_a_card(list_id: any, nome_card: String, API_TOKEN: any, API_KEY: any): Chainable<any>;
    create_a_new_list(_board_id: any, API_TOKEN: any, API_KEY: any): Chainable<any>;
    get_board(_id: any): Chainable<any>;
    update_board(board_id:any, board_name: any, description: any): Chainable<any>;
    get_card(_id: number, API_TOKEN: string, API_KEY: string): Chainable<any>;
    
  }
}
