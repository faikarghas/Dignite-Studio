import React from 'react'
import { Container } from 'react-bootstrap';

const textHeaderHome = ({text}) => {
    return (
        <section className="textHeaderHome width100">
            <Container>
                <h1 className="text-center">
                    {text}
                </h1>
            </Container>
        </section>
    )
}

export default textHeaderHome
