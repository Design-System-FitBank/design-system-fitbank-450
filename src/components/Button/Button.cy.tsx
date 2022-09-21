import React from 'react'
import { mount } from 'cypress/react18'

import { GlobalStyles, Theme, ThemeDSProvider } from '../../theme'
import { Button } from '.'


describe('Button', () => {
  it('Dever mostrar o botão default em caso de primary', () => {
    const onClickStub = cy.stub()
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Button label='Teste' onClick={onClickStub} />
      </ThemeDSProvider>
    )
    cy.get('.sc-bczRLJ').should('have.css', 'background-color', 'rgb(3, 168, 124)' )
  })
})
