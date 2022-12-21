import React from 'react'

import { faker } from '@faker-js/faker'
import 'cypress-real-events/support'

import { ButtonTitleAndSubtitle } from '.'
import { GlobalStyles, Theme, ThemeDSProvider } from '../../theme'

describe('Button Default', () => {
  const icon = 'userBank'
  const textFaker = faker.lorem.word()
  beforeEach(() => {
    cy.wait(1000)
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <ButtonTitleAndSubtitle
          title={textFaker}
          subtitle={textFaker}
          icon={icon}
          onClick={cy.stub().as('onclick')}
          disabled={false}
        />
      </ThemeDSProvider>
    )
  })
  afterEach(() => {
    cy.wait(1000)
  }) //Testando o css do botão
  it('Deve renderizar o botão', () => {
    cy.get('[data-testid="button"]')
      .should('have.css', 'display', 'flex')
      .and('have.css', 'justify-content', 'flex-start')
      .and('have.css', 'align-items', 'center')
      .and('have.css', 'flex-direction', 'row')
      .and('have.css', 'width', '442px')
      .and('have.css', 'height', '81px')
      .and('have.css', 'padding', '16px')
      .and('have.css', 'gap', '16px')
      .and('have.css', 'border', '1px solid rgba(0, 0, 0, 0)')
      .and('have.css', 'border-radius', '16px')
      .and('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.1) 2px 4px 6px 0px')
      .and('have.css', 'background-color', 'rgb(255, 255, 255)')
      .and('have.css', 'color', 'rgb(50, 55, 81)')
      .and('have.css', 'overflow', 'hidden')
      .and('have.css', 'cursor', 'pointer')

    cy.get('[data-testid="button"]').click()
    cy.get('@onclick').should('have.been.calledOnce')
    cy.get('[data-testid="button"]').should('have.css', 'cursor', 'pointer')
  }),
  it('Deve renderizar o botão com o icone', () => {
    cy.get('[data-testid="button"]')
      .get('[data-testid="icon"]')
      .should('have.css', 'width', '32px')
      .and('have.css', 'height', '32px')
  }),
  it('Deve renderizar o botão com o titulo', () => {
    cy.get('[data-testid="button"]')
      .get('[data-testid="button-title"]')
      .should('have.css', 'font-size', '16px')
      .and('have.css', 'font-weight', '700')
      .and('have.css', 'line-height', '24px')
      .and('have.css', 'letter-spacing', '0.5px')
      .and('have.css', 'text-align', 'left')
  }),
  it('Deve renderizar o botão com o subtitulo', () => {
    cy.get('[data-testid="button"]')
      .get('[data-testid="button-subtitle"]')
      .should('have.css', 'font-size', '12px')
      .and('have.css', 'font-weight', '400')
      .and('have.css', 'line-height', '18px')
      .and('have.css', 'letter-spacing', '0.5px')
      .and('have.css', 'text-align', 'left')
  }

}) ,
