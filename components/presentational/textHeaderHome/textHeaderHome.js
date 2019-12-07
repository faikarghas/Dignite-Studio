import React from 'react'
import { Container } from 'react-bootstrap';
import {motion, useViewportScroll, useTransform} from 'framer-motion'

const variants = {
    initial:{scale:0.95,opacity:1},
    enter: { scale: 1, y: 0, opacity: 1 },
    exit: {
      scale: 0.9,
      opacity: 0,
    }
};



const textHeaderHome = ({text}) => {
    const { scrollYProgress } = useViewportScroll()
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.2]);
    return (
        <motion.section
            key="text"
            initial="initial"
            exit="exit"
            animate="enter"
            variants={variants}
            className="textHeaderHome width100">
            <Container>
                <motion.h1 style={{ scale }} className="text-center">
                    {text}
                </motion.h1>
            </Container>
        </motion.section>
    )
}

export default textHeaderHome
