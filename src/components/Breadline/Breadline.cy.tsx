import React from 'react'
import { Breadline } from '.'
import { faker } from '@faker-js/faker'
import { GlobalStyles, ThemeDSProvider } from '../../theme'

// const path = ['Area PIX', 'Pagamentos']
const path = Array(3).fill(faker.lorem.word())

describe('Breadline Default', () => {
  beforeEach(() => {
    cy.mount(
      <ThemeDSProvider>
        <GlobalStyles />
        <Breadline path={path} onClick={cy.stub().as('onClick')} />
      </ThemeDSProvider>
    )
    cy.wait(500)
    cy.viewport(1080, 720)
  })

  afterEach(() => cy.wait(500))

  it('Deve mostrar o funcionamento do onClick em todos os elementos, menos o último. Também deve verificar se o onClick está sendo chamado', () => {
    cy.get('[data-testid="bloc"]')
      .get('[data-testid="home"] > [data-testid="typography"] > [data-testid="h5"]')
      .click()
      .get('.sc-hBxehG > [data-testid="typography"] > [data-testid="h5"]')
      .click()
      .get('.sc-fEXmlR > [data-testid="typography"] > [data-testid="h5"]')
      .click()
    cy.get('@onClick').should('have.been.called')
  })

  it('Deve mostrar a mesma quantidade de elementos do array e verificar se o Inicio está presente junto deles', () => {
    const length = path.length

    cy.get('[data-testid="bloc"]').children().should('have.length', length)
    cy.get('[data-testid="home"]').should('be.visible')
  })

  it('Deve verificar se estilização está seguindo os padrões', () => {
    cy.get('[data-testid="home"]').should('have.css', 'padding-right', '50px')
    cy.get('[data-testid="bloc"]').should('have.css', 'display', 'flex').and('have.css', 'align-items', 'center')
    cy.get('[data-testid="container"]')
      .should('have.css', 'display', 'flex')
      .and('have.css', 'text-align', 'center')
      .and('have.css', 'align-items', 'center')
      .and('have.css', 'color', 'rgb(50, 55, 81)')
  })
})
