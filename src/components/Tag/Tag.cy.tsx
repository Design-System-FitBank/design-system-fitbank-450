import React from 'react'
import 'cypress-real-events/support'
import { mount } from 'cypress/react18'
import { GlobalStyles, Theme, ThemeDSProvider } from '../../theme'
import { faker } from '@faker-js/faker'
import { Tag, TagButtonListProps } from './'

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

  it('Deve verificar se os textos estão informados corretamente', () => {
    cy.get('[data-testid="bodyLarge"]').should('have.text', title)
    cy.get('[data-testid="body"]').should('have.text', subtitle)
    cy.get('[data-testid="input"]').should('have.attr', 'placeholder', placeholder)
  })

  it('Deve verificar o input', () => {
    cy.get('[data-testid="tag-input"]')
      .should('exist')
      .and('have.css', 'display', 'flex')
      .and('have.css', 'height', '48px')
      .and('have.css', 'align-items', 'center')
  })

  it('Deve verificar o tag content', () => {
    cy.get('[data-testid="tag-content"]')
      .should('exist')
      .and('have.css', 'display', 'flex')
      .and('have.css', 'height', '48px')
      .and('have.css', 'margin-top', '16px')
  })

  it('Deve verificar o wrap', () => {
    cy.get('[data-testid="wrap"]')
      .should('exist')
      .and('have.css', 'display', 'flex')
      .and('have.css', 'position', 'relative')
      .and('have.css', 'width', '452px')
      .and('have.css', 'flex-wrap', 'wrap')
  })

  it('Deve verificar se o botão adicionar insere tag caso o input esteja vazio', () => {
    cy.get('[data-testid="tag-content"] > .sc-fEXmlR').click()
    cy.get('[data-testid="tag-component"]').should('not.be.visible')
  })

  it('Deve preencher o campo input e verificar se o click no botão adicionar está inserindo a tag', () => {
    cy.get('[data-testid="input"]').type(textFaker)
    cy.get('[data-testid="tag-content"] > .sc-fEXmlR').click()
    cy.get('[data-testid="tag-component"]').should('be.visible')
    cy.get('[data-testid="wrap"] > .sc-fEXmlR').contains(textFaker)
  })

  it('Deve verificar a funcionalidade do onClick para excluir dentro da tag', () => {
    cy.get('[data-testid="wrap"] > .sc-fEXmlR').click()
    cy.get('[data-testid="tag-component"]').should('not.be.visible')
  })
})
