import React from 'react'

import { faker } from '@faker-js/faker'
import 'cypress-real-events/support'

import { GlobalStyles, Theme, ThemeDSProvider } from '../../theme'
import { Modal } from '.'

const title = faker.lorem.words()
const list = Array(4).fill(faker.lorem.words(1))
const children = () => {
  return (
    <div style={{ width: '100%' }}>
      <h4>{faker.lorem.words()}</h4>
      <fieldset>
        <legend>{faker.lorem.words()}</legend>
        {list.map((item: string) => (
          <div>
            <input type='radio' />
            <label>{item}</label>
          </div>
        ))}
      </fieldset>
    </div>
  )
}

describe('Modal', () => {
  beforeEach(() => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Modal title={title} buttonTitle={'Continuar'} isEnabled={true} onClick={cy.stub().as('onClick')}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
            {children()}
          </div>
        </Modal>
      </ThemeDSProvider>
    )
    cy.wait(500)
  })

  afterEach(() => cy.wait(500))

  it('Deve ser o componente Modal Default', () => {
    cy.viewport(1280, 768)
    cy.get('[data-testid="box-container"]').should('have.css', 'opacity', '1')
    cy.get('[data-testid="backdrop-modal"]')
      .should('have.css', 'position', 'absolute')
      .and('have.css', 'background-color', 'rgb(21, 21, 21)')
      .and('have.css', 'opacity', '0.2')
      .and('have.css', 'z-index', '400')
    cy.get('[data-testid="container-modal"]')
      .should('have.css', 'opacity', '1')
      .and('have.css', 'display', 'flex')
      .and('have.css', 'position', 'fixed')
      .and('have.css', 'justify-content', 'space-between')
      .and('have.css', 'background-color', 'rgb(255, 255, 255)')
      .and('have.css', 'border-radius', '16px')
      .and('have.css', 'width', '656px')
      .and('have.css', 'z-index', '500')
    cy.get('[data-testid="body-modal"]').and('have.css', 'opacity', '1')
  })

  it('Deve ser o componente Modal contendo um children', () => {
    cy.viewport(1280, 768)
    cy.get('[data-testid="body-modal"]').should('exist')
  })

  it('Deve mudar a opacidade ao clicar no botão em cancelar', () => {
    cy.viewport(1280, 768)
    cy.get('[data-testid="modal-header"] > .sc-cyZbSi').click()
    cy.get('[data-testid="box-container"]').should('have.css', 'opacity', '0')
  })

  it('Deve chamar a função onClick', () => {
    cy.viewport(1280, 768)
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Modal title={title} buttonTitle={'Continuar'} isEnabled={true} onClick={cy.stub().as('onClick')}>
          <p>{faker.lorem.sentences()}</p>
        </Modal>
      </ThemeDSProvider>
    )
    cy.get('[data-testid="footer-modal"] > .sc-cyZbSi').click()
    cy.get('@onClick').should('have.been.called')
  })

  it('Deve chamar a função onClose', () => {
    cy.viewport(1280, 768)
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Modal
          title={title}
          buttonTitle={'Continuar'}
          isEnabled={true}
          onClick={cy.stub().as('onClick')}
          onClose={cy.stub().as('onClose')}
        >
          <p>{faker.lorem.sentences()}</p>
        </Modal>
      </ThemeDSProvider>
    )
    cy.get('[data-testid="modal-header"] > .sc-cyZbSi').click()
    cy.get('@onClose').should('have.been.called')
  })

  it('Deve ser o componente Modal Default com width e height setados pelas props', () => {
    cy.viewport(1280, 768)
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Modal
          title={title}
          width={1000}
          height={500}
          buttonTitle={'Continuar'}
          isEnabled={true}
          onClick={cy.stub().as('onClick')}
        >
          <p>{faker.lorem.sentences()}</p>
        </Modal>
      </ThemeDSProvider>
    )
    cy.get('[data-testid="container-modal"]').should('have.css', 'width', '1000px').and('have.css', 'height', '500px')
  })

  it('Deve ser o componente Modal Secundário, sem o Header nem o Footer', () => {
    cy.viewport(1280, 768)
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Modal type='secondary' isEnabled={true} onClick={cy.stub().as('onClick')}>
          <p>{faker.lorem.sentences(5)}</p>
        </Modal>
      </ThemeDSProvider>
    )
    cy.get('[data-testid="container-modal"]').should('exist')
  })

  it('Deve ser o componente Modal Secundário com width e height setados pelas props', () => {
    cy.viewport(1280, 768)
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Modal type='secondary' width={656} height={308} isEnabled={true} onClick={cy.stub().as('onClick')}>
          <p>{faker.lorem.sentences()}</p>
        </Modal>
      </ThemeDSProvider>
    )
    cy.get('[data-testid="container-modal"]').should('have.css', 'width', '656px').and('have.css', 'height', '308px')
  })
})