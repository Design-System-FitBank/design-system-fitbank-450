import React from 'react'
import { mount } from 'cypress/react18'
import { Avatar } from '.'
import { GlobalStyles, Theme, ThemeDSProvider } from '../../theme'

describe('Avatar Component', () => {
  beforeEach(() => {
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Avatar type='PF' />
      </ThemeDSProvider>
    )
  })

  it('deve mostrar o componente default', () => {
    cy.get('[data-testid="container"]')
      .should('be.visible')
      .and('have.css', 'width', '50px')
      .and('have.css', 'height', '50px')
      .and('have.css', 'background-color', 'rgb(50, 55, 81)')
      .and('have.css', 'border-radius', '50px')
      .and('have.css', 'align-items', 'center')
      .and('have.css', 'justify-content', 'center')
    cy.get('[data-testid="user"]').should('have.attr', 'width', '35').and('have.attr', 'height', '35')
  })
  it('deve mostrar o componente default com fundo branco', () => {
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Avatar type='PF' secondary />
      </ThemeDSProvider>
    )
    cy.get('[data-testid="container"]')
      .and('have.css', 'background-color', 'rgb(255, 255, 255)')
      .and('have.css', 'border-radius', '50px')
      .should('have.css', 'color', 'rgb(50, 55, 81)')
  })

  it('deve mostrar o componente small ', () => {
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Avatar type='PF' small />
      </ThemeDSProvider>
    )
    cy.get('[data-testid="container"]').and('have.css', 'width', '35px').and('have.css', 'height', '35px')
    cy.get('[data-testid="user"]').should('have.attr', 'width', '22').and('have.attr', 'height', '22')
  })

  it('deve mostrar icone user quando passado PF', () => {
    cy.get('[data-testid="user"]').should('be.visible')
  })

  it('deve mostrar icone enterprise quando passado PJ', () => {
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Avatar type='PJ' />
      </ThemeDSProvider>
    )
    cy.get('[data-testid="enterprise"]').should('be.visible')
  })
})
