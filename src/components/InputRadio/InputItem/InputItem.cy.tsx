import React from 'react'
import { faker } from '@faker-js/faker'
import { GlobalStyles, Theme, ThemeDSProvider } from '../../../theme'
import { InputItem } from '.'

describe('Radio', () => {
  const option = faker.lorem.word()

  it('Deve ser o componente radio', () => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <InputItem option={option} />
      </ThemeDSProvider>
    )
    cy.get('[data-testid="radio"]')
      .should('be.visible')
      .and('have.css', 'width', '16px')
      .and('have.css', 'height', '16px')
      .and('have.css', 'background-color', 'rgb(255, 255, 255)')
      .and('have.css', 'border', '1px solid rgb(167, 167, 167)')
      .and('have.css', 'border-radius', '20px')
      .and('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.1) 2px 4px 6px 0px')
      .and('have.css', 'display', 'flex')
      .and('have.css', 'justify-content', 'center')
      .and('have.css', 'align-items', 'center')
  })

  it('Deve ser o container com o radio, titulo e lista', () => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <InputItem option={option} />
      </ThemeDSProvider>
    )
    cy.get('[data-testid="radio-container-child"]')
      .should('have.css', 'display', 'flex')
      .and('have.css', 'flex-direction', 'row')
      .and('have.css', 'align-items', 'center')
      .and('have.css', 'gap', '12px')

    cy.get('[data-testid="radio"]').should('exist')
    cy.get('[data-testid="typography"]').should('exist').and('not.be.empty')
  })
})
