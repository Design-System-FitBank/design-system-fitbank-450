import React from 'react'
import { mount } from 'cypress/react18'
import { GlobalStyles, Theme, ThemeDSProvider } from '../../theme'
import { Input } from '.'

describe('Input component', () => {
  const titleFake = 'Input Label'
  const placeholderFake = 'Placeholder'
  const valide = 'Mensagem de erro'

  it('Deve ser informado o titulo e placeholder no componente Default', () => {
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Input type='text' title={titleFake} placeholder={placeholderFake} disabled={false} />
      </ThemeDSProvider>
    )
    cy.get('[data-testid="label"]').should('have.text', titleFake)
    cy.get('[data-testid="input"]').should('have.attr', 'placeholder', placeholderFake)
  })

  it('Deve mostrar o componente Input Default com seus respectivos valores de estilização', () => {
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Input type='text' title={titleFake} placeholder={placeholderFake} disabled={false} />
      </ThemeDSProvider>
    )
    cy.get('[data-testid="label"]')
      .should('have.css', 'max-width', '320px')
      .and('have.css', 'max-height', '20px')
      .and('have.css', 'text-transform', 'capitalize')
      .and('have.css', 'color', 'rgb(50, 55, 81)')
    cy.get('[data-testid="input"]')
      .should('have.css', 'width', '320px')
      .and('have.css', 'height', '48px')
      .and('have.css', 'border-radius', '6px')
      .and('have.css', 'padding-top', '12px')
      .and('have.css', 'padding-right', '16px')
      .and('have.css', 'padding-bottom', '12px')
      .and('have.css', 'padding-left', '16px')
      .and('have.css', 'border', '1px solid rgb(196, 196, 196)')
      .and('have.css', 'background-color', 'rgb(255, 255, 255)')
  })

  const passworld = 'password'

  it('Deve mostrar o componente Input Password', () => {
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Input type='password' title={titleFake} placeholder={placeholderFake} disabled={false} />
      </ThemeDSProvider>
    )
    cy.get('[data-testid="input"]').should('have.attr', 'placeholder', '•••••••••••')
  })
})
