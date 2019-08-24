import Slider from "react-slick"
import { Container,Row,Col } from 'react-bootstrap'
import Link from 'next/link'
import { LazyLoadImage } from 'react-lazy-load-image-component';

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
                                                <LazyLoadImage
                                                    alt={'project-img'}
                                                    src={item.imgUrl}
                                                    effect="blur"
                                                />
                                                <div className="box-hover">
                                                    <h2>{item.title}</h2>
                                                    <h2>{item.Category}</h2>
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
    )
}

export default work
