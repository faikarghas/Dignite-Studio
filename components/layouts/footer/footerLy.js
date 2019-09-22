import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import Link from 'next/link'

const footer = props => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col xs={7}>
                        <Row>
                            <Col xs={12} md={6}>
                                <ul className="mb-5">
                                    <li><Link href="/about"><a>About</a></Link></li>
                                    <li><Link href="/work"><a>Work</a></Link></li>
                                    <li><Link href="/blog"><a>Blog</a></Link></li>
                                    <li> <a href="https://store.dignitestudio.com/" target="_blank" rel="noopener">Store</a></li>
                                </ul>
                                <h2 className="mb-5 get">Get in touch</h2>
                                <p>hello@dignitestudio.com</p>
                                <a href="tel:+6281387831421">(+62) 813 1610 0044</a>
                                <ul className="mt-5 contact">
                                    <li><a href="https://www.instagram.com/dignitestudio/?hl=en" target="_blank"><img src='https://api.dignitestudio.com/images/image/SocialIcon/Instagram.png' alt="icon-ig"/></a></li>
                                    <li><a href="https://api.whatsapp.com/send?phone=6281316100044&text=Halo Dignite, saya ingin bertanya mengenai pembuatan website/desain/digital marketing." target="_blank"><img src='https://api.dignitestudio.com/images/image/SocialIcon/Whatsapp.png' alt="icon-wa"/></a></li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={5}>
                        <button className="button_hire" onClick={ () => props.showModal('button','click','hire','modal-hire')}><h2>HIRE US</h2></button>
                    </Col>
                </Row>
            </Container>
          </footer>
    )
}

export default footer
