import React from "react"
import PropTypes from "prop-types"
import { createGlobalStyle } from "styled-components"

const Global = createGlobalStyle`
  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #2f0053;
  }
`

const Layout = ({ children }) => (
  <>
    <Global />
    {children}
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
