import React from 'react'
import Link from 'next/link'
import { Container,Row,Col } from 'react-bootstrap';

const menuLy = props => {
    return (
        <React.Fragment>
            <Container className="header_menu">
                <ul style={{textAlign:'right',paddingTop:0}}>
                    <li onClick={props.closeMenu} className="closemenu p-0" style={{cursor:'pointer'}}>
                        <img src='https://api.dignitestudio.com/images/image/Icons/Close-Menu.png' width="50px" height="50px" alt="icon-close"/>
                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            width="612px" height="612px" viewBox="0 0 612 612" style="enable-background:new 0 0 612 612;" xmlSpace="preserve">
                        <g>
                            <g id="Rectangle_1_copy_2">
                                <g>
                                    <path d="M0,97.92v24.48h612V97.92H0z M0,318.24h612v-24.48H0V318.24z M0,514.08h612V489.6H0V514.08z"/>
                                </g>
                            </g>
                        </g>
                        </svg>
                    </li>
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
