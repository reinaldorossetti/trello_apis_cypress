const API_TOKEN = `${Cypress.env('ACCESS_TOKEN')}`
const API_KEY = `${Cypress.env('API_KEY')}`
const idOrganization = `${Cypress.env('idOrganization')}`

Cypress.Commands.add('create_a_board', _faker => {
  cy.request({
    method: 'POST',
    url: `/1/boards/?idOrganization=${idOrganization}&name=${_faker.name}&key=${API_KEY}&token=${API_TOKEN}`,
  })
})

Cypress.Commands.add('delete_board', _id => {
  cy.request({
    method: 'DELETE',
    url: `/1/boards/${_id}?&key=${API_KEY}&token=${API_TOKEN}`,
  })
})
