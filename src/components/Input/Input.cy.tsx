import React from 'react'
import { mount } from 'cypress/react18'
import { GlobalStyles, Theme, ThemeDSProvider } from '../../theme'
import { Input } from '.'

describe('Input component', () => {
  it('Deve ser informado o titulo e placeholder no componente Default', () => {
    const titleFake = 'testLabel'
    const placeholderFake = 'testPlaceholder'

    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Input title={titleFake} placeholder={placeholderFake} />
      </ThemeDSProvider>
    )
    cy.get('[data-testid="label"]').should('have.text', titleFake)
    cy.get('[data-testid="input"]').should('have.attr', 'placeholder', placeholderFake)
  })
})
