import { Container,Row,Col } from 'react-bootstrap';
import {motion} from 'framer-motion';
import Link from 'next/link';

import { getInitialLocale } from '../translations/getInitialLocale'
import data from '../lib/copywriting/data.js'
import TextHeader from '../components/presentational/textHeaderHome'
import Layout from '../components/layouts/base'
import { useState } from 'react';


const Process = () => (
    <section className="section_second-about width100">
        <Container>
            <Row>
                {data.about.process.map((data,i)=>(
                    <Col className="box" xs={12} md={3} key={i}>
                        <h2 className="mb-5">{data.title}</h2>
                        <p>{data.description}</p>
                    </Col>
                ))}
            </Row>
        </Container>
    </section>
)

const variants = {
    initial:{opacity:0,y:70},
    enter: { opacity:1,y:0, transition: {duration: .5,type: "spring", stiffness: 100 }},
    exit: {
      scale: 5,
      opacity: 1,
      transition:{ type: "spring", stiffness: 100 }
    },
};


const WhatWeDo = () => {
    const [showImg1, setShowImage1] = useState(false)
    const [showImg2, setShowImage2] = useState(false)
    const [showImg3, setShowImage3] = useState(false)
    const [showImg4, setShowImage4] = useState(false)

    return (
        <section className="section_third-about">
            <Container>
                <Row>
                    <Col className="box" xs={12} lg={8}>
                        <ul className="text-left">
                            <li><motion.a onHoverStart={() => setShowImage1(true)} onHoverEnd={() => setShowImage1(false)} exit="exit" whileHover={{ scale: 1.2 }} className="half_color"><span>Web & App Development</span>Web & App Development</motion.a></li>
                            <li><motion.a onHoverStart={() => setShowImage2(true)} onHoverEnd={() => setShowImage2(false)} exit="exit" whileHover={{ scale: 1.2 }} className="half_color"><span>UX Design</span>UX Design</motion.a></li>
                            <li><motion.a onHoverStart={() => setShowImage3(true)} onHoverEnd={() => setShowImage3(false)} exit="exit" whileHover={{ scale: 1.2 }} className="half_color"><span>Web Design</span>Web Design</motion.a></li>
                            <li><motion.a onHoverStart={() => setShowImage4(true)} onHoverEnd={() => setShowImage4(false)} exit="exit" whileHover={{ scale: 1.2 }} className="half_color"><span>Graphic Design</span>Graphic Design</motion.a></li>
                        </ul>
                    </Col>
                    <Col className="box image-desktop" xs={12} lg={4}>
                        <motion.div variants={variants} initial="initialImg" animate={showImg1?'enter':'initial'} exit="exit" className="box-image">
                            <img src="https://image-dignite.s3-ap-southeast-1.amazonaws.com/About/services/web-app-dev.png"/>
                        </motion.div>
                        <motion.div variants={variants} initial="initialImg" animate={showImg2?'enter':'initial'} exit="exit" className="box-image">
                            <img src="https://image-dignite.s3-ap-southeast-1.amazonaws.com/About/services/uiux.png"/>
                        </motion.div>
                        <motion.div variants={variants} initial="initialImg" animate={showImg3?'enter':'initial'} exit="exit" className="box-image">
                            <img src="https://image-dignite.s3-ap-southeast-1.amazonaws.com/About/services/web-design.png"/>
                        </motion.div>
                        <motion.div variants={variants} initial="initialImg" animate={showImg4?'enter':'initial'} exit="exit" className="box-image">
                            <img src="https://image-dignite.s3-ap-southeast-1.amazonaws.com/About/services/graphic-design.png"/>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}


const OurTeam = () => (
    <section className="section_fourth-about">
        <Container>
            <Row>
                <Col className="box" xs={12} md={6}>
                    <h2 className="mb-5">Meet<br/>Our Team</h2>
                </Col>
                <Col className="box" xs={12} md={6}>
                    <Row>
                        {data.about.team.map((item,i)=>(
                            <Col className="box-photo p-0" xs={5}>
                                <img src={item.LinkPhoto} width="100%" alt={item.alt}/>
                                <div className="overlay-yellow">
                                    <p>{item.name}</p>
                                    <p style={{fontSize:'1.5rem'}}>{item.job}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </Container>
    </section>
)

const about = () =>  {
    return(
      <div className="main_wrapper">
      <Layout title={'Solution for Your Creative Digital Needs | Dignite Studio'} canonical="about" metaDesc="Supported by different backgrounds of the founders, Dignite Studio specializes in crafting digital experiences for brands that are ready to make an impact.">
          <TextHeader text={data.about.title} />
          <Process/>
          <WhatWeDo/>
      </Layout>
      </div>
    )
}

export default about



