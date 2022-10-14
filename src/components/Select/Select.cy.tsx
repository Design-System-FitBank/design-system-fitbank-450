import React from 'react'

import { faker } from '@faker-js/faker'
import 'cypress-real-events/support'

import { mount } from 'cypress/react18'
import { GlobalStyles, Theme, ThemeDSProvider } from '../../theme'

import { Select } from '.'

describe('Select', () => {
  beforeEach(() => {
    cy.wait(100)
  })

  afterEach(() => {
    cy.wait(100)
  })

  const placeholder = faker.lorem.word()
  const title = faker.lorem.word()
  const opts = [faker.lorem.word(), faker.lorem.word(), faker.lorem.word()]

  it('Deve conter titulo, placeholder e uma lista de opções', () => {
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Select title={title} placeholder={placeholder} options={opts} />
      </ThemeDSProvider>
    )
    cy.get('[data-testid = "select"]')
    cy.get('[data-testid = "label"]').should('have.text', title)
    cy.get('[data-testid = "input"]')
    cy.get('[data-testid = "inputContent"]').should('have.attr', 'placeholder', placeholder)
  })

  opts.forEach((text: string) => {
    it(`Deve ser o texto ${text} da lista de Options`, () => {
      cy.mount(
        <ThemeDSProvider theme={Theme}>
          <GlobalStyles />
          <Select title={title} placeholder={placeholder} options={opts} />
        </ThemeDSProvider>
      )
      cy.contains(text).should('exist')
    })
  })

  it('Deve conter o titulo com a cor primaria, com altura de 20px e comprimento 320px', () => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Select title={title} placeholder={placeholder} options={opts} />
      </ThemeDSProvider>
    )
    cy.get('[data-testid="label"]')
      .should('have.css', 'color', 'rgb(50, 55, 81)')
      .and('have.css', 'max-width', '320px')
      .and('have.css', 'max-height', '20px')
  })

  it('O valor do input deve começar como vazio', () => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Select title={title} placeholder={placeholder} options={opts} />
      </ThemeDSProvider>
    )
    cy.get('[data-testid="input"]').should('have.value', '')
  })

  it('Deve conter o componente Select default', () => {
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Select title={title} placeholder={placeholder} options={opts} />
      </ThemeDSProvider>
    )
    cy.get('[data-testid = "select"]')
    cy.get('[data-testid = "input"]')
      .should('have.css', 'max-width', '320px')
      .and('have.css', 'padding-top', '12px')
      .and('have.css', 'padding-right', '12px')
      .and('have.css', 'padding-bottom', '12px')
      .and('have.css', 'padding-left', '16px')
      .and('have.css', 'gap', '8px')
      .and('have.css', 'border', '1px solid rgb(196, 196, 196)')
      .and('have.css', 'background-color', 'rgb(255, 255, 255)')
      .and('have.css', 'flex-direction', 'row')
      .and('have.css', 'align-items', 'center')
      .and('have.css', 'justify-content', 'space-evenly')
      .and('have.css', 'border-radius', '6px')
      .and('have.css', 'transition', 'all 0.5s ease 0s')
  })

  it('Deve conter o estado Hover com uma aparencia da elevação do componente', () => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Select title={title} placeholder={placeholder} options={opts} />
      </ThemeDSProvider>
    )
    cy.get('[data-testid="input"]').realHover()
    cy.get('[data-testid="input"]').should('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.1) 2px 2px 4px 0px')
  })

  it('Deve ter a animação de rotação no icone de seta quando for apertado o input', () => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Select title={title} placeholder={placeholder} options={opts} />
      </ThemeDSProvider>
    )
    cy.get('[data-testid="input"]').click()
    cy.get('[data-testid="arrowDown"]')
      .should('have.css', 'cursor', 'pointer')
      .and('have.css', 'transition', 'all 0s ease 0s')
  })

  it('Deve conter a lista de opções quando clicar no input com no maximo 3 itens. Com a fonte dos itens Roboto e font-size de 16px', () => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Select title={title} placeholder={placeholder} options={opts} />
      </ThemeDSProvider>
    )
    cy.get('[data-testid="input"]').click()
    cy.get('[data-testid="modal"]')
      .should('have.css', 'width', '320px')
      .and('have.css', 'max-width', '320px')
    cy.get('[data-testid="modal"]')
      .should('have.css', 'font-family', 'Roboto')
      .and('have.css', 'font-size', '16px')
  })

  it('Deve conter o background light no modal. Junto com a barra de scroll quando tiver mais de 3 itens de opção', () => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Select title={title} placeholder={placeholder} options={opts} />
      </ThemeDSProvider>
    )
    cy.get('[data-testid="input"]').click()
    cy.get('[data-testid="modal"]')
      .should('have.css', 'width', '320px')
      .and('have.css', 'max-width', '320px')
      .and('have.css', 'overflow-y', 'scroll')
  })
})
