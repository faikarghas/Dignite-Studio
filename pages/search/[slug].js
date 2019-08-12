import { Container,Row,Col,InputGroup,FormControl,Button } from 'react-bootstrap'
import Link from 'next/link'
import Router from 'next/router'
import Pagination from "react-js-pagination";
import fetch from 'isomorphic-unfetch'
import parse from 'html-react-parser'
import {convertMonth} from '../../lib/date'
import { modalView, logEvent } from '../../lib/analytics'

import Layout from '../../components/layouts'


class Blog extends React.Component {

    static async getInitialProps(ctx){
        const {slug} = ctx.query
        const res = await fetch(`https://api.dignitestudio.com/api/search/${slug}`)
        const dataSearch = await res.json()
        return {dataSearch,slug}
    }

    state={
        search: this.props.slug,
        modal:''
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

    searchButton=()=>{
        Router.push('/search/[slug]',`/search/${this.state.search}`)
    }

    showModal = (category,action,label,modalName) => {
        this.setState({
          modal:'modal-show'
        })
    }

    closeModal = () => {
        this.setState({
          modal:''
        })
    }


    render(){
        return (
            <Layout showModal2={this.state.modal} closeModal2={this.closeModal}>
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
                                        <Button variant="outline-secondary" onClick={this.searchButton}>
                                            <img src="https://api.dignitestudio.com/images/image/Icons/search_black.svg" alt="icon-search"/>
                                        </Button>
                                    </InputGroup.Append>
                                </InputGroup>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <Container>
                    {this.props.dataSearch.length >= 1 ? this.props.dataSearch.map(item => {
                        let month = new Date(item.created_at).getMonth() + 1
                        let date = new Date(item.created_at).getDate()
                        let year = new Date(item.created_at).getFullYear()
                        let tMonth = convertMonth(month)
                        return (
                            <Link href={`/blogDetail?slug=${item.slug}`} as={`/blog/${item.slug}`}>
                                <section className="blog_contents__box">
                                    <Row>
                                        <Col xs={{span:12,order:2}} md={{span:9,order:1}} >
                                            <section className="blog_contents__box-p">
                                                <ul className="featured">
                                                    <li>FEATURED :</li>
                                                    <li style={{color:'#FFBA00',fontWeight:700}}>{item.category}</li>
                                                </ul>
                                                <h2>{item.title}</h2>
                                                {parse(item.first_pg)}
                                                <br/>
                                                <p className="m-0 author">By Author - {tMonth} {date}, {year}</p>
                                            </section>
                                        </Col>
                                        <Col xs={{span:12,order:1}} md={{span:3,order:2}} className="img-blog">
                                            <img src={`https://api.dignitestudio.com/images/image/artikel/${item.imgThumbnail}.jpg`} alt="gambar artikel" width="100%" height="100%"/>
                                        </Col>
                                    </Row>
                                </section>
                                </Link>
                        )
                    }) : <h2 className="sorry-search">Sorry, I guess we haven't created anything like that. <span onClick={this.showModal}>Let us know it</span></h2>}
                </Container>
            </Layout>
        )
    }

}

export default Blog
