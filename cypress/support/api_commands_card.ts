const API_TOKEN = `${Cypress.env('ACCESS_TOKEN')}`
const API_KEY = `${Cypress.env('API_KEY')}`
const idOrganization = `${Cypress.env('idOrganization')}`

/**
 * Cria um card, passando o id da lista e o nome do card.
 *
 * @type {Object.<int>}
 */
Cypress.Commands.add('create_a_card', list_id  => {
  cy.request({
    method: 'POST',
    url: `/1/cards?idList=${list_id}&key=${API_KEY}&token=${API_TOKEN}&name=Automação ${list_id}`
    })
})

/**
 * Crie uma nova lista em um quadro. É necessario para criar um card.
 * Deve passar o id do board para função.
 * 
 * @type {Object.<int>}
 */
Cypress.Commands.add('create_a_new_list', _board_id => {
  cy.request({
    method: 'POST',
    url: `1/lists?idBoard=${_board_id}&key=${API_KEY}&token=${API_TOKEN}&name=Automação`,
  })
})

/**
 * Função deleta o card.
 * Deve passar o id do card para função.
 * 
 * @type {Object.<int>}
 */
Cypress.Commands.add('delete_card', _id => {
  cy.request({
    method: 'DELETE',
    url: `/1/cards/${_id}?&key=${API_KEY}&token=${API_TOKEN}`,
  })
})
