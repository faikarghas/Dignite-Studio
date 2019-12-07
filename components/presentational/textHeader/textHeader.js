import React from 'react'
import { Container } from 'react-bootstrap';
import {motion} from 'framer-motion'


const textHeader = props => {
    return (
        <section  className="textHeader width100">
            <Container>
                {/* <Fade bottom> */}
                    <h1 className="text-center">
                        {props.text}asd
                    </h1>
                {/* </Fade> */}
            </Container>
        </section>
    )
}

export default textHeader
