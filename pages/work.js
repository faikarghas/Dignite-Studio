import Slider from "react-slick"
import { Container,Row,Col } from 'react-bootstrap'
import GAwrapper from '../lib/GAWarp'

import TextHeader from '../components/presentational/textHead'
import Layout from '../components/layouts'

import data from '../lib/copywriting/data.js'

var settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true
};
const work = props => {
    return (
        <GAwrapper>
        <Layout>
            <TextHeader text={data.work.title} />
            <section className="section_second-work">
                <Container>
                    <Slider {...settings}>
                        <Row style={{display:'flex !important'}}>
                            <Col className="box" xs={4} md={4} lg={4}>
                                <img src="../static/image/Image2.png" alt="project-img"/>
                                <div className="box-name">
                                    <h2>Project Name</h2>
                                    <h2>Web Development</h2>
                                </div>
                            </Col>
                            <Col className="box" xs={4} md={4} lg={4}>
                                <img src="../static/image/Image2.png" alt="project-img"/>
                            </Col>
                            <Col className="box" xs={4} md={4} lg={4}>
                                <img src="../static/image/Image2.png" alt="project-img"/>
                            </Col>
                            <Col className="box" xs={4} md={4} lg={4}>
                                <img src="../static/image/Image2.png" alt="project-img"/>
                            </Col>
                            <Col className="box" xs={4} md={4} lg={4}>
                                <img src="../static/image/Image2.png" alt="project-img"/>
                            </Col>
                            <Col className="box" xs={4} md={4} lg={4}>
                                <img src="../static/image/Image2.png" alt="project-img"/>
                            </Col>
                        </Row>
                        <Row style={{display:'flex !important'}}>
                            <Col className="box" xs={4} md={4} lg={4}>
                                <img src="../static/image/Image2.png" alt="project-img"/>
                                <div className="box-name">
                                    <h5>PROJECT NAME</h5>
                                </div>
                            </Col>
                            <Col className="box" xs={4} md={4} lg={4}>
                                <img src="../static/image/Image2.png" alt="project-img"/>
                            </Col>
                            <Col className="box" xs={4} md={4} lg={4}>
                                <img src="../static/image/Image2.png" alt="project-img"/>
                            </Col>
                            <Col className="box" xs={4} md={4} lg={4}>
                                <img src="../static/image/Image2.png" alt="project-img"/>
                            </Col>
                            <Col className="box" xs={4} md={4} lg={4}>
                                <img src="../static/image/Image2.png" alt="project-img"/>
                            </Col>
                            <Col className="box" xs={4} md={4} lg={4}>
                                <img src="../static/image/Image2.png" alt="project-img"/>
                            </Col>
                        </Row>
                    </Slider>
                </Container>
            </section>
        </Layout>
        </GAwrapper>
    )
}

export default work
