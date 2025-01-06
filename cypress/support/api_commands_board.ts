const API_TOKEN = `${Cypress.env('ACCESS_TOKEN')}`
const API_KEY = `${Cypress.env('API_KEY')}`
const idOrganization = `${Cypress.env('idOrganization')}`

/**
 * Cria um board, passando o nome do board para função.
 *
 * @type {Object.<string>}
 */
Cypress.Commands.add('create_a_board', _faker => {
  cy.request({
    method: 'POST',
    url: `/1/boards/?idOrganization=${idOrganization}&name=${_faker.name}&key=${API_KEY}&token=${API_TOKEN}`,
  })
})

/**
 * Abre um board, é necessario para deletar o mesmo. Não precisa passar nada para função.
 *
 * @type {Object.<void>}
 */
Cypress.Commands.add('open_boards', () => {
  cy.request({
    method: 'GET',
    url: `/1/members/me?boards=open&key=${API_KEY}&token=${API_TOKEN}`,
  })
})

/**
 * Deleta um board, passando o id do board criado para função.
 *
 * @type {Object.<string>}
 */
Cypress.Commands.add('delete_board', _id => {
  cy.request({
    method: 'DELETE',
    url: `/1/boards/${_id}?&key=${API_KEY}&token=${API_TOKEN}`,
  })
})
