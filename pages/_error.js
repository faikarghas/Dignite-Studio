import React from 'react'
import Layout from '../components/layouts'
import { Container,Row } from 'react-bootstrap';

function _error() {
    return (
        <Layout>
            <Container>
                <Row style={{justifyContent:'center'}}>
                    <h1 style={{fontSize:'13.5rem'}}>ERROR 404</h1>
                </Row>
            </Container>
        </Layout>
    )
}

export default _error
