import React from 'react'
import { GlobalStyles, Theme, ThemeDSProvider } from '../../../theme'
import { InputItem } from '.'

describe('Checkbox', () => {
  it('Deve ser o componente checkbox', () => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <InputItem />
      </ThemeDSProvider>
    )

    cy.get('[data-testid="checkbox"]')
      .should('have.css', 'width', '15px')
      .and('have.css', 'height', '15px')
      .and('have.css', 'border-radius', '3px')
      .and('have.css', 'border', '1px solid rgb(51, 55, 80)')
  })
})
