/// <reference types="cypress" />
declare namespace Cypress {
  interface Chainable<Subject> {
    /** Add GerarCNPJ function**/
    GerarCNPJ(): Chainable<string>;
    /** Add DadoQueEstejaNaTelaDeCartoes **/
    DadoQueEstejaNaTelaDeCartoes(): Chainable<any>;

    create_a_board(project: any): Chainable<any>;

  }
}
