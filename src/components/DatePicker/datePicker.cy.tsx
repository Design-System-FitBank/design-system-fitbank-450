import React from 'react'

import { faker } from '@faker-js/faker'

import { GlobalStyles, Theme, ThemeDSProvider } from '../../theme'
import { DatePicker } from './'

describe('Date Picker Component', () => {
  const title = faker.lorem.word()

  beforeEach(() => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <DatePicker children={title} />
      </ThemeDSProvider>
    )
  })

  it('Deve conter o componente Date Picker Default', () => {
    cy.get('[data-testid="container"]')
  })
})
