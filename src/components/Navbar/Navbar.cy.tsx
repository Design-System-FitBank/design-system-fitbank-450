import { mount } from 'cypress/react18'
import React from 'react'
import { GlobalStyles, Theme, ThemeDSProvider } from '../../theme'
import { Navbar } from '.'
import { faker } from '@faker-js/faker'

describe('Navbar component', () => {
  const dataUser = {
    businessUnit: faker.lorem.word(),
    accountName: faker.lorem.word(),
    uniqueIdentifier: faker.lorem.word()
  }

  it('deve mostrar componente default', () => {
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Navbar dataUser={dataUser} />
      </ThemeDSProvider>
    )
    cy.get('[data-testid="avatar"]').should('exist')
    cy.get('[data-testid="data"]').type(dataUser.businessUnit).should('have.text', dataUser.businessUnit)
  })
})
