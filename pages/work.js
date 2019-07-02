import React from 'react'
import Slider from "react-slick";

import Layout from '../components/layout'

var settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true
};
const work = () => {
    return (
        <GAwrapper>
        <Layout>
            <section className="section_first-work">
                <h1 className="text-center">We design and build high-end digital products for all kind of <br/> clients and audiences.</h1>
            </section>
            <section className="section_second-work">
                <div className="container">
                    <Slider {...settings}>
                        <div className="row" style={{display:'flex !important'}}>
                            <div className="box col-4">
                                <img src="../static/image/Image2.png" />
                                <div className="box-name">
                                    <h5>PROJECT NAME</h5>
                                </div>
                            </div>
                            <div className="box col-4">
                                <img src="../static/image/Image2.png" />
                            </div>
                            <div className="box col-4">
                                <img src="../static/image/Image2.png" />
                            </div>
                            <div className="box col-4">
                                <img src="../static/image/Image2.png" />
                            </div>
                            <div className="box col-4">
                                <img src="../static/image/Image2.png" />
                            </div>
                            <div className="box col-4">
                                <img src="../static/image/Image2.png" />
                            </div>
                            <div className="box col-4">
                                <img src="../static/image/Image2.png" />
                            </div>
                            <div className="box col-4">
                                <img src="../static/image/Image2.png" />
                            </div>
                            <div className="box col-4">
                                <img src="../static/image/Image2.png" />
                            </div>
                        </div>
                        <div className="row" style={{display:'flex !important'}}>
                            <div className="box col-4">
                                <img src="../static/image/Image2.png" />
                                <div className="box-name">
                                    <h5>PROJECT NAME</h5>
                                </div>
                            </div>
                            <div className="box col-4">
                                <img src="../static/image/Image2.png" />
                            </div>
                            <div className="box col-4">
                                <img src="../static/image/Image2.png" />
                            </div>
                            <div className="box col-4">
                                <img src="../static/image/Image2.png" />
                            </div>
                            <div className="box col-4">
                                <img src="../static/image/Image2.png" />
                            </div>
                            <div className="box col-4">
                                <img src="../static/image/Image2.png" />
                            </div>
                            <div className="box col-4">
                                <img src="../static/image/Image2.png" />
                            </div>
                            <div className="box col-4">
                                <img src="../static/image/Image2.png" />
                            </div>
                            <div className="box col-4">
                                <img src="../static/image/Image2.png" />
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
        </Layout>
        </GAwrapper>
    )
}

export default work
