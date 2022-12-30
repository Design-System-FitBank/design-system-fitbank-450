import { Faker } from "@faker-js/faker";
import { Tab, TabProps } from "components/Tab";
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
  it("Deve ser o componente Default", () => {
    cy.get('[data-testid="tabs-container]"')
    .should("contain.html",Tab)
  })
})