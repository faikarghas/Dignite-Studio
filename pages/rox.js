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
const rox = props =>  {
    const {locale,t} = useTranslation()
    React.useEffect(() => {
    //   window.location.replace(`/${getInitialLocale()}/work`)
    })

    return (
        <div className="main_wrapper">
            <section className="section_rox">
                <Container>
                    <Row>
                        <Col className="box1 p-0 placeholder" md={12}>
                            <img src="/image/pp.png"/>
                        </Col>
                        <Col className="box1 p-0 placeholder" md={12}>
                        <a href="" className="link dc">
                            DISCORD
                        </a>
                        <a href="https://chat.whatsapp.com/KKNHA4b8qb43d75k0yKY1W" className="link wa">
                            WHATSAPP
                        </a>
                      </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )

}

export default rox
