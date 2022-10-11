import React from 'react'

import { faker } from '@faker-js/faker'
import 'cypress-real-events/support'

import { mount } from 'cypress/react18'
import { GlobalStyles, Theme, ThemeDSProvider } from '../../theme'

import { Select } from '.'

describe('Select', () => {
  const placeholder = faker.lorem.word()
  const title = faker.lorem.word()
  const opts = [faker.lorem.word(), faker.lorem.word(), faker.lorem.word()]

  /**
   *  Default test
   */
  it('Deve conter titulo, placeholder e uma lista de opções', () => {
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Select title={title} placeholder={placeholder} options={opts} />
      </ThemeDSProvider>
    )
    cy.get('[data-testid = "label"]').should('have.text', title)
    cy.get('[data-testid = "input"]').should('have.attr', 'placeholder', placeholder)
    .and('have.text', 'options', opts)
  })

  it('Deve conter o componente Select default', () => {
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Select title={title} placeholder={placeholder} options={opts} />
      </ThemeDSProvider>
    )
    cy.get('[data-testid = "container"]')
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

  it('Deve conter o titulo com a cor primaria', () => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Select title={title} placeholder={placeholder} options={opts} />
      </ThemeDSProvider>
    )
    cy.get('[data-testid="label"]')
      .should('have.css', 'color', 'rgb(50, 55, 81)')
  })

  it('Deve conter o estado Hover', () => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Select title={title} placeholder={placeholder} options={opts} />
      </ThemeDSProvider>
    )
    cy.get('[data-testid="container"]').realHover()
    cy.get('[data-testid="container"]').should('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.1) 2px 2px 4px 0px')
  })

  it('Deve ter a animação de rotação no icone de seta', () => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Select title={title} placeholder={placeholder} options={opts} />
      </ThemeDSProvider>
    )
    cy.get('[data-testeid="arrowDown"]').realMouseDown()
    cy.get('[data-testid="arrowDown"]').should('have.css', 'transform', 'rotate(180deg)')
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

  // it('', () => {
  //   cy.mount(
  //     <ThemeDSProvider theme={Theme}>
  //       <GlobalStyles />
  //       <Select title={title} placeholder={placeholder} options={opts} />
  //     </ThemeDSProvider>
  //   )
  //   cy.get('')
  // })
})
