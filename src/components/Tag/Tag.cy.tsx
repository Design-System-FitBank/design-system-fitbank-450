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

  it('Deve verificar se o botão adicionar insere tag caso o input esteja vazio', () => {
    cy.get('[data-testeid="button"]').should('have.text', 'Adicionar').click()
  })

  it('Deve preencher o campo input e verificar se o click no botão adicionar está inserindo a tag', () => {
    cy.get('[data-testid="input"]').type(faker.lorem.word())

    cy.get('[data-testeid="button"]').should('have.text', 'Adicionar').click()
  })

  it('Deve verificar a funcionalidade do onClick para excluir dentro da tag', () => {
    cy.get('[data-testid="trash"]').click()
  })
})
