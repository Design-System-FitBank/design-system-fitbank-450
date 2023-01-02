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
    cy.get('[data-testid="body"]').should('have.text', title)
    cy.get('[data-testid="bodySmall"]').should('have.text', subtitle)
    cy.get('[data-testid="input"]').should('have.attr', 'placeholder', placeholder)
  })

  it('Deve verificar se o botão adicionar insere tag caso o input esteja vazio', () => {
    cy.get('.sc-fnGiBr').click()
    cy.get('[data-testid="tag-container"] > :nth-child(4)').should('not.be.visible')
  })

  it('Deve preencher o campo input e verificar se o click no botão adicionar está inserindo a tag', () => {
    cy.get('[data-testid="input"]').type(textFaker)
    cy.get('.sc-fnGiBr').click()
    cy.get('[data-testid="tag-container"] > :nth-child(4)').should('be.visible')
  })

  it('Deve verificar a funcionalidade do onClick para excluir dentro da tag', () => {
    cy.get(':nth-child(1) > .sc-hBxehG > :nth-child(3) > [data-testid="trash"]').click()
    cy.get('[data-testid="tag-container"] > :nth-child(4)').should('not.be.visible')
  })
})
