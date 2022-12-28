import React from 'react'

import 'cypress-real-events/support'

import { mount } from 'cypress/react18'
import { GlobalStyles, Theme, ThemeDSProvider } from '../../theme'
import { faker } from '@faker-js/faker'

import { Tag, TagButtonListProps } from './'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { should } from 'chai'

describe('Tag', () => {
  const tagButtonList: TagButtonListProps[] = []
  const title = 'Tags'
  const subtitle = 'Insira marcações para identificar seus gastos. Use nossa sugestão ou personalise as tags.'
  const placeholder = 'Digite uma tag'
  const textFaker = faker.lorem.word()

  beforeEach(() => {
    cy.wait(500)
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Tag tagButtonList={tagButtonList} />
      </ThemeDSProvider>
    )
  })

  it('Deve mostrar o componente default', () => {
    cy.get('[data-testid="body"]').should('have.text', title)

    cy.get('[data-testid="bodySmall"]').should('have.text', subtitle)

    cy.get('[data-testid="taginput"]')
      .should('have.css', 'border', '0px none rgb(1, 7, 22)')
      .and('have.css', 'margin-right', '24px')
      .and('have.css', 'width', '287px')
      .and('have.css', 'height', '48px')

    cy.get('[data-testid="input"')
      .should('have.attr', 'placeholder', placeholder)
      .and('have.css', 'border', '1px solid rgb(196, 196, 196)')
      .and('have.css', 'color', 'rgb(50, 55, 81)')
      .and('have.css', 'background-color', 'rgb(255, 255, 255)')
      .and('have.css', 'font-weight', '400')
      .and('have.css', 'font-size', '18px')
      .and('have.css', 'justify-content', 'flex-start')
      .and('have.css', 'padding-left', '16px')
      .and('have.css', 'height', '48px')
      .and('have.css', 'border-radius', '6px')

    cy.get('[data-testeid="button"]')
      .should('have.css', 'color', 'rgb(50, 55, 81)')
      .and('have.css', 'background-color', 'rgb(255, 255, 255)')
      .and('have.css', 'border', '1px solid rgb(50, 55, 81)')
      .and('have.css', 'box-shadow', 'none')

    //   .and('have.text', 'Adicionar')
    //   .get('.sc-kgTSHT > :nth-child(3)')
    //   .should('not.be.empty')
    // cy.get('.sc-kgTSHT > :nth-child(1)').should('be.empty')
    //cy.
  })

  it('Deve inserir a tag no input', () => {
    cy.get('[data-testid="input"]').type(faker.lorem.word())

    cy.get('[data-testeid="button"]').should('have.text', 'Adicionar').click()
  })

  it('Deve inserir a tag no input', () => {
    cy.get('[data-testid="trash"]').click()
    //cy.get('.sc-ftTHYK > .sc-pyfCe')
  })
})
