import Layout from '../components/layouts'
import TextHeader from '../components/presentational/textHead'

import data from '../lib/copywriting/data.js'

import { Container,Row,Col } from 'react-bootstrap';

const about = () => {
    return (
        <Layout>
            <TextHeader text={data.about.title} />
            <section className="section_second-about width100">
                <Container>
                    <Row>
                        <Col className="box" xs={6} md={3}>
                            <h2 className="mb-5">Ask</h2>
                            <p>We start with a few simple questions. Through thoughtful consideration of your responses, we're able to craft the essential guidelines that will shape your brand's online experience.</p>
                        </Col>
                        <Col className="box" xs={6} md={3}>
                            <h2 className="mb-5">Design</h2>
                            <p>We make data-driven decisions based on your story while innovating every step of the way. From mobile to tablet to full wall projections, our digital creations are designed to make an impact on any medium.</p>
                        </Col>
                        <Col className="box" xs={6} md={3}>
                            <h2 className="mb-5">Develop</h2>
                            <p>Our people are artists - they can breathe life into designs and make digital products move in ways you never thought possible. The products and platforms we develop are modular, so they can easily evolve over time.</p>
                        </Col>
                        <Col className="box" xs={6} md={3}>
                            <h2 className="mb-5">Support</h2>
                            <p>We're here to help you. Reach out to us anytime, for anything you need. Ongoing technical support is part of the deal, so you can focus on growing your business—worry-free.</p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="section_third-about">
                <Container>
                    <Row>
                        <Col className="box" xs={6}>
                            <h2 className="mb-5">What<br/>We Do?</h2>
                        </Col>
                        <Col className="box" xs={6}>
                            <ul className="text-center">
                                <li>UI/UX Design</li>
                                <li>Graphic Design</li>
                                <li>Web Development</li>
                                <li>Digital Marketing</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="section_fourth-about">
                <Container>
                    <Row>
                        <Col className="box" xs={12} md={6}>
                            <h2 className="mb-5">Meet<br/>Our Team</h2>
                        </Col>
                        <Col className="box" xs={12} md={6}>
                            <Row>
                                <Col className="box-photo p-0" xs={5}>
                                    <img src="../static/image/faikar.jpg" width="100%" alt="photo" />
                                    <div className="overlay-yellow">
                                        <p>Faikar Ghassan</p>
                                        <p style={{fontSize:'1.5rem'}}>Full-Stack Developer</p>
                                    </div>
                                </Col>
                                <Col className="box-photo p-0" xs={5}>
                                    <img src="../static/image/tasya.jpg" alt="photo"/>
                                    <div className="overlay-yellow">
                                        <p>Mayesta Arientasya</p>
                                        <p style={{fontSize:'1.5rem'}}>UI/UX Designer & Digital Marketing</p>
                                    </div>
                                </Col>
                                <Col className="box-photo p-0" xs={5}>
                                    <img src="../static/image/egi.jpg" alt="photo"/>
                                    <div className="overlay-yellow">
                                        <p>Egi Muharram</p>
                                        <p style={{fontSize:'1.5rem'}}>Graphic Designer</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Layout>
    )
}

export default about
