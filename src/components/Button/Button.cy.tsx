import React from 'react'
import { faker } from '@faker-js/faker'
import 'cypress-real-events/support'
import { Button } from '.'
import { Home } from './img-test'
import { GlobalStyles, Theme, ThemeDSProvider } from '../../theme'

describe('Button Default', () => {
  beforeEach(() => cy.wait(100))
  afterEach(() => cy.wait(100))
  const label = faker.lorem.word()
  const icon = <Home width={32} height={32} />

  it('Deve ser o componente Default quando não for informado o type', () => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Button icon={icon} iconRight={false} onClick={cy.stub().as('onClick')}>
          {label}
        </Button>
      </ThemeDSProvider>
    )
      .get('[data-testeid="button"]')
      .should('have.css', 'display', 'flex')
      .and('have.css', 'justify-content', 'center')
      .and('have.css', 'align-items', 'center')
      .and('have.text', label)
      .and('have.css', 'cursor', 'pointer')
      .and('have.css', 'font-weight', '500')
      .and('have.css', 'color', 'rgb(255, 255, 255)')
      .and('have.css', 'background-color', 'rgb(50, 55, 81)')
      .and('have.css', 'border', '1px solid rgb(50, 55, 81)')
  })

  it('Deve ser o componente Default quando o estado for hover', () => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Button icon={icon} iconRight={false} onClick={cy.stub().as('onClick')}>
          {label}
        </Button>
      </ThemeDSProvider>
    )
    cy.get('[data-testeid="button"]').realHover()
    cy.get('[data-testeid="button"]').should('have.css', 'color', 'rgb(252, 214, 105)')
  })

  it('Deve ser o componente Default quando o estado for active', () => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Button icon={icon} iconRight={false} onClick={cy.stub().as('onClick')}>
          {label}
        </Button>
      </ThemeDSProvider>
    )
    cy.get('[data-testeid="button"]').realMouseDown()
    cy.get('[data-testeid="button"]')
      .should('have.css', 'color', 'rgb(50, 55, 81)')
      .and('have.css', 'background-color', 'rgb(255, 255, 255)')
      .and('have.css', 'border', '1px solid rgb(252, 214, 105)')
      .and('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.1) 2px 4px 6px 0px')
  })

  it('Deve ser o componente Default quando o estado for disabled', () => {
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
})

describe('Button Primary', () => {
  beforeEach(() => cy.wait(100))
  afterEach(() => cy.wait(100))
  const label = faker.lorem.word()
  const icon = <Home width={32} height={32} />

  it('Deve ser o componente Default quando for informado o type primary', () => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Button icon={icon} iconRight={false} onClick={cy.stub().as('onClick')} type={'primary'}>
          {label}
        </Button>
      </ThemeDSProvider>
    )
      .get('[data-testeid="button"]')
      .should('have.css', 'color', 'rgb(255, 255, 255)')
      .and('have.css', 'background-color', 'rgb(50, 55, 81)')
      .and('have.css', 'border', '1px solid rgb(50, 55, 81)')
  })

  it('Deve ser o componente Default quando for informado o type primary e o estado for hover', () => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Button icon={icon} iconRight={false} onClick={cy.stub().as('onClick')} type={'primary'}>
          {label}
        </Button>
      </ThemeDSProvider>
    )
    cy.get('[data-testeid="button"]').realHover()
    cy.get('[data-testeid="button"]').should('have.css', 'color', 'rgb(252, 214, 105)')
  })

  it('Deve ser o componente Default quando for informado o type primary e o estado for active', () => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Button icon={icon} iconRight={false} onClick={cy.stub().as('onClick')} type={'primary'}>
          {label}
        </Button>
      </ThemeDSProvider>
    )
    cy.get('[data-testeid="button"]').realMouseDown()
    cy.get('[data-testeid="button"]')
      .should('have.css', 'color', 'rgb(50, 55, 81)')
      .and('have.css', 'background-color', 'rgb(255, 255, 255)')
      .and('have.css', 'border', '1px solid rgb(252, 214, 105)')
      .and('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.1) 2px 4px 6px 0px')
  })

  it('Deve ser o componente Default desabled', () => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Button icon={icon} onClick={cy.stub().as('onClick')} disabled type={'primary'}>
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
})
describe('Button Secondary', () => {
  beforeEach(() => cy.wait(100))
  afterEach(() => cy.wait(100))
  const label = faker.lorem.word()
  const icon = <Home width={32} height={32} />

  it('Deve ser o componente Secondary quando for informado o type secondary', () => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Button icon={icon} iconRight={false} onClick={cy.stub().as('onClick')} type={'secondary'}>
          {label}
        </Button>
      </ThemeDSProvider>
    )
      .get('[data-testeid="button"]')
      .should('have.css', 'color', 'rgb(50, 55, 81)')
      .and('have.css', 'background-color', 'rgb(255, 255, 255)')
      .and('have.css', 'border', '1px solid rgb(50, 55, 81)')
      .and('have.css', 'box-shadow', 'none')
  })

  it('Deve ser o componente Secondary quando o estado for hover', () => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Button icon={icon} iconRight={false} onClick={cy.stub().as('onClick')} type={'secondary'}>
          {label}
        </Button>
      </ThemeDSProvider>
    )
    cy.get('[data-testeid="button"]').realHover()
    cy.get('[data-testeid="button"]')
      .should('have.css', 'border', '1px solid rgba(0, 0, 0, 0)')
      .and('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.1) 2px 4px 6px 0px')
  })

  it('Deve ser o componente Secondary quando o estado for active', () => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Button icon={icon} iconRight={false} onClick={cy.stub().as('onClick')} type={'secondary'}>
          {label}
        </Button>
      </ThemeDSProvider>
    )
    cy.get('[data-testeid="button"]').realMouseDown()
    cy.get('[data-testeid="button"]')
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
      .get('[data-testeid="button"]')
      .should('have.css', 'background-color', 'rgb(255, 255, 255)')
      .and('have.css', 'border', '1px solid rgb(196, 196, 196)')
      .and('have.css', 'color', 'rgb(196, 196, 196)')
      .and('have.css', 'box-shadow', 'none')
  })
})

describe('Button Tertiary', () => {
  beforeEach(() => cy.wait(100))
  afterEach(() => cy.wait(100))
  const label = faker.lorem.word()
  const icon = <Home width={32} height={32} />

  it('Deve ser o componente Tertiary quando for informado o type tertiary', () => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Button icon={icon} onClick={cy.stub().as('onClick')} type={'tertiary'}>
          {label}
        </Button>
      </ThemeDSProvider>
    )
      .get('[data-testeid="button"]')
      .should('have.css', 'color', 'rgb(50, 55, 81)')
      .and('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
  })

  it('Deve ser o componente Tertiary quando o estado for hover', () => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Button icon={icon} onClick={cy.stub().as('onClick')} type={'tertiary'}>
          {label}
        </Button>
      </ThemeDSProvider>
    )
    cy.get('[data-testeid="button"]').realHover()
    cy.get('[data-testeid="button"]')
      .should('have.css', 'color', 'rgb(95, 130, 166)')
      .and('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
  })

  it('Deve ser o componente Tertiary desabled', () => {
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
})

describe('Button Size', () => {
  beforeEach(() => cy.wait(100))
  afterEach(() => cy.wait(100))
  const label = faker.lorem.word()

  it('Deve ser o componente button com tamanho large', () => {
    const size = 'large'
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Button icon={<Home width={20} height={20} />} size={size} onClick={cy.stub().as('onClick')}>
          {label}
        </Button>
      </ThemeDSProvider>
    )
      .get('[data-testeid="button"]')
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
        <Button icon={<Home width={20} height={20} />} size={size} onClick={cy.stub().as('onClick')}>
          {label}
        </Button>
      </ThemeDSProvider>
    )
      .get('[data-testeid="button"]')
      .should('have.css', 'width', '142px')
      .and('have.css', 'height', '32px')
      .and('have.css', 'font-size', '12px')
      .and('have.css', 'line-height', '14px')
      .and('have.css', 'border-radius', '8px')
      .and('have.css', 'padding', '4px 12px')
  })
})

describe('Button Icon Position', () => {
  beforeEach(() => cy.wait(100))
  afterEach(() => cy.wait(100))
  const label = faker.lorem.word()
  const icon = <Home width={32} height={32} />

  it('Deve ter um ícone por padrão a esquerda', () => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Button icon={icon} onClick={cy.stub().as('onClick')}>
          {label}
        </Button>
      </ThemeDSProvider>
    )
      .get('[data-testeid="iconSuffix"]')
      .should('have.css', 'width', '32px')
      .and('have.css', 'height', '32px')
      .and('have.css', 'color', 'rgb(255, 255, 255)')
  })

  it('Deve ter um ícone à esquerda do label', () => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Button icon={icon} iconRight={false} onClick={cy.stub().as('onClick')}>
          {label}
        </Button>
      </ThemeDSProvider>
    )
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
})

describe('Button Function', () => {
  beforeEach(() => cy.wait(100))
  afterEach(() => cy.wait(100))
  const label = faker.lorem.word()
  const icon = <Home width={32} height={32} />
  it('Deve chamar uma função ao clicar', () => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Button icon={icon} iconRight={false} onClick={cy.stub().as('onClick')}>
          {label}
        </Button>
      </ThemeDSProvider>
    )
    cy.get('[data-testeid="button"]').click()
    cy.get('@onClick').should('have.been.calledOnce')
  })
})
