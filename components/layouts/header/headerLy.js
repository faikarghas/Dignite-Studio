import React from 'react'
import Link from 'next/link'
import { Container,Row,Col } from 'react-bootstrap';

const headerLy = props => {
    return (
        <header>
            <Container className="header_menu">
                <ul>
                    <li style={{cursor:'pointer'}}>
                        <Link href="/"><img src='https://api.dignitestudio.com/images/image/logo.png' width="60px" height="60px" alt="logo-dignite"></img></Link>
                    </li>
                    <li onClick={props.openMenu} style={{cursor:'pointer'}}><img src='https://api.dignitestudio.com/images/image/Icons/MenuToggle.png' width="50px" height="20px" alt="icon-toogle"/></li>
                </ul>
            </Container>
        </header>
    )
}

export default headerLy
