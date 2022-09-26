import React from 'react'
import { faker } from '@faker-js/faker'
import 'cypress-real-events/support'
import { Button } from '.'
import { Home } from './img-test'
import { GlobalStyles, Theme, ThemeDSProvider } from '../../theme'

describe('Button Default', () => {
  const label = faker.lorem.word()
  const icon = <Home width={32} height={32} />
  beforeEach(() => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Button icon={icon} iconRight={false} onClick={cy.stub().as('onClick')}>
          {label}
        </Button>
      </ThemeDSProvider>
    )
  })

  it('Deve ser o componente Default quando não for informado o type', () => {
    cy.get('[data-testeid="button"]')
      .should('have.css', 'display', 'flex')
      .and('have.css', 'justify-content', 'center')
      .and('have.css', 'align-items', 'center')
      .and('have.text', label)
      .and('have.css', 'cursor', 'pointer')
      .and('have.css', 'font-weight', '500')
      .and('have.css', 'color', 'rgb(255, 255, 255)')
      .and('have.css', 'background-color', 'rgb(50, 55, 81)')
      .and('have.css', 'border', '1px solid rgb(50, 55, 81)')

    cy.get('[data-testeid="button"]').realHover().should('have.css', 'color', 'rgb(252, 214, 105)')

    cy.get('[data-testeid="button"]')
      .realMouseDown()
      .should('have.css', 'color', 'rgb(50, 55, 81)')
      .and('have.css', 'background-color', 'rgb(255, 255, 255)')
      .and('have.css', 'border', '1px solid rgb(252, 214, 105)')
      .and('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.1) 2px 4px 6px 0px')
  })

  it('Deve ser o componente Default quando for informado o type primary', () => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Button icon={icon} iconRight={false} onClick={cy.stub().as('onClick')} type={'primary'}>
          {label}
        </Button>
      </ThemeDSProvider>
    )
    cy.get('[data-testeid="button"]')
      .should('have.css', 'color', 'rgb(255, 255, 255)')
      .and('have.css', 'background-color', 'rgb(50, 55, 81)')
      .and('have.css', 'border', '1px solid rgb(50, 55, 81)')

    cy.get('[data-testeid="button"]').realHover().should('have.css', 'color', 'rgb(252, 214, 105)')

    cy.get('[data-testeid="button"]')
      .realMouseDown()
      .should('have.css', 'color', 'rgb(50, 55, 81)')
      .and('have.css', 'background-color', 'rgb(255, 255, 255)')
      .and('have.css', 'border', '1px solid rgb(252, 214, 105)')
      .and('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.1) 2px 4px 6px 0px')
  })

  it('Deve ser o componente Default desabled', () => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Button icon={icon} onClick={cy.stub().as('onClick')} disabled>
          {label}
        </Button>
      </ThemeDSProvider>
    )
    cy.get('[data-testeid="button"]')
      .should('have.css', 'background-color', 'rgb(255, 255, 255)')
      .and('have.css', 'border', '1px solid rgb(196, 196, 196)')
      .and('have.css', 'color', 'rgb(196, 196, 196)')
      .and('have.css', 'box-shadow', 'none')
  })

  it('Deve ser o componente Secondary quando for informado o type secondary', () => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Button icon={icon} iconRight={false} onClick={cy.stub().as('onClick')} type={'secondary'}>
          {label}
        </Button>
      </ThemeDSProvider>
    )
    cy.get('[data-testeid="button"]')
      .should('have.css', 'color', 'rgb(50, 55, 81)')
      .and('have.css', 'background-color', 'rgb(255, 255, 255)')
      .and('have.css', 'border', '1px solid rgb(50, 55, 81)')
      .and('have.css', 'box-shadow', 'none')

    cy.get('[data-testeid="button"]')
      .realHover()
      .should('have.css', 'border', '1px solid rgba(0, 0, 0, 0)')
      .and('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.1) 2px 4px 6px 0px')

    cy.get('[data-testeid="button"]')
      .realMouseDown()
      .should('have.css', 'border', '1px solid rgb(252, 214, 105)')
      .and('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.1) 2px 4px 6px 0px')
  })

  it('Deve ser o componente Secondary desabled', () => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Button icon={icon} onClick={cy.stub().as('onClick')} disabled type={'secondary'}>
          {label}
        </Button>
      </ThemeDSProvider>
    )
    cy.get('[data-testeid="button"]')
      .should('have.css', 'background-color', 'rgb(255, 255, 255)')
      .and('have.css', 'border', '1px solid rgb(196, 196, 196)')
      .and('have.css', 'color', 'rgb(196, 196, 196)')
      .and('have.css', 'box-shadow', 'none')
  })

  it('Deve ser o componente Tertiary quando for informado o type tertiary', () => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Button icon={icon} iconRight={false} onClick={cy.stub().as('onClick')} type={'tertiary'}>
          {label}
        </Button>
      </ThemeDSProvider>
    )
    cy.get('[data-testeid="button"]')
      .should('have.css', 'color', 'rgb(50, 55, 81)')
      .and('have.css', 'background-color', 'rgba(0, 0, 0, 0)')

    cy.get('[data-testeid="button"]')
      .realHover()
      .should('have.css', 'color', 'rgb(95, 130, 166)')
      .and('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
  })

  it('Deve ser o componente Secondary desabled', () => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Button icon={icon} onClick={cy.stub().as('onClick')} disabled type={'tertiary'}>
          {label}
        </Button>
      </ThemeDSProvider>
    )
    cy.get('[data-testeid="button"]')
      .should('have.css', 'color', 'rgb(196, 196, 196)')
      .and('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
  })

  it('Deve ser o componente button com tamanho default', () => {
    cy.get('[data-testeid="button"]')
      .should('have.css', 'width', '210px')
      .and('have.css', 'height', '48px')
      .and('have.css', 'font-size', '16px')
      .and('have.css', 'line-height', '19px')
      .and('have.css', 'border-radius', '10px')
      .and('have.css', 'padding', '8px 24px')
      .and('have.css', 'gap', '7px')
  })

  it('Deve ser o componente button com tamanho large', () => {
    const size = 'large'
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Button icon={<Home width={20} height={20} />} iconRight={false} size={size} onClick={cy.stub().as('onClick')}>
          {label}
        </Button>
      </ThemeDSProvider>
    )
    cy.get('[data-testeid="button"]')
      .should('have.css', 'width', '210px')
      .and('have.css', 'height', '48px')
      .and('have.css', 'font-size', '16px')
      .and('have.css', 'line-height', '19px')
      .and('have.css', 'border-radius', '10px')
      .and('have.css', 'padding', '8px 24px')
      .and('have.css', 'gap', '7px')
  })

  it('Deve ser o componente Default com tamanho small', () => {
    const size = 'small'
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Button icon={<Home width={20} height={20} />} iconRight={false} size={size} onClick={cy.stub().as('onClick')}>
          {label}
        </Button>
      </ThemeDSProvider>
    )
    cy.get('[data-testeid="button"]')
      .should('have.css', 'width', '142px')
      .and('have.css', 'height', '32px')
      .and('have.css', 'font-size', '12px')
      .and('have.css', 'line-height', '14px')
      .and('have.css', 'border-radius', '8px')
      .and('have.css', 'padding', '4px 12px')
  })

  it('Deve ter espaço padrão para o label', () => {
    cy.get('[data-testeid="boxLabel"]')
      .should('have.css', 'width', '82px')
      .and('have.css', 'height', '19px')
      .and('have.css', 'overflow', 'hidden')
      .and('not.be.empty')
  })

  it('Deve ter um ícone', () => {
    cy.get('[data-testeid="iconSuffix"]')
      .should('have.css', 'width', '32px')
      .and('have.css', 'height', '32px')
      .and('have.css', 'color', 'rgb(255, 255, 255)')
  })

  it('Deve ter um ícone à esquerda do label', () => {
    cy.get('[data-testeid="iconPrefix"]').should('not.be.empty')
    cy.get('[data-testeid="iconSuffix"]').should('be.empty')
  })

  it('Deve ter um ícone à direita do label', () => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Button icon={icon} iconRight={true} onClick={cy.stub().as('onClick')}>
          {label}
        </Button>
      </ThemeDSProvider>
    )
    cy.get('[data-testeid="iconPrefix"]').should('be.empty')
    cy.get('[data-testeid="iconSuffix"]').should('not.be.empty')
  })

  it('Deve chamar uma função ao clicar', () => {
    cy.get('[data-testeid="button"]').click()
    cy.get('@onClick').should('have.been.calledOnce')
  })
})
