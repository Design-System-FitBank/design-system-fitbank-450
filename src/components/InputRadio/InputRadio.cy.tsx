import React from 'react'
import { faker } from '@faker-js/faker'
import { GlobalStyles, Theme, ThemeDSProvider } from '../../theme'
import { InputRadio } from '.'

describe('Radio', () => {
  const title = faker.lorem.words()
  const list = [faker.lorem.words(), faker.lorem.words(), faker.lorem.words(), faker.lorem.words()]

  it('Deve ser o container', () => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <InputRadio title={title} optionsList={list} />
      </ThemeDSProvider>
    )
    cy.get('[data-testid="radio-container"]')
  })
})
