import React from 'react'
import Link from 'next/link'
import { Container,Row,Col } from 'react-bootstrap';

const menuLy = props => {
    return (
        <React.Fragment>
            <Container className="header_menu">
                <ul style={{textAlign:'right',paddingTop:0}}>
                    <li onClick={props.closeMenu} className="closemenu p-0" style={{cursor:'pointer'}}><img src='https://api.dignitestudio.com/images/image/Icons/Close-Menu.png' width="50px" height="50px" alt="icon-close"/></li>
                </ul>
            </Container>
            <ul>
                <li><Link href="/about">ABOUT DIGNITE STUDIO</Link></li>
                <li><Link href="/work">OUR WORKS</Link></li>
                <li><a onClick={props.showModal}>HIRE US</a></li>
                <li><Link href="/blog">BLOG</Link></li>
                <li><a href="https://dignitestore.herokuapp.com/" target="_blank" rel="noopener">STORE</a></li>
            </ul>
        </React.Fragment>
    )
}

export default menuLy
