import React from 'react'

import 'cypress-real-events/support'

import { mount } from 'cypress/react18'
import { GlobalStyles, ThemeDSProvider } from '../../theme'

import { Sidebar, NavButtonListProps } from './'

describe('Sidebar', () => {
  const navButtonList: NavButtonListProps[] = [
    {
      label: 'Pix',
      icon: 'pix',
      onClick: () => {
        cy.stub().as('')
      }
    },
    {
      label: 'Recarga',
      icon: 'topup',
      onClick: () => {
        cy.stub().as('')
      }
    },
    {
      label: 'Cartões',
      icon: 'cardMulti',
      onClick: () => {
        cy.stub().as('')
      }
    },
    {
      label: 'Pagamento',
      icon: 'payment',
      onClick: () => {
        cy.stub().as('')
      }
    },
    {
      label: 'Agendamento',
      icon: 'calendar',
      onClick: () => {
        cy.stub().as('')
      }
    },
    {
      label: 'Transferencia',
      icon: 'moneyTransfer',
      onClick: () => {
        cy.stub().as('')
      }
    }
  ]

  beforeEach(() => {
    mount(
      <ThemeDSProvider>
        <GlobalStyles />
        <Sidebar navButtonList={navButtonList} />
      </ThemeDSProvider>
    )
    cy.wait(100)
  })

  afterEach(() => {
    cy.wait(100)
  })

  it('Deve conter o componente Sidebar', () => {
    cy.get('[data-testid = "sidebar-container"]')
      .should('have.css', 'background-color', 'rgb(249, 249, 249)')
      .and('have.css', 'width', '320px')
    cy.get('[data-testid = "logo-container"]')
      .should('have.css', 'width', '140px')
      .and('have.css', 'height', '40px')
      .and('have.css', 'margin', '0px 20px')
    cy.get('[data-testid = "close-button-container"]')
      .should('have.css', 'display', 'flex')
      .and('have.css', 'justify-content', 'flex-end')
      .and('have.css', 'align-items', 'center')
      .and('have.css', 'margin', '12px')
      .and('have.css', 'gap', '12px')
      .and('have.css', 'font-weight', '500')
      .and('have.css', 'cursor', 'pointer')
    cy.get('[data-testid = "user-detail"]')
      .should('have.css', 'display', 'flex')
      .and('have.css', 'flex-direction', 'column')
      .and('have.css', 'justify-content', 'center')
      .and('have.css', 'align-items', 'center')
      .and('have.css', 'text-align', 'center')
    cy.get('[data-testid = "nav-button-grid"]')
      .should('have.css', 'display', 'grid')
      .and('have.css', 'justify-items', 'center')
      .and('have.css', 'column-gap', '12px')
      .and('have.css', 'row-gap', '16px')
    cy.get('[data-testid = "sign-out-button"]')
      .should('have.css', 'display', 'flex')
      .and('have.css', 'justify-content', 'flex-end')
      .and('have.css', 'align-items', 'flex-end')
      .and('have.css', 'margin', '12px')
      .and('have.css', 'gap', '12px')
      .and('have.css', 'font-weight', '500')
      .and('have.css', 'cursor', 'pointer')
  })

  it('Deve conter o componente Sidebar com children', () => {
    const list = Array(10).fill('dados')
    mount(
      <ThemeDSProvider>
        <GlobalStyles />
        <Sidebar navButtonList={navButtonList}>
          <div data-testid='children' style={{ height: 320 }}>
            {list.map((item: string) => (
              <div>item</div>
            ))}
          </div>
        </Sidebar>
      </ThemeDSProvider>
    )
    cy.get('[data-testid = "sidebar-container"]').should('have.css', 'background-color', 'rgb(249, 249, 249)')
    cy.get('[data-testid="children"]').should('exist')
  })

  it('Deve conter o componente Sidebar como fechado', () => {
    cy.get('[data-testid = "close-button-container"]').click()
    cy.get('[data-testid = "sidebar-container"]').should('have.css', 'width', '60px')
    cy.get('[data-testid = "logo-container"]').should('have.css', 'width', '56px').and('have.css', 'margin', '0px 4px')
    cy.get('[data-testid = "close-button-container"]').should('have.css', 'justify-content', 'center')
    cy.get('[data-testid = "nav-button-grid"]')
      .should('have.css', 'flex-direction', 'column')
      .and('have.css', 'justify-content', 'center')
      .and('have.css', 'align-items', 'center')
  })

  it('Deve conter o componente Sidebar aberto depois de ter sido fechado', () => {
    cy.get('[data-testid = "close-button-container"]').click()
    cy.get('[data-testid = "close-button-container"]').wait(700).click()
  })

  it('Deve chamar a função onSignOut', () => {
    mount(
      <ThemeDSProvider>
        <GlobalStyles />
        <Sidebar navButtonList={navButtonList} onSignOut={cy.stub().as('onSignOut')} />
      </ThemeDSProvider>
    )
    cy.get('[data-testid = "sign-out-button"]').click()
    cy.get('@onSignOut').should('have.been.called')
  })
})
