import Link from 'next/link'
import { Col } from 'react-bootstrap';

const box = props => {
    return (
        <Col className="box1 p-0" xs={4}>
            <img src={props.imgUrl} width="100%" height="100%" alt="project-img"></img>
            <Link as={`/project-detail/${props.slug}`} href={`/project?slug=${props.slug}`}>
                <div className="box-hover">
                    <h2>{props.text}</h2>
                    <h2>{props.category}</h2>
                </div>
            </Link>
        </Col>
    )
}

export default box
