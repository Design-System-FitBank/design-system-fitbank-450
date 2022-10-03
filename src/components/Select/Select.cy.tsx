import React from 'react'

import { faker } from '@faker-js/faker'

import { mount } from 'cypress/react18'
import { GlobalStyles, Theme, ThemeDSProvider } from '../../theme'

import { Select } from '.'

describe('Select', () => {
  /**
   *  Default test
   */
  it('Deve conter titulo, e placeholder', () => {
    const placeholder = faker.lorem.word()
    const title = faker.lorem.word()

    const opts = [faker.lorem.word(), faker.lorem.word(), faker.lorem.word()]

    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Select title={title} placeholder={placeholder} options={opts} />
      </ThemeDSProvider>
    )
    cy.get('[data-testid = "label"]').should('have.text', title)
    cy.get('[data-testid = "input"]').should('have.attr', 'placeholder', placeholder)
    //.and('have.attr', 'options')
  })
})
