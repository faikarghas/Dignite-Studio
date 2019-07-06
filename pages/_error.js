import React from 'react'
import Layout from '../components/layouts'
import { Container,Row,Col } from 'react-bootstrap';

function _error() {
    return (
        <Layout>
            <div style={{backgroundColor:'#222222'}}>
            <Container className="pt-5 pb-5">
                <Row style={{justifyContent:'center'}}>
                    <Col>
                        <h1 style={{fontSize:'6rem',color:'white'}}>Oops! Page Not Found</h1>
                        <br/>
                        <h2 style={{fontSize:'12rem',color:'white'}}>404</h2>
                        <br/>
                        <h2 style={{fontSize:'3.5rem',color:'white'}}>we are sorry, but the page you requested was not found</h2>
                    </Col>
                </Row>
            </Container>
            </div>
        </Layout>
    )
}

export default _error
