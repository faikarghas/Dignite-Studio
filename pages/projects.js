import React from 'react'
import { getInitialLocale } from '../translations/getInitialLocale'
import Slider from "react-slick"
import { Container,Row,Col } from 'react-bootstrap'
import Link from 'next/link'

import TextHeader from '../components/presentational/textHeader'
import Layout from '../components/layouts/base'
import data from '../lib/copywriting/data.js'
import useTranslation from '../hooks/useTranslation'

var settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true
};
const work = props =>  {
    const {locale,t} = useTranslation()
    React.useEffect(() => {
    //   window.location.replace(`/${getInitialLocale()}/work`)
    })

    return (
        <div className="main_wrapper">
        <Layout title={'Website, App, Graphic Design & Branding Portfolio | Dignite Studio'} canonical="work" metaDesc="Digital products for all kind of clients and audiences">
            <TextHeader text={data.work.title} />
            <section className="section_second-work">
                <Container>
                    <Slider {...settings}>
                        <Row style={{display:'flex !important'}}>
                            {data.home.ProjectAll.map(item=>{
                                return (
                                    <Link href="/project/[project]" as={`/project/${item.slug}`} key={item.id}>
                                        <Col className="box" xs={4} md={4} lg={4}  >
                                            <img src={item.imgUrl} alt={'project-img'}/>
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
        </div>
    )

}

export default work
