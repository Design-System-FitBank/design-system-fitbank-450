import React from 'react'

import { faker } from '@faker-js/faker'
import 'cypress-real-events/support'

import { mount } from 'cypress/react18'
import { GlobalStyles, Theme, ThemeDSProvider } from '../../theme'

import { Select } from '.'

describe('Select', () => {
  const placeholder = faker.lorem.word()
  const title = faker.lorem.word()
  const optionsList = [faker.lorem.word(), faker.lorem.word(), faker.lorem.word()]

  beforeEach(() => {
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Select title={title} placeholder={placeholder} options={optionsList} onSelected={cy.stub().as('onSelected')} />
      </ThemeDSProvider>
    )
    cy.wait(100)
  })

  afterEach(() => {
    cy.wait(100)
  })

  it('Deve conter titulo, placeholder e uma lista de opções', () => {
    cy.get('[data-testid = "label"]')
      .should('have.text', title)
      .and('have.css', 'color', 'rgb(50, 55, 81)')
      .and('have.css', 'max-width', '320px')
      .and('have.css', 'max-height', '20px')
    cy.get('[data-testid = "inputContent"]').should('have.attr', 'placeholder', placeholder)
  })

  optionsList.forEach((text: string) => {
    it(`Deve ser o texto ${text} da lista de Options`, () => {
      cy.contains(text).should('exist').and('have.text', text)
    })
  })

  it('Deve conter o componente Select default', () => {
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
  })

  it('Deve conter o estado Hover com uma aparencia da elevação do componente', () => {
    cy.get('[data-testid="input"]').realHover()
    cy.get('[data-testid="input"]').should('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.1) 2px 2px 4px 0px')
  })

  it('Deve ter a animação de rotação no icone de seta quando for apertado o input', () => {
    cy.get('[data-testid="input"]').click()
    cy.get('[data-testid="arrowDown"]')
      .should('have.css', 'cursor', 'pointer')
      .and('have.css', 'transition', 'all 0s ease 0s')
  })

  it('Deve conter a lista de opções quando clicar no input com no maximo 3 itens.', () => {
    cy.get('[data-testid="input"]').click()
    cy.get('[data-testid="modal"]')
      .should('have.css', 'width', '320px')
      .and('have.css', 'max-width', '320px')
      .and('have.css', 'font-family', 'Roboto')
      .and('have.css', 'font-size', '16px')
  })

  it('Deve conter o background light no modal. Junto com a barra de scroll quando tiver mais de 3 itens de opção', () => {
    const optionsList = [faker.lorem.word(), faker.lorem.word(), faker.lorem.word(), faker.lorem.word()]
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Select title={title} placeholder={placeholder} options={optionsList} onSelected={cy.stub().as('onSelected')} />
      </ThemeDSProvider>
    )
    cy.get('[data-testid="input"]').click()
    cy.get('[data-testid="modal"]')
      .should('have.css', 'width', '320px')
      .and('have.css', 'max-width', '320px')
      .and('have.css', 'overflow-y', 'scroll')
    cy.get('[data-testid="modal"]').children().should('have.length', optionsList.length)
  })

  it('Deve a chamar a função onSelected', () => {
    cy.get('[data-testid="input"]').click()
    cy.get('[data-testid="modal"]').get('[data-testid="item-0"]').click()
    cy.get('@onSelected').should('have.been.calledWith', optionsList[0])
  })
})
