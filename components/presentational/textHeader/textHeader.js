import React from 'react'
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import SplitText from 'react-pose-text';

const charPoses = {
    exit: { opacity: 0 },
    enter: {
      opacity: 1,
      delay: ({ charIndex }) => charIndex * 30
    }
};

const textHeader = props => {
    return (
        <section className="textHeader width100">
            <Container>
                {/* <Fade bottom> */}
                    <h1 className="text-center">
                    {/* <SplitText initialPose="exit" pose="enter" charPoses={charPoses}> */}
                        {props.text}
                    {/* </SplitText> */}
                    </h1>
                {/* </Fade> */}
            </Container>
        </section>
    )
}

export default textHeader
