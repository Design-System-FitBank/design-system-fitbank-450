import React from 'react'
import 'cypress-real-events/support'
import { Card } from './'
import { GlobalStyles, Theme, ThemeDSProvider } from '../../theme'
import { faker } from '@faker-js/faker'
import { mount } from 'cypress/react18'

describe('Card Default', () => {
  beforeEach(() => cy.wait(1000))
  afterEach(() => cy.wait(1000))
  const label = faker.lorem.word()

  it('Deve conter o componente Default Card', () => {
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Card>{label}</Card>
      </ThemeDSProvider>
    )
    cy.get('[data-testeid="card"]')
      .should('have.css', 'display', 'flex')
      .and('have.css', 'background-color', 'rgb(249, 249, 249)')
      .and('have.css', 'justify-content', 'center')
      .and('have.css', 'align-items', 'center')
      .and('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.1) 2px 4px 6px 0px')
      .and('have.css', 'height', '408px')
      .and('have.css', 'width', '656px')
  })

  it('Deve conter o componente Card com a cor no tema escuro', () => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Card color='dark'>{label}</Card>
      </ThemeDSProvider>
    )
    cy.get('[data-testeid="card"]')
      .should('have.css', 'display', 'flex')
      .and('have.css', 'background-color', 'rgb(33, 37, 54)')
      .and('have.css', 'justify-content', 'center')
      .and('have.css', 'align-items', 'center')
      .and('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.1) 2px 4px 6px 0px')
      .and('have.css', 'height', '408px')
      .and('have.css', 'width', '656px')
  })

  it('Deve conter o componente Card com o atributo de elevacão(sombras) desativado', () => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Card color='light' elevation={false}>
          {label}
        </Card>
      </ThemeDSProvider>
    )
    cy.get('[data-testeid="card"]')
      .should('have.css', 'display', 'flex')
      .and('have.css', 'background-color', 'rgb(249, 249, 249)')
      .and('have.css', 'justify-content', 'center')
      .and('have.css', 'align-items', 'center')
      .and('have.css', 'box-shadow', 'none')
      .and('have.css', 'height', '408px')
      .and('have.css', 'width', '656px')
  })

  it('Deve conter o componente Card com as medidas de largura e altura dadas pelo usuário', () => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Card width={200} height={300} color='light'>
          {label}
        </Card>
      </ThemeDSProvider>
    )
    cy.get('[data-testeid="card"]')
      .should('have.css', 'display', 'flex')
      .and('have.css', 'background-color', 'rgb(249, 249, 249)')
      .and('have.css', 'justify-content', 'center')
      .and('have.css', 'align-items', 'center')
      .and('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.1) 2px 4px 6px 0px')
  })
})
