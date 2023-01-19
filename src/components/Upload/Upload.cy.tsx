import React from 'react'
import { GlobalStyles, ThemeDSProvider } from '../../theme'
import { Upload } from '.'

describe('Upload component', () => {
  beforeEach(() => {
    cy.mount(
      <ThemeDSProvider>
        <GlobalStyles />
        <Upload onChangeFile={cy.stub().as('onChangeFile')} />
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
      .and('have.css', 'padding', '8px')
      .and('have.css', 'gap', '24px')
  })
  it('Deve conter o título do componente', () => {
    cy.get('[data-testid = "title"]')
      .should('be.visible')
      .and('have.css', 'top', '8px')
      .and('have.css', 'text-align', 'center')
      .and('have.css', 'color', 'rgb(94, 94, 94)')
  })
  it('Deve conter o texto do corpo do componente', () => {
    cy.get('[data-testid = "bodyText"]').should('be.visible').and('have.css', 'color', 'rgb(94, 94, 94)')
  })
  it('Deve conter a área de enviar arquivo', () => {
    cy.get('[data-testid = "inputContainer"]')
      .should('be.visible')
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
      .should('exist')
      .and('have.css', 'width', '86px')
      .and('have.css', 'height', '86px')
      .and('have.css', 'color', 'rgb(187, 188, 197)')
  })
  it('Deve conter o input', () => {
    cy.get('[data-testid = "input"]').should('exist')
  })
  it('Deve Chamar a função _onChangeFile', () => {
    cy.get('[data-testid = "input').click()
    cy.get('@onChangeFile').should('have.been.called')
  })
})
