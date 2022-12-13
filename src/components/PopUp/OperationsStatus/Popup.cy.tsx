import React from 'react'
import { faker } from '@faker-js/faker'
import 'cypress-real-events/support'
import { GlobalStyles, Theme, ThemeDSProvider } from '../../../theme'
import { PopUp } from '.'


const message = faker.lorem.words()

describe('PopUp', () => {
  beforeEach(() => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <PopUp loading={true} success={false} message={message} />
      </ThemeDSProvider>
    )
    cy.wait(2000)
  })
  afterEach(() => cy.wait(500))

  it('Deve ficar carregando', () => {
    cy.viewport(1280, 768)
    cy.get('[data-testid="loading"]').should('exist')
  })

  it('Deve ser sucesso', () => {
    cy.viewport(1280, 768)
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <PopUp loading={false} success={true} message={message} />
      </ThemeDSProvider>
    )
    cy.get('[data-testid="success-Container"]').should('exist')

    cy.get('[data-testid="success-Container"]').contains(message)
  })

  it('Deve ser erro', () => {
    cy.viewport(1280, 768)
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <PopUp loading={false} success={false} message={message} />
      </ThemeDSProvider>
    )
    cy.get('[data-testid="error-Container"]').should('exist')
    cy.get('[data-testid="error-Container"]').contains(message)
  })

  it('Deve ser sucesso (sem a mensagem)', () => {
    cy.viewport(1280, 768)
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <PopUp loading={false} success={true} />
      </ThemeDSProvider>
    )
    cy.get('[data-testid="success-Container"]').should('exist')
  })

  it('Deve ser erro (sem a mensagem)', () => {
    cy.viewport(1280, 768)
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <PopUp loading={false} success={false} />
      </ThemeDSProvider>
    )
    cy.get('[data-testid="error-Container"]').should('exist')
  })
})
