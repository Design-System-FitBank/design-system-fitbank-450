import React from 'react'

import { faker } from '@faker-js/faker'
import 'cypress-real-events/support'

import { ButtonTitleAndSubtitle } from '.'
import { GlobalStyles, Theme, ThemeDSProvider } from '../../theme'

describe('Button Default', () => {
  const icon = 'userBank'
  const textFaker = faker.lorem.word()
  beforeEach(() => {
    cy.wait(100)
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <ButtonTitleAndSubtitle 
         title={textFaker}
         subtitle={textFaker}
         icon={icon}
         onClick={cy.stub().as('onclick')}
         disabled={false}
         />
      </ThemeDSProvider>
    )
  })
  afterEach(() => {
    cy.wait(100)
  })
  it('should render', () => {
    cy.get('[data-testid="button"]').should('be.visible')
  })
  it('should render icon', () => {
    cy.get('[data-testid="button-icon"]').should('be.visible')
  })
  it('should render text', () => {
    cy.get('[data-testid="button-text"]').should('be.visible')
  })
  it('should render title', () => {
    cy.get('[data-testid="button-text"]').contains(textFaker)
  })
  it('should render subtitle', () => {
    cy.get('[data-testid="button-text"]').contains(textFaker)
  })
  it('should call onClick', () => {
    cy.get('[data-testid="button"]').click()
    cy.get('@onclick').should('be.called')
  })
})
