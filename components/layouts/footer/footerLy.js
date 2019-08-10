import React from 'react'
import { Container,Row,Col } from 'react-bootstrap';

const footer = props => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col xs={6}>
                        <h2 className="mb-5">Get in touch</h2>
                        <p>hello@dignitestudio.com</p>
                        <a href="">(+62) 813 1610 0044</a>
                        <ul className="mt-5">
                            <li><img src='https://api.dignitestudio.com/images/image/SocialIcon/Facebook.png' alt="icon-fb"/></li>
                            <li><img src='https://api.dignitestudio.com/images/image/SocialIcon/Instagram.png' alt="icon-ig"/></li>
                            <li><img src='https://api.dignitestudio.com/images/image/SocialIcon/LinkedIn.png' alt="icon-lk"/></li>
                            <li><img src='https://api.dignitestudio.com/images/image/SocialIcon/Whatsapp.png' alt="icon-wa"/></li>
                        </ul>
                    </Col>
                    <Col xs={6}>
                        <button className="button_hire" onClick={ () => props.showModal('button','click','hire','modal-hire')}><h2>HIRE US</h2></button>
                    </Col>
                </Row>
            </Container>
          </footer>
    )
}

export default footer
