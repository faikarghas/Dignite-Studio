import React,{useState} from 'react'
import Link from 'next/link'
import { Container,Row,Col } from 'react-bootstrap';
import {motion} from 'framer-motion'

import ThemeButton from '../../presentational/themeButton'

const variants = {
    enter: {
      transition: { staggerChildren: 0.07, delayChildren: .5, staggerDirection: -1 }
    },
    exit: {
      transition: { staggerChildren: 0.05 }
    },
};

const variants2 = {
    initial:{
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      }
    },
    enter: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
        delay: .5,
        duration:.5
      }
    },
    exit: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    },

};

const index = () => {
    return (
        <Container className="container nav_wrapper">
          <Row className="mb-5">
            <Col md={5}>
              <motion.ul className="nav_ul" variants={variants} key="nav">
                  <motion.li variants={variants2} key="nav-list1"><Link href={`/about`}><a>About<span>.</span></a></Link><div className="linecross"></div></motion.li>
                  <motion.li variants={variants2} key="nav-list2"><Link href={`/work`}><a>Projects<span>.</span></a></Link></motion.li>
              </motion.ul>
            </Col>
            <Col md={7}>
              <motion.ul className="nav_ul" variants={variants} key="nav">
                  <motion.li variants={variants2} key="nav-list3"><Link href={`/blog`}><a>Blog<span>.</span></a></Link></motion.li>
                  <motion.li variants={variants2} key="nav-list4"><a href="https://store.dignitestudio.com/" target="_blank" rel="noopener">Store<span>.</span></a></motion.li>
              </motion.ul>
            </Col>
            <Col md={5} className="mt-5rem d-flex justify-conter-end">
              <motion.div variants={variants2} initial={"initial"} exit="exit" key="address" className="address_menu">
                <p>Web & App Development</p>
                <p>UX Design</p>
                <p>Web Design</p>
                {/* <p>Yearbook</p> */}
                <p>Graphic Design</p>
              </motion.div>
            </Col>
            <Col md={12} lg={3} className="mt-5rem d-flex justify-conter-end">
              <motion.div variants={variants} key="phone" className="contact_menu">
                <motion.a variants={variants2} href="https://api.whatsapp.com/send?phone=6281316100044&text=Halo Dignite, saya ingin bertanya mengenai pembuatan website/desain/digital marketing."><p>(+62) 813 1610 0044</p></motion.a>
              </motion.div>
            </Col>
            <Col md={12} lg={4} className=" d-flex justify-conter-end">
              <motion.div variants={variants} key="email" className="contact_menu">
                <motion.a variants={variants2} href="mailto:hello@dignitestudio.com"><p>hello@dignitestudio.com</p></motion.a>
              </motion.div>
            </Col>
          </Row>
        </Container>
    )
}

export default index



