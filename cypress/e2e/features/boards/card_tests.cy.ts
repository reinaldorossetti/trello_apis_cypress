/// <reference types="cypress" />
import { faker } from '@faker-js/faker'

// Para criação de um card é necessário passar o id da lista já criada.
// criei função para criar uma lista e retornar o id da lista. Mas o id do boarding fiz pois o mesmo é limitado.
// "message": "Cannot create board as organization is at its board limit"

var card_id = 0
var board_id = "677bdc62b7d77e8c6cbff8e2"
var list_id = "677bf6c6f04d50086972a5a8"

before(() => {

  cy.open_boards()

})

describe('Feature Card', () => {
  it('Validated new Card', () => {

    
    cy.create_a_new_list(board_id)
    .then(response => {
      expect(response.status).to.equal(200)
      list_id = response.body.id
    })
    cy.create_a_card(list_id)
    .then(response => {
      expect(response.status).to.equal(200)
      card_id = response.body.id
    })
  })

  it('Validated delete Card', () => {
    cy.open_boards()
    cy.delete_card(card_id)
      .then(response => {
        expect(response.status).to.equal(200)
      })
  })

})