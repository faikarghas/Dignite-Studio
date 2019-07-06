import Layout from '../components/layouts'
import TextHeader from '../components/presentational/textHead'
import GAwrapper from '../lib/GAWarp';

import data from '../lib/copywriting/data.js'

import { Container,Row,Col } from 'react-bootstrap';

const about = () => {
    return (
        <GAwrapper>
        <Layout>
            <TextHeader text={data.about.title} />
            <section className="section_second-about width100">
                <Container>
                    <Row>
                        <Col className="box" xs={6} md={3}>
                            <h2 className="mb-5">Research</h2>
                            <p>Illum mallem levares, quo optimum atque humanis simum virum, Cn. Tu autem negas fortem esse quem quam posse, qui dolorem m alum putet. Cupiditates non Epicuri divisione finiebat, sed sua satietate.</p>
                        </Col>
                        <Col className="box" xs={6} md={3}>
                            <h2 className="mb-5">Strategy</h2>
                            <p>Illum mallem levares, quo optimum atque humanis simum virum, Cn. Tu autem negas fortem esse quem quam posse, qui dolorem m alum putet. Cupiditates non Epicuri divisione finiebat, sed sua satietate.</p>
                        </Col>
                        <Col className="box" xs={6} md={3}>
                            <h2 className="mb-5">Design</h2>
                            <p>Illum mallem levares, quo optimum atque humanis simum virum, Cn. Tu autem negas fortem esse quem quam posse, qui dolorem m alum putet. Cupiditates non Epicuri divisione finiebat, sed sua satietate.</p>
                        </Col>
                        <Col className="box" xs={6} md={3}>
                            <h2 className="mb-5">Development</h2>
                            <p>Illum mallem levares, quo optimum atque humanis simum virum, Cn. Tu autem negas fortem esse quem quam posse, qui dolorem m alum putet. Cupiditates non Epicuri divisione finiebat, sed sua satietate.</p>
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
                                    <img src="../static/image/Faikar.jpg" alt="photo"/>
                                    <div className="overlay-yellow">
                                        <p>Faikar Ghassan</p>
                                        <p>Web Developer</p>
                                    </div>
                                </Col>
                                <Col className="box-photo p-0" xs={5}>
                                    <img src="../static/image/Tasya.jpg" alt="photo"/>
                                    <div className="overlay-yellow">
                                        <p>Mayesta Arientasya</p>
                                        <p>UI/UX Designer</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Layout>
        </GAwrapper>
    )
}

export default about
