import React from 'react'
import { GlobalStyles, Theme, ThemeDSProvider } from '../../theme'
import { Header } from '.'
import { faker } from '@faker-js/faker'

describe('Header Default', () => {
  const text = faker.lorem.word()
  beforeEach(() => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Header
          onSearch={cy.stub().as('onSearch')}
          accountName={text}
          onClickOptions={cy.stub().as('onClickOptions')}
        />
      </ThemeDSProvider>
    )
  })
  it('Deve mostrar componente de Barra de Pesquisa', () => {
    cy.get('[data-testid="container"]')
      .should('be.visible')
      .and('have.css', 'height', '64px')
      .and('have.css', 'width', '500px')
      .and('have.css', 'background-color', 'rgb(50, 55, 81)')
      .and('have.css', 'align-items', 'center')
      .and('have.css', 'padding-left', '12px')
  })

  it('Deve mostra um input de texto', () => {
    cy.get('[data-testid="input"]')
      .should('exist')
      .and('have.css', 'height', '38px')
      .and('have.css', 'width', '410px')
      .and('have.css', 'border-radius', '10px')
      .and('have.attr', 'placeholder', 'Pesquise')
      .and('have.css', 'padding-left', '28px')
      .and('have.css', 'font-style', 'italic')
      .and('have.css', 'font-weight', '400')
      .and('have.css', 'font-size', '12px')
      .and('have.css', 'line-height', '14px')
      .and('have.css', 'color', 'rgb(255, 255, 255)')
      .and('have.css', 'background-color', 'rgba(255, 255, 255, 0.1)')
      .and('have.css', 'border-color', 'rgba(255, 255, 255, 0.1)')
  })

  it('Deve mostrar o icone de lupa de pesquisa', () => {
    cy.get('[data-testid="lupa"]')
      .should('exist')
      .and('have.css', 'color', 'rgb(255, 255, 255)')
      .and('have.css', 'right', '20px')
      .and('have.css', 'top', '8px')
      .and('have.css', 'cursor', 'pointer')
      .get('[data-testid="wrap"]')
      .should('have.css', 'align-items', 'center')
  })

  it('Deve mostrar o icone de Avatar do Usuario', () => {
    cy.get('[data-testid="avatar"]').should('exist')
  })

  it('Deve a chamar a função onSearch', () => {
    cy.get('[data-testid = "input"]').type(text)
    cy.get('[data-testid = "lupa"]').click()
    cy.get('@onSearch').should('have.been.calledWith', text)
  })

  it('Deve conter o nome de Usuario', () => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Header
          onSearch={cy.stub().as('onSearch')}
          accountName={text}
          onClickOptions={cy.stub().as('onClickOptions')}
        />
      </ThemeDSProvider>
    )
    cy.get('[data-testid = "usuario"]')
      .should('contain.text', 'Olá,')
      .and('contain.text', text)
      .and('have.css', 'color', 'rgb(255, 255, 255)')
  })

  it('Deve mostrar o icone de Options', () => {
    cy.get('[data-testid="options"]').should('exist').and('have.css', 'color', 'rgb(255, 255, 255)')
  })
  it('Deve chamar a função onOptionsClick', () => {
    cy.get('[data-testid="opt"]').click().wait(350)
    cy.get('@onClickOptions').should('have.been.called')
  })
})
