import React from 'react'
import { faker } from '@faker-js/faker'
import 'cypress-real-events/support'
import { Button } from './'
import { GlobalStyles, ThemeDSProvider } from '../../theme'

describe('Button Default', () => {
  beforeEach(() => {
    cy.mount(
      <ThemeDSProvider>
        <GlobalStyles />
        <Button onClick={cy.stub().as('onClick')}>{label}</Button>
      </ThemeDSProvider>
    )
    cy.wait(100)
  })
  afterEach(() => cy.wait(100))
  const label = faker.lorem.word()
  const icon = 'home'
  it('Deve ser o componente Default quando não for informado o type', () => {
    cy.get('[data-testeid="button"]')
      .should('have.css', 'display', 'flex')
      .and('have.css', 'justify-content', 'center')
      .and('have.css', 'align-items', 'center')
      .and('have.text', label)
      .and('have.css', 'cursor', 'pointer')
      .and('have.css', 'color', 'rgb(255, 255, 255)')
      .and('have.css', 'background-color', 'rgb(50, 56, 79)')
    // .and('have.css', 'border', '1px solid rgb(50, 56, 79)')

    cy.get('[data-testeid="container"] > :nth-child(1)').should('be.empty')
    cy.get('[data-testeid="container"] > :nth-child(3)').should('be.empty')
  })

  it('Deve ser o componente Default quando for passado icon', () => {
    cy.mount(
      <ThemeDSProvider>
        <GlobalStyles />
        <Button icon={icon} onClick={cy.stub().as('onClick')}>
          {label}
        </Button>
      </ThemeDSProvider>
    )
    cy.get('[data-testeid="container"] > :nth-child(1)').should('not.be.empty')
    cy.get(`[data-testid=${icon}]`).should('exist')
    cy.get('[data-testeid="container"] > :nth-child(3)').should('be.empty')
  })

  it('Deve ser o componente Default quando for passado icon e iconRight true', () => {
    cy.mount(
      <ThemeDSProvider>
        <GlobalStyles />
        <Button icon={icon} iconRight={true} onClick={cy.stub().as('onClick')}>
          {label}
        </Button>
      </ThemeDSProvider>
    )
    cy.get('[data-testeid="container"] > :nth-child(1)').should('be.empty')
    cy.get('[data-testeid="container"] > :nth-child(3)').should('not.be.empty')
  })

  it('Deve ser o componente Default quando o estado for hover', () => {
    cy.mount(
      <ThemeDSProvider>
        <GlobalStyles />
        <Button onClick={cy.stub().as('onClick')}>{label}</Button>
      </ThemeDSProvider>
    )
    cy.get('[data-testeid="button"]')
      .realHover()
      .should('have.css', 'color', 'rgb(252, 214, 105)')
  })

  it('Deve ser o componente Default quando o estado for active', () => {
    cy.mount(
      <ThemeDSProvider>
        <GlobalStyles />
        <Button onClick={cy.stub().as('onClick')}>{label}</Button>
      </ThemeDSProvider>
    )
    cy.get('[data-testeid="button"]')
      .realMouseDown()
      .should('have.css', 'color', 'rgb(50, 56, 79)')
      .and('have.css', 'background-color', 'rgb(255, 255, 255)')
      .and('have.css', 'border', '1px solid rgb(252, 214, 105)')
      .and('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.1) 2px 4px 6px 0px')
  })

  it('Deve ser o componente Default quando o estado for disabled', () => {
    cy.mount(
      <ThemeDSProvider>
        <GlobalStyles />
        <Button onClick={cy.stub().as('onClick')} disabled>
          {label}
        </Button>
      </ThemeDSProvider>
    )
    cy.get('[data-testeid="button"]')
      .should('have.css', 'background-color', 'rgb(255, 255, 255)')
      .and('have.css', 'border', '1px solid rgb(174, 174, 174)')
      .and('have.css', 'color', 'rgb(174, 174, 174)')
      .and('have.css', 'box-shadow', 'none')
  })
})

describe('Button Primary', () => {
  beforeEach(() => {
    cy.mount(
      <ThemeDSProvider>
        <GlobalStyles />
        <Button onClick={cy.stub().as('onClick')} type={'primary'}>
          {label}
        </Button>
      </ThemeDSProvider>
    )
    cy.wait(100)
  })
  afterEach(() => cy.wait(100))
  const label = faker.lorem.word()

  it('Deve ser o componente Default quando for informado o type primary', () => {
    cy.get('[data-testeid="button"]')
      .should('have.css', 'color', 'rgb(252, 214, 105)')
      .and('have.css', 'background-color', 'rgb(50, 56, 79)')
      .and('have.css', 'border', '1px solid rgb(50, 56, 79)')
  })

  it('Deve ser o componente Default quando for informado o type primary e o estado for hover', () => {
    cy.get('[data-testeid="button"]')
      .realHover()
      .should('have.css', 'color', 'rgb(252, 214, 105)')
  })

  it('Deve ser o componente Default quando for informado o type primary e o estado for active', () => {
    cy.get('[data-testeid="button"]').realMouseDown()
      .should('have.css', 'color', 'rgb(50, 56, 79)')
      .and('have.css', 'background-color', 'rgb(255, 255, 255)')
      .and('have.css', 'border', '1px solid rgb(252, 214, 105)')
      .and('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.1) 2px 4px 6px 0px')
  })

  it('Deve ser o componente Default disabled', () => {
    cy.mount(
      <ThemeDSProvider>
        <GlobalStyles />
        <Button onClick={cy.stub().as('onClick')} disabled type={'primary'}>
          {label}
        </Button>
      </ThemeDSProvider>
    )
    cy.get('[data-testeid="button"]')
      .should('have.css', 'background-color', 'rgb(255, 255, 255)')
      .and('have.css', 'border', '1px solid rgb(174, 174, 174)')
      .and('have.css', 'color', 'rgb(174, 174, 174)')
      .and('have.css', 'box-shadow', 'none')
  })
})

describe('Button Secondary', () => {
  const label = faker.lorem.word()

  beforeEach(() => {
    cy.mount(
      <ThemeDSProvider>
        <GlobalStyles />
        <Button onClick={cy.stub().as('onClick')} type={'secondary'}>
          {label}
        </Button>
      </ThemeDSProvider>
    )
    cy.wait(100)
  })
  afterEach(() => cy.wait(100))

  it('Deve ser o componente Secondary quando for informado o type secondary', () => {
    cy.get('[data-testeid="button"]')
      .should('have.css', 'color', 'rgb(50, 56, 79)')
      .and('have.css', 'background-color', 'rgb(255, 255, 255)')
      // .and('have.css', 'border', '1px solid rgb(50, 55, 81)')
      .and('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.1) 2px 4px 6px 0px')
  })

  it('Deve ser o componente Secondary quando o estado for hover', () => {
    cy.get('[data-testeid="button"]')
      .realHover()
      .should('have.css', 'border', '1px solid rgba(0, 0, 0, 0)')
      .and('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.1) 2px 4px 6px 0px')
  })

  it('Deve ser o componente Secondary quando o estado for active', () => {
    cy.get('[data-testeid="button"]').realMouseDown()
      .should('have.css', 'border', '1px solid rgb(252, 214, 105)')
      .and('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.1) 2px 4px 6px 0px')
  })

  it('Deve ser o componente Secondary disabled', () => {
    cy.mount(
      <ThemeDSProvider>
        <GlobalStyles />
        <Button onClick={cy.stub().as('onClick')} disabled type={'secondary'}>
          {label}
        </Button>
      </ThemeDSProvider>
    )
      .get('[data-testeid="button"]')
      .should('have.css', 'background-color', 'rgb(255, 255, 255)')
      .and('have.css', 'border', '1px solid rgb(174, 174, 174)')
      .and('have.css', 'color', 'rgb(174, 174, 174)')
      .and('have.css', 'box-shadow', 'none')
  })
})

describe('Button Tertiary', () => {
  beforeEach(() => {
    cy.mount(
      <ThemeDSProvider>
        <GlobalStyles />
        <Button onClick={cy.stub().as('onClick')} type={'tertiary'}>
          {label}
        </Button>
      </ThemeDSProvider>
    )
    cy.wait(100)
  })
  afterEach(() => cy.wait(100))
  const label = faker.lorem.word()

  it('Deve ser o componente Tertiary quando for informado o type tertiary', () => {
    cy.get('[data-testeid="button"]')
      // .should('have.css', 'color', 'rgb(50, 55, 81)')
      .and('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
  })

  it('Deve ser o componente Tertiary quando o estado for hover', () => {
    cy.get('[data-testeid="button"]')
      .realHover()
      .should('have.css', 'color', 'rgb(94, 128, 164)')
      .and('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
  })

  it('Deve ser o componente Tertiary disabled', () => {
    cy.mount(
      <ThemeDSProvider>
        <GlobalStyles />
        <Button onClick={cy.stub().as('onClick')} disabled type={'tertiary'}>
          {label}
        </Button>
      </ThemeDSProvider>
    )
    cy.get('[data-testeid="button"]')
      .should('have.css', 'color', 'rgb(174, 174, 174)')
      .and('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
  })
})

describe('Button Size', () => {
  const icon = 'home'
  beforeEach(() => {
    cy.wait(100)
  })
  afterEach(() => cy.wait(100))
  const label = faker.lorem.word()

  it('Deve ser o componente button com tamanho large', () => {
    cy.mount(
      <ThemeDSProvider>
        <GlobalStyles />
        <Button icon={icon} size={'large'} onClick={cy.stub().as('onClick')}>
          {label}
        </Button>
      </ThemeDSProvider>
    )
    cy.get('[data-testeid="button"]')
      .should('have.css', 'min-width', '212px')
      .and('have.css', 'height', '48px')
      .and('have.css', 'border-radius', '12px')
      .and('have.css', 'padding', '8px 24px')
    cy.get('[data-testeid="container"]').get('[data-testeid="button"]').should('exist')
  })

  it('Deve ser o componente Default com tamanho small', () => {
    cy.mount(
      <ThemeDSProvider>
        <GlobalStyles />
        <Button icon={icon} size={'small'} onClick={cy.stub().as('onClick')}>
          {label}
        </Button>
      </ThemeDSProvider>
    )
    cy .get('[data-testeid="button"]')
      .should('have.css', 'min-width', '144px')
      .and('have.css', 'height', '32px')
      .and('have.css', 'border-radius', '8px')
      .and('have.css', 'padding', '4px 12px')
    cy.get('[data-testid="buttonSmall"]').should('exist')
  })
})
