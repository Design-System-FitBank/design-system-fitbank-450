import React from 'react'

import 'cypress-real-events/support'

import { mount } from 'cypress/react18'
import { faker } from '@faker-js/faker'
import { GlobalStyles, Theme, ThemeDSProvider } from '../../theme'

import { Footer } from './'

describe('Footer', () => {
  const message = faker.lorem.sentence(3)
  const phoneNumber = faker.phone.number()
  const secondaryPhoneNumber = faker.phone.number()
  const email = faker.internet.exampleEmail()

  beforeEach(() => {
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Footer message={message} phoneNumber={phoneNumber} email={email} />
      </ThemeDSProvider>
    )
    cy.wait(100)
  })

  it('Deve conter o componente Footer', () => {
    cy.get('[data-testid = "container"]')
      .should('have.css', 'width', '500.3636474609375px')
      .and('have.css', 'height', '108px')
      .and('have.css', 'display', 'flex')
      .and('have.css', 'flex-direction', 'column')
      .and('have.css', 'justify-content', 'center')
      .and('have.css', 'align-items', 'flex-start')
      .and('have.css', 'color', 'rgb(255, 255, 255)')
      .and('have.css', 'background-color', 'rgb(50, 55, 81)')
      .and('have.css', 'padding', '10px 48px')
  })

  it('Deve receber as informações passadas nas props', () => {
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Footer 
          message={message}
          phoneNumber={phoneNumber}
          secondaryPhoneNumber={secondaryPhoneNumber}
          email={email}
        />
      </ThemeDSProvider>
    )
    cy.get(':nth-child(1) > [data-testid="body"]').should('have.text', message)
    cy.get(':nth-child(2) > [data-testid="body"]').should('have.text', `${phoneNumber} | ${secondaryPhoneNumber}`)
    cy.get(':nth-child(3) > [data-testid="body"]').should('have.text', email)
  })
})
