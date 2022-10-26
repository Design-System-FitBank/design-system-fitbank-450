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
      .and('have.css', 'padding-top', '4px')
    cy.get(`[data-testid="icon"]`).should('have.css', 'color', 'rgb(255, 255, 255)')
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
