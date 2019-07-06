import React from 'react'
import Link from 'next/link'
import { Container,Row,Col } from 'react-bootstrap';

const headerLy = props => {
    return (
        <Container className="header_menu">
              <ul>
                  <li style={{cursor:'pointer'}}>
                    <Link href="/"><img src="../../static/image/logo.png" width="100px" height="100px" alt="logo-dignite"></img></Link>
                  </li>
                  <li onClick={props.openMenu} style={{cursor:'pointer'}}><img src="../static/image/Icon/MenuToggle.png" width="50px" height="20px" alt="icon-toogle"/></li>
              </ul>
        </Container>
    )
}

export default headerLy
