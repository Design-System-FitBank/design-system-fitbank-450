import React from 'react'

import { faker } from '@faker-js/faker'
import 'cypress-real-events/support'

import { GlobalStyles, Theme, ThemeDSProvider } from '../../theme'
import { Modal } from '.'

const title = faker.lorem.words()

describe('Modal', () => {
  beforeEach(() => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Modal title={title} buttonTitle={'Continuar'} isEnabled={true} onClick={() => {}}>
          <p>{faker.lorem.sentences()}</p>
        </Modal>
      </ThemeDSProvider>
    )
    cy.wait(1000)
  })

  afterEach(() => cy.wait(1000))

  it('Deve ser o componente Modal Default', () => {
    cy.viewport(1280, 768)
    cy.get('[data-testid="box-container"]').and('have.css', 'opacity', '1')
  })

  it('Deve ser o componente Modal com um children', () => {
    cy.viewport(1280, 768)
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Modal title={title} width={500} buttonTitle={'Continuar'} isEnabled={true} onClick={() => null}>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, odio quisquam deleniti facere maiores
            </p>
            <fieldset>
              <legend>Select a maintenance drone:</legend>
              <div>
                <input type='radio' name='drone' value='huey' checked />
                <label>Huey</label>
              </div>
              <div>
                <input type='radio' name='drone' value='dewey' />
                <label>Dewey</label>
              </div>
              <div>
                <input type='radio' name='drone' value='louie' />
                <label>Louie</label>
              </div>
            </fieldset>
          </div>
        </Modal>
      </ThemeDSProvider>
    )
    cy.get('[data-testid="body-modal"]').should('exist')
  })

  it('Deve mudar opacidade ao clicar no botão em cancelar', () => {
    cy.viewport(1280, 768)
    cy.get('[data-testid="modal-header"] > .sc-pyfCe').click().wait(100)
    cy.get('[data-testid="box-container"]').and('have.css', 'opacity', '0')
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
    cy.get('[data-testid="footer-modal"] > .sc-pyfCe').click()
    cy.get('@onClick').should('have.been.called')
  })
})
