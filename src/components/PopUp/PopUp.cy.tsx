import React from 'react'
import { faker } from '@faker-js/faker'
import 'cypress-real-events/support'
import { GlobalStyles, Theme, ThemeDSProvider } from '../../theme'
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

  it('Deve executar o componente loading dentro do modal', () => {
    cy.viewport(1280, 768)
    cy.get('[data-testid="loading"]').should('exist')
  })

  it('Checa se o width e height do PopUp estão corretos e a div de loading existe', () => {
    cy.viewport(1280, 768)
    cy.get('[data-testid="container-modal"]').should('have.css', 'width', '656px')
    .and('have.css', 'height', '308px')
    cy.get('[data-testid="loading"]').should('exist')    
  })

  it('Deve mostrar a tela de success após o componente de carregamento loading', () => {
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

  it('Deve mostrar a tela de error após o componente de carregamento loading', () => {
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

  it('Checa se há alguma mensagem e mostra a tela de success após o componente de carregamento loading ', () => {
    cy.viewport(1280, 768)
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <PopUp loading={false} success={true} />
      </ThemeDSProvider>
    )
    cy.get('[data-testid="success-Container"]').should('exist')
  })

  it('Checa se há alguma mensagem e mostra a tela de error após o componente de carregamento loading', () => {
    cy.viewport(1280, 768)
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <PopUp loading={false} success={false} />
      </ThemeDSProvider>
    )
    cy.get('[data-testid="error-Container"]').should('exist')
  })
  


  it('Checa se a tela de sucesso esta carregando com o icone de done', () => {
    cy.viewport(1280, 768)
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <PopUp loading={false} success={true} message={message} />
      </ThemeDSProvider>
    )
    cy.get('[data-testid="done"]').should('exist')
  })

  it('Checa se a tela de erro esta carregando com o icone de cancel', () => {
    cy.viewport(1280, 768)
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <PopUp loading={false} success={false} message={message} />
      </ThemeDSProvider>
    )
    cy.get('[data-testid="cancel"]').should('exist')
  })
  it('Caso nao tenha mensagem, mostrar tela de sucesso com icone de done', () => {
    cy.viewport(1280, 768)
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <PopUp loading={false} success={true} />
      </ThemeDSProvider>
    )
    cy.get('[data-testid="done"]').should('exist')
  })
})
