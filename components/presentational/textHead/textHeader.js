import React from 'react'
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

const textHeader = props => {
    return (
        <section className="textHeader width100">
            <Container>
                <Fade bottom>
                    <h1 className="text-center">{props.text}</h1>
                </Fade>
            </Container>
        </section>
    )
}

export default textHeader
