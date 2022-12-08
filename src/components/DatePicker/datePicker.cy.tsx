import React from 'react'
import { GlobalStyles, Theme, ThemeDSProvider } from '../../theme'
import { faker } from '@faker-js/faker'
import { DatePicker } from './'

describe('Date Picker Component', () => {
  const title = faker.lorem.word()

  beforeEach(() => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <DatePicker children={title} />
      </ThemeDSProvider>
    )
  })

  it('Deve conter o componente Date Picker Default', () => {
    cy.get('[data-testid="container"]')
      .should('have.css', 'background-color', 'rgb(50, 55, 81)')
      .and('have.css', 'color', 'rgb(255, 255, 255)')
      .and('have.css', 'width', '100px')
      .and('have.css', 'height', '100px')
  })
})
