import { Container,Row,Col } from 'react-bootstrap'
import Link from 'next/link'
import ReactDOM from "react-dom";
import commentBox from 'commentbox.io';

import Layout from '../components/layouts'

class BlogDetail extends React.Component {

    static async getInitialProps (ctx){
        return {}
    }

    componentDidMount() {
        this.removeCommentBox = commentBox('5644854293954560-proj',{});
    }

    componentWillUnmount() {
        this.removeCommentBox();
    }

    render(){
        return (
            <Layout>
                <section className="section_first-blogDetail">
                    <Container>
                        <Row>
                            <Col xs={12} md={3} className="info">
                                <h4 className="mb-4">MARKETING</h4>
                                <p>July 31, 2019</p>
                            </Col>
                            <Col xs={12} md={9} className="content">
                                <h1>How to Gain Organic Followers on Instagram in 2019</h1>
                                <p>Even still, there's a high learning curve before you can build a proper application. That's because you need to learn about client-side routing, page layout, and so on. If you'd like to perform server-side rendering for faster page loads, things can become even more difficult.</p>
                                <p>Think about how webapps are created with PHP. You create some files, write PHP code, then simply deploy it. We don't have to worry about routing much, and the app is rendered on the server by default.Think about how webapps are created with PHP. You create some files, write PHP code, then simply deploy it. We don't have to worry about routing much, and the app is rendered on the server by default.</p>
                                <p>Think about how webapps are created with PHP. You create some files, write PHP code, then simply deploy it. We don't have to worry about routing much, and the app is rendered on the server by default.</p>
                                <div className="ads">
                                    <h2>Boosting Your Sales Like Never Before</h2>
                                    <p>Turn your followers into potential customers by creating growth and building online <br/> community.</p>
                                    <br/>
                                    <Link href="/about"><a>Let's go <img src="../../static/image/right-arrow.svg" width="20px" alt="icon next" /></a></Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="section_second-comment">
                    <Container>
                        <Row>
                            <Col>
                                <div className="commentbox" id="contoh2"/>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Layout>
        )
    }

}

export default BlogDetail
