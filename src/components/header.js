import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap"

import "../styles/index.scss"

const Header = props => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    
      <Navbar fixed="top" expand="sm" light>
        <div className="container">
        <NavbarBrand href="/">{props.siteTitle}</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link className="nav-link" to="/team">Team</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/tags">Tags</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/about">About</Link>
            </NavItem>
          </Nav>
        </Collapse>
        </div>
        
      </Navbar>
    
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
