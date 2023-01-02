import { Faker } from "@faker-js/faker";
import { Tab, TabProps } from "../Tab";
import "cypress-real-events/support";
import React from "react";
import { ThemeProvider } from "styled-components";
import { Tabs } from ".";
import { GlobalStyles, Theme, ThemeDSProvider } from "../../theme";

describe("Tabs Default",() => {
  const tabInfo: TabProps[] = [
    {
      title: "Transferencia PIX", 
      description: "Realiza tranferência via PIX",
      icon: 'keys',
      onClick: () => {}
    },
    {
      title: "Transferencia TED", 
      description: "Realiza utilizando dados bancários",
      icon: 'ticketPayment',
      onClick: () => {}
    }
  ]

  beforeEach(() => {
    cy.wait(100)
    cy.mount(
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <Tabs tabsInfo={tabInfo} />
      </ThemeProvider>
    )
  })
  afterEach(() => {
    cy.wait(100)
  })
  it("Deve haver conteúdo no container", () => {
    cy.get('[data-testid=container]')
    .should("not.be.empty")
  })
  
  it("Dever haver um elemento para cada TabPros",() => {
    cy.get("[data-testid=tab")
    .should("have.length", tabInfo.length)
  })

  it("Devem estar corretos os valores de cada elemento", () => {
    cy.get("[data-testid=data-container]")
      .each((item, index) => {
        expect(Cypress.$(item).text() == (`${tabInfo[index].title}${tabInfo[index].description}`))

    })
  })
})