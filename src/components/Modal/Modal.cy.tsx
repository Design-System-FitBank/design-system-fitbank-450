import React from 'react'

import { faker } from '@faker-js/faker'
import 'cypress-real-events/support'

import { GlobalStyles, Theme, ThemeDSProvider } from '../../theme'
import { Modal } from '.'

describe('Modal', () => {
  beforeEach(() => cy.wait(1000))
  afterEach(() => cy.wait(1000))

  const title = faker.lorem.words()

  it('Deve ser o componente Modal Default', () => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Modal title={title} buttonTitle={'Continuar'} isDisable={false} onClick={() => null}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, odio quisquam deleniti facere maiores
            nobis quia distinctio rem? Eaque aliquid quos nisi itaque aut iure atque nobis dicta quidem aspernatur.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, odio quisquam deleniti facere maiores
            nobis quia distinctio rem? Eaque aliquid quos nisi itaque aut iure atque nobis dicta quidem aspernatur.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, odio quisquam deleniti facere maiores
          </p>
        </Modal>
      </ThemeDSProvider>
    )
  })

  it('Deve ser o componente Modal Default com um tamanho setado', () => {
    cy.viewport(1280, 768)
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Modal title={title} width={500} buttonTitle={'Continuar'} isDisable={false} onClick={() => null}>
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
  })

  it('Deve ser o componente Modal Default com um body muito grande', () => {
    cy.viewport(700, 700)
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Modal title={title} buttonTitle={'Continuar'} isDisable={false} onClick={() => null}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, odio quisquam deleniti facere maiores
            nobis quia distinctio rem? Eaque aliquid quos nisi itaque aut iure atque nobis dicta quidem aspernatur.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, odio quisquam deleniti facere maiores
            nobis quia distinctio rem? Eaque aliquid quos nisi itaque aut iure atque nobis dicta quidem aspernatur.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, odio quisquam deleniti facere maiores
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, odio quisquam deleniti facere maiores
            nobis quia distinctio rem? Eaque aliquid quos nisi itaque aut iure atque nobis dicta quidem aspernatur.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, odio quisquam deleniti facere maiores
            nobis quia distinctio rem? Eaque aliquid quos nisi itaque aut iure atque nobis dicta quidem aspernatur.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, odio quisquam deleniti facere maiores
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, odio quisquam deleniti facere maiores
            nobis quia distinctio rem? Eaque aliquid quos nisi itaque aut iure atque nobis dicta quidem aspernatur.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, odio quisquam deleniti facere maiores
            nobis quia distinctio rem? Eaque aliquid quos nisi itaque aut iure atque nobis dicta quidem aspernatur.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, odio quisquam deleniti facere maiores
          </p>
        </Modal>
      </ThemeDSProvider>
    )
  })
})
