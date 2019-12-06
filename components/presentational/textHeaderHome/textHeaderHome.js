import React from 'react'
import { Container } from 'react-bootstrap';
import {motion} from 'framer-motion'

const postVariants = {
    enter: { scale: 1, y: 0, opacity: 1, transition: { duration: 0.5 } },
    exit: {
      scale: 0.9,
      opacity: 0,
      transition: { duration: 0.5 }
    }
};

const textHeaderHome = ({text}) => {
    return (
        <motion.section 
            exit={postVariants.exit}
            enter={postVariants.enter}
            className="textHeaderHome width100">
            <Container>
                <h1 className="text-center">
                    {text}
                </h1>
            </Container>
        </motion.section>
    )
}

export default textHeaderHome
