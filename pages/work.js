import Slider from "react-slick"
import { Container,Row,Col } from 'react-bootstrap'
import GAwrapper from '../lib/GAWarp'
import Link from 'next/link'

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
                            {data.home.Project.map(item=>{
                                return (
                                    <Link href="/project/[slug]" as={`/project/${item.slug}`}>
                                        <Col className="box" xs={4} md={4} lg={4}  key={item.id}>
                                                <img src={item.imgUrl} alt="project-img"/>
                                                <div className="box-name">
                                                    {/* <h2>{item.title}</h2> */}
                                                    {/* <h2>{item.Category}</h2> */}
                                                </div>
                                        </Col>
                                    </Link>
                                )
                            })}
                        </Row>
                    </Slider>
                </Container>
            </section>
        </Layout>
        </GAwrapper>
    )
}

export default work
