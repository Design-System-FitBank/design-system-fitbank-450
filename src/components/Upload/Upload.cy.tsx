import React from 'react'
import { GlobalStyles, ThemeDSProvider } from '../../theme'
import { Upload } from '.'

describe('Upload component', () => {
  beforeEach(() => {
    cy.mount(
      <ThemeDSProvider>
        <GlobalStyles />
        <Upload onChangeFile={undefined} />
      </ThemeDSProvider>
    )
  })
  it('Deve mostrar componente upload', () => {
    cy.get('[data-testid="container"]')
      .should('be.visible')
      .and('have.css', 'width', '464px')
      .and('have.css', 'height', '272px')
      .and('have.css', 'display', 'flex')
      .and('have.css', 'flex-direction', 'column')
      .and('have.css', 'align-items', 'flex-start')
      .and('have.css', 'padding', '8px 0px')
      .and('have.css', 'gap', '24px')
  })
  it('Deve conter o título do componente', () => {
    cy.get('[data-testid = "title"]')
      .should('be.visible')
      .and('have.css', 'width', '144px')
      .and('have.css', 'height', '24px')
      .and('have.css', 'font-family', 'Roboto')
      .and('have.css', 'font-style', 'normal')
      .and('have.css', 'font-weight', '500')
      .and('have.css', 'font-size', '20px')
      .and('have.css', 'line-height', '24px')
      .and('have.css', 'text-align', 'center')
      .and('have.css', 'color', 'rgb(94, 94, 94)')
  })
  it('Deve conter o texto do corpo do componente', () => {
    cy.get('[data-testid = "bodyText"]')
      .should('be.visible')
      .and('have.css', 'width', '464px')
      .and('have.css', 'height', '20px')
      .and('have.css', 'font-family', 'Roboto')
      .and('have.css', 'font-style', 'normal')
      .and('have.css', 'font-weight', '400')
      .and('have.css', 'font-size', '14px')
      .and('have.css', 'line-height', '20px')
      .and('have.css', 'color', 'rgb(94, 94, 94)')
  })
  it('Deve conter o input de enviar arquivo', () => {
    cy.get('[data-testid = "inputContainer"]')
      .should('be.visible')
      .and('have.css', 'width', '464px')
      .and('have.css', 'height', '164px')
      .and('have.css', 'display', 'flex')
      .and('have.css', 'flex-direction', 'column')
      .and('have.css', 'align-items', 'center')
      .and('have.css', 'padding', '24px')
      .and('have.css', 'gap', '10px')
      .and('have.css', 'background-color', 'rgb(249, 249, 249)')
      .and('have.css', 'border', '1px dashed rgb(50, 56, 79)')
  })
  it('Deve conter o ícone', () => {
    cy.get('[data-testid = "upload"]')
      .should('be.visible')
      .and('have.css', 'width', '86px')
      .and('have.css', 'height', '86px')
      .and('have.css', 'color', 'rgb(187, 188, 197)')
  })
})
