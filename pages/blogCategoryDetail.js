import { Container,Row,Col } from 'react-bootstrap'
import Link from 'next/link'
import parse from 'html-react-parser'
import fetch from 'isomorphic-unfetch'
import commentBox from 'commentbox.io';
import {convertMonth} from '../lib/date'

import Layout from '../components/layouts'

class BlogCategoryDetail extends React.Component {
    static async getInitialProps (ctx){
        const {slug,category} = ctx.query
        const res = await fetch(`https://api.dignitestudio.com/api/blogCategoryDetail/${category}/${slug}`)
        const dataBlog = await res.json()
        return {dataBlog}
    }

    componentDidMount() {
        this.removeCommentBox = commentBox('5644854293954560-proj',{});
    }

    componentWillUnmount() {
        this.removeCommentBox();
    }
    render(){
        let data = this.props.dataBlog[0]
        let month = new Date(data.created_at).getMonth() + 1
        let date = new Date(data.created_at).getDate() 
        let year = new Date(data.created_at).getFullYear() 

        let tMonth = convertMonth(month)
        return (
            <Layout>
                <section className="section_first-blogDetail">
                    <Container>
                        <Row>
                            <Col xs={12} md={3} className="info">
                                <h4 className="mb-4">{data.category}</h4>
                                <p>{tMonth} {date}, {year}</p>
                            </Col>
                            <Col xs={12} md={9} className="content">
                                <h1>{data.title}</h1>
                                {parse(data.content)}
                                <div className="ads">
                                    <h2>Boosting Your Sales Like Never Before</h2>
                                    <p>Turn your followers into potential customers by creating growth and building online <br/> community.</p>
                                    <br/>
                                    <Link href="/about"><a>Let's go <img src="https://api.dignitestudio.com/images/image/right-arrow.svg" width="20px" alt="icon next" /></a></Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="section_second-comment">
                    <Container>
                        <Row>
                            <Col>
                                <div className="commentbox" id="contoh"/>
                            </Col>
                        </Row>
                    </Container>
                </section>

            </Layout>
        )
    }

}

export default BlogCategoryDetail
