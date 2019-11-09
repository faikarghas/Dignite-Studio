import React from 'react'
import { Container } from 'react-bootstrap';
import SplitText from 'react-pose-text';

const charPoses = {
    exit: { opacity: 0 },
    enter: {
      opacity: 1,
      delay: ({ charIndex }) => charIndex * 30
    }
};

const textHeaderHome = ({text}) => {
    return (
        <section className="textHeaderHome width100">
            <Container>
                    <h1 className="text-center">
                    {/* <SplitText initialPose="exit" pose="enter" charPoses={charPoses}> */}
                        {text}
                    {/* </SplitText> */}
                    </h1>
            </Container>
        </section>
    )
}

export default textHeaderHome
