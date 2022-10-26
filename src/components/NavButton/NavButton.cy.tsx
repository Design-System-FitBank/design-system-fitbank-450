import React from 'react'

import { faker } from '@faker-js/faker'
import 'cypress-real-events/support'

import { Icon } from '../Icon'
import { NavButton } from '.'
import { GlobalStyles, Theme, ThemeDSProvider } from '../../theme'

describe('NavButton Default', () => {
  const icon = <Icon name='moneyNote' />
  const label = faker.lorem.word()
  beforeEach(() => {
    cy.wait(100)
  })
  afterEach(() => {
    cy.wait(100)
  })
  it('Deve ser o componente Default e quando instanciá-lo devo passar o ícone obrigatoriamente e um título opcional', () => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <NavButton icon={icon} onClick={cy.stub().as('onclick')}>
          {label}
        </NavButton>
      </ThemeDSProvider>
    )
      .get('[data-testid="nav-button"]')
      .should('have.css', 'width', '86px')
      .and('have.css', 'height', '86px')
      .and('have.css', 'padding', '8px 4px')
      .and('have.css', 'gap', '4px')
      .and('have.css', 'border', '1px solid rgba(0, 0, 0, 0)')
      .and('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.1) 2px 2px 4px 0px')
      .and('have.css', 'background-color', 'rgb(255, 255, 255)')
      .and('have.css', 'color', 'rgb(50, 55, 81)')
      .and('have.css', 'justify-content', 'center')
      .and('have.css', 'align-items', 'center')
      .and('have.css', 'flex-direction', 'column')
      .and('have.css', 'border-radius', '16px')
      .and('have.css', 'overflow', 'hidden')
      .and('have.text', label)
      .and('have.css', 'font-weight', '500')
      .and('have.css', 'font-size', '11px')

    cy.get('[data-testid="nav-button"]').click()
    cy.get('@onclick').should('have.been.calledOnce')
  })

  it('Deve ser a div que contém o ícone', () => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <NavButton icon={icon} onClick={cy.stub().as('onclick')}>
          {label}
        </NavButton>
      </ThemeDSProvider>
    )
    cy.get('[data-testid="nav-button-icon"]')
      .should('be.visible')
      .and('have.css', 'width', '38px')
      .and('have.css', 'height', '38px')
  })

  it('Deve ser o componente Default no estado Hover', () => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <NavButton icon={icon} onClick={cy.stub().as('onclick')}>
          {label}
        </NavButton>
      </ThemeDSProvider>
    )
    cy.get('[data-testid="nav-button"]').realHover()
    cy.get('[data-testid="nav-button"]').should('have.css', 'border', '1px solid rgb(196, 196, 196)')
  })

  it('Deve ser o componente Default no estado Active', () => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <NavButton icon={icon} onClick={cy.stub().as('onclick')}>
          {label}
        </NavButton>
      </ThemeDSProvider>
    )
    cy.get('[data-testid="nav-button"]').realMouseDown()
    cy.get('[data-testid="nav-button"]').should('have.css', 'border', '1px solid rgb(50, 55, 81)')
  })

  it('Deve ser o componente Default no estado Disabled', () => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <NavButton icon={icon} disabled={true} onClick={cy.stub().as('onclick')}>
          {label}
        </NavButton>
      </ThemeDSProvider>
    )
    cy.get('[data-testid="nav-button"]')
      .should('have.css', 'border', '1px solid rgb(196, 196, 196)')
      .and('have.css', 'color', 'rgb(196, 196, 196)')
      .and('have.css', 'box-shadow', 'none')
      .and('have.css', 'cursor', 'auto')
  })
})

describe('NavButton Small', () => {
  const icon = <Icon name='moneyNote' />
  beforeEach(() => {
    cy.wait(100)
  })
  afterEach(() => {
    cy.wait(100)
  })
  it('Deve ser o componente Small quando passar o size small', () => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <NavButton icon={icon} onClick={cy.stub().as('onclick')} size={'small'}></NavButton>
      </ThemeDSProvider>
    )
      .get('[data-testid="nav-button"]')
      .should('have.css', 'width', '54px')
      .and('have.css', 'height', '54px')

    cy.get('[data-testid="caption"]').should('not.exist')
  })
})

describe('NavButton Large', () => {
  const icon = <Icon name='moneyNote' />
  const label = faker.lorem.word()
  beforeEach(() => {
    cy.wait(100)
  })
  afterEach(() => {
    cy.wait(100)
  })
  it('Deve ser o componente Large quando passar o size large', () => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <NavButton icon={icon} onClick={cy.stub().as('onclick')} size={'large'}>
          {label}
        </NavButton>
      </ThemeDSProvider>
    )
      .get('[data-testid="nav-button"]')
      .should('have.css', 'width', '160px')
      .and('have.css', 'height', '56px')
      .and('have.css', 'flex-direction', 'row')
      .and('have.css', 'gap', '8px')
      .and('have.css', 'padding', '8px')
      .and('have.css', 'justify-content', 'flex-start')
  })
})
