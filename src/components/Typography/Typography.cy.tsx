import React from 'react'
import { composeStories } from '@storybook/testing-react'
import { mount } from 'cypress/react18'

import * as stories from './Typography.stories'
import { GlobalStyles, Theme, ThemeDSProvider } from '../../theme'

const { Headline, Subtitle, Body, Button } = composeStories(stories)

describe('Typography', () => {
  it('O Headline deve conter a fonte Roboto, o peso da fonte BOLD e o tamanho de 56px', () => {
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Headline />
      </ThemeDSProvider>
    )
    cy.get('.sc-bczRLJ')
      .should('have.css', 'font-family', 'Roboto')
      .and('have.css', 'font-weight', '700')
      .and('have.css', 'font-size', '10px')
  }),
    it('O Subtitle deve conter a fonte-family Roboto, o peso da fonte BOLD e o tamanho de 56px', () => {
      mount(
        <ThemeDSProvider theme={Theme}>
          <GlobalStyles />
          <Subtitle />
        </ThemeDSProvider>
      )
      cy.get('.sc-bczRLJ')
        .should('have.css', 'font-family', 'Roboto')
        .and('have.css', 'font-weight', '700')
        .and('have.css', 'font-size', '10px')
    })
})
