import React from "react"
import Nav from "./nav"
import Content from "./content"
import Header from "./header"
import { ThemeProvider } from "@material-ui/core/styles"
import theme from "../material-ui-top-layout/theme"

export default function Layout ( { children } ) {

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Nav />
      <Content />
      {children}
    </ThemeProvider>
  )
}
