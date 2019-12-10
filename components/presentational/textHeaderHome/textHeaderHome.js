import React from 'react'
import { Container } from 'react-bootstrap';
import {motion, useViewportScroll, useTransform} from 'framer-motion'


const textHeaderHome = ({text}) => {
    const { scrollYProgress } = useViewportScroll()
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.2]);
    return (
        <section className="textHeaderHome width100">
            <Container>
                <motion.h1 style={{ scale }} exit={{opacity:1}} className="text-center">
                    {text}
                </motion.h1>
            </Container>
        </section>
    )
}

export default textHeaderHome
