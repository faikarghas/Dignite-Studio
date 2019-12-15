import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import Link from 'next/link'
import LocaleSwitcher from '../../../components/presentational/localSwitcher'
import useTranslation from '../../../hooks/useTranslation'

const footer = props => {
    const {locale,t} = useTranslation()
    return (
        <footer>
            <Container>
                <Row>
                    <Col xs={7}>
                        <Row>
                            <Col xs={12} md={6}>
                                <ul className="mb-5 for-lg-sc">
                                    <li><Link href="/about" ><a>About</a></Link></li>
                                    <li><Link href="/projects" ><a>Projects</a></Link></li>
                                    <li><Link href="/blog" ><a>Blog</a></Link></li>
                                    <li> <a href="http://store.dignite.studio.com/" target="_blank" rel="noopener">Store</a></li>
                                </ul>
                                <p>Jl. Raya Rawabuntu</p>
                                <p>Ruko Golden Vienna</p>
                                <p>Blok BB No. 11 Lt. 2</p>
                                <p>Serpong, Tangerang Selatan</p>
                                <br/>
                                <a href="mailto:hello@dignite.studio">hello@dignite.studio</a><br/>
                                <a href="https://api.whatsapp.com/send?phone=6281316100044&text=Halo Dignite, saya ingin bertanya mengenai pembuatan website/desain/digital marketing.">(+62) 813 1610 0044</a>
                                <ul className="mt-5 contact">
                                    <li><a href="https://www.instagram.com/dignitestudio/?hl=en" target="_blank"><img src='../../../static/image/SocialIcon/Instagram.png' alt="icon-ig"/></a></li>
                                    <li><a href="https://api.whatsapp.com/send?phone=6281316100044&text=Halo Dignite, saya ingin bertanya mengenai pembuatan website/desain/digital marketing." target="_blank"><img src='../../../static/image/SocialIcon/Whatsapp.png' alt="icon-wa"/></a></li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={5}>
                        <button className="button_hire" onClick={ () => props.showModal('button','click','hire','modal-hire')}><h2>Hire Us</h2></button>
                    </Col>
                </Row>
            </Container>
          </footer>
    )
}

export default footer
