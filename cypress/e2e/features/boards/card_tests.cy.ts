/// <reference types="cypress" />
import { faker } from '@faker-js/faker'
import schema_create_card from "../../../support/schemas/create_card"; // Importe o esquema JSON

// Para criação de um card é necessário passar o id da lista já criada.
// criei função para criar uma lista e retornar o id da lista. Mas o id do boarding fiz pois o mesmo é limitado.
// "message": "Cannot create board as organization is at its board limit"

var card_id = 0
var board_id = "677bdc62b7d77e8c6cbff8e2"
var list_id = "677bf6c6f04d50086972a5a8"
const API_TOKEN = `${Cypress.env('ACCESS_TOKEN')}`
const API_KEY = `${Cypress.env('API_KEY')}`

before(() => {
  cy.open_boards()
  cy.create_a_new_list(board_id, API_TOKEN, API_KEY)
  .then(response => {
    expect(response.status).to.equal(200)
    list_id = response.body.id
  })
})

describe('Funcionalidade de Card', () => {
  it('CT001 - Cenário - Criação de um novo Card no Board do Trello - Teste Positivo', () => {

    cy.create_a_card(list_id, API_TOKEN, API_KEY)
    .then(response => {
      expect(response.status).to.equal(200)
      // Validar o schema dos dados de retorno do endpoint.
      expect(response.body).to.be.jsonSchema(schema_create_card);
      card_id = response.body.id
    })
  })

  it('CT002 - Cenário - Criação de um novo Card no Board com list_id inválido - Teste Negativo', () => {

    cy.create_a_card(1, API_TOKEN, API_KEY)
    .then(response => {
      expect(response.status).to.equal(400)
      expect(response.body).to.equal("invalid value for idList")
    })
  })

  it('CT003 - Cenário - Criação de um novo Card no Board com API_TOKEN inválido - Teste Negativo', () => {

    cy.create_a_card(1, 12345, API_KEY)
    .then(response => {
      expect(response.status).to.equal(401)
      expect(response.body).to.equal("invalid app token")
    })
  })

  it('CT004 - Cenário - Criação de um novo Card no Board com API_KEY inválido - Teste Negativo', () => {

    cy.create_a_card(1, API_TOKEN, 12345)
    .then(response => {
      expect(response.status).to.equal(401)
      expect(response.body).to.equal("invalid key")
    })
  })

  it('CT005 - Cenário - Exclusão de um Card no Board do Trello - Teste Positivo', () => {
    cy.open_boards()
    cy.delete_card(card_id, API_TOKEN, API_KEY)
      .then(response => {
        expect(response.status).to.equal(200)
      })
  })

  it('CT006 - Cenário - Exclusão de um Card no Board com card_id inexistente - Teste Negativo', () => {
    cy.open_boards()
    cy.delete_card(1, API_TOKEN, API_KEY)
      .then(response => {
        expect(response.status).to.equal(400)
        expect(response.body).to.equal("invalid id")
      })
  })

  it('CT007 - Cenário - Exclusão de um Card no Board com API_TOKEN inválido - Teste Negativo', () => {
    cy.open_boards()
    cy.delete_card(1, 12345, API_KEY)
      .then(response => {
        expect(response.status).to.equal(401)
        expect(response.body).to.equal("invalid app token")
      })
  })

  it('CT008 - Cenário - Exclusão de um Card no Board com API_KEY inválido - Teste Negativo', () => {
    cy.open_boards()
    cy.delete_card(1, API_TOKEN, 123)
      .then(response => {
        expect(response.status).to.equal(401)
        expect(response.body).to.equal("invalid key")
      })
  })

})