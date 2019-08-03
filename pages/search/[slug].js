import { Container,Row,Col,InputGroup,FormControl,Button } from 'react-bootstrap'
import Link from 'next/link'
import Router from 'next/router'

import Pagination from "react-js-pagination";
import fetch from 'isomorphic-unfetch'

import Layout from '../../components/layouts'


class Blog extends React.Component {

    static async getInitialProps(ctx){
        const {slug} = ctx.query
        return {slug}
    }

    state={
        search: this.props.slug
    }

    handleChangeSearch = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    search=(e)=>{
        if(e.key === 'Enter'){
            Router.push('/search/[slug]',`/search/${this.state.search}`)
        }
    }


    render(){
        let slug = 'inijudul'

        return (
            <Layout>
                <section className="section_first-search">
                    <Container>
                        <Row>
                            <Col>
                                <InputGroup className="mb-3">
                                    <FormControl
                                        type="text" 
                                        value={this.state.search}
                                        onKeyPress={this.search}
                                        name="search" 
                                        onChange={this.handleChangeSearch}
                                    />
                                    <InputGroup.Append>
                                        <Button variant="outline-secondary">
                                            <img src={process.env.API_HOST_IMG + "/Icons/search_black.svg"} alt="icon-search"/>
                                        </Button>
                                    </InputGroup.Append>
                                </InputGroup>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <Container>
                    <Link href={`/blogDetail?slug=${slug}`} as={`/blog/${slug}`}>
                        <section className="blog_contents__box">
                            <Row>
                                <Col xs={{span:12,order:2}} md={{span:9,order:1}} >
                                    <section className="blog_contents__box-p">
                                        <ul className="featured">
                                            <li>FEATURED :</li>
                                            <li style={{color:'#FFBA00',fontWeight:700}}>MARKETING </li>
                                        </ul>
                                        <h2>How to Gain Organic Followers on Instagram in 2019</h2>
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using…</p>
                                        <br/>
                                        <p className="m-0">By AuthorName - July 31, 2019 </p>
                                    </section>
                                </Col>
                                <Col xs={{span:12,order:1}} md={{span:3,order:2}} className="img-blog">
                                    <img src={process.env.API_HOST_IMG + "/postmarketing.png"} alt="gambar artikel" width="100%" height="100%"/>
                                </Col>
                            </Row>
                        </section>
                    </Link>
                </Container>
            </Layout>
        )
    }

}

export default Blog
