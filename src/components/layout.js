import React from "react"
import Nav from "./nav"
import Content from "./content"

export default function Layout({ children }) {
  return (
    <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
      <Nav />
      <Content />

      {children}
    </div>
  )
}
