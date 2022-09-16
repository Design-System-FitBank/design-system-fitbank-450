import React from 'react'
import { composeStories } from '@storybook/testing-react'
import { mount } from 'cypress/react18'

import * as stories from './Button.stories'
import { GlobalStyles, Theme, ThemeDSProvider } from '../../theme'

const { Primary, Secondary } = composeStories(stories)

describe('Button', () => {
  it('Dever mostrar o botão default em caso de primary', () => {
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Primary />
      </ThemeDSProvider>
    )
    cy.get('.sc-bczRLJ').should('have.css', 'background-color', 'rgb(3, 168, 124)' )
  })
})
