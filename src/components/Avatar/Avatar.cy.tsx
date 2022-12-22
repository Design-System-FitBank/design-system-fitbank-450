import React from 'react'
import { mount } from 'cypress/react18'
import { Avatar } from '.'
import { GlobalStyles, Theme, ThemeDSProvider } from '../../theme'

describe('Avatar Component', () => {
  beforeEach(() => {
    mount(
      <ThemeDSProvider>
        <GlobalStyles />
        <Avatar type='PF' />
      </ThemeDSProvider>
    )
  })

  it('deve mostrar o componente default', () => {
    cy.get('[data-testid="container"]')
      .should('be.visible')
      .and('have.css', 'width', '52px')
      .and('have.css', 'height', '52px')
      .and('have.css', 'background-color', 'rgb(50, 56, 79)')
      .and('have.css', 'border-radius', '52px')
      .and('have.css', 'align-items', 'center')
      .and('have.css', 'justify-content', 'center')

    cy.get('[data-testid="user"]')
      .should('have.attr', 'width', '36')
      .and('have.attr', 'height', '36')
  })
  it('deve mostrar o componente default com fundo branco', () => {
    mount(
      <ThemeDSProvider>
        <GlobalStyles />
        <Avatar type='PF' secondary />
      </ThemeDSProvider>
    )
    cy.get('[data-testid="container"]')
      .and('have.css', 'background-color', 'rgb(255, 255, 255)')
      .and('have.css', 'border-radius', '52px')
      .should('have.css', 'color', 'rgb(50, 56, 79)')
  })

  it('deve mostrar o componente small ', () => {
    mount(
      <ThemeDSProvider>
        <GlobalStyles />
        <Avatar type='PF' small />
      </ThemeDSProvider>
    )
    cy.get('[data-testid="container"]')
      .should('have.css', 'width', '36px')
      .and('have.css', 'height', '36px')

    cy.get('[data-testid="user"]')
      .should('have.attr', 'width', '20')
      .and('have.attr', 'height', '20')
  })

  it('deve mostrar icone user quando passado PF', () => {
    cy.get('[data-testid="user"]').should('be.visible')
  })

  it('deve mostrar icone enterprise quando passado PJ', () => {
    mount(
      <ThemeDSProvider>
        <GlobalStyles />
        <Avatar type='PJ' />
      </ThemeDSProvider>
    )
    cy.get('[data-testid="enterprise"]').should('be.visible')
  })
})
