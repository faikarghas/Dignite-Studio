import React, {useState} from 'react'
import { Container,Row,Col,InputGroup,FormControl,Button } from 'react-bootstrap'
import Link from 'next/link'
import Router from 'next/router'
import fetch from 'isomorphic-unfetch'

import SearchResult from '../../components/presentational/searchResult'
import Layout from '../../components/layouts'


const Blog = props => {
    const [modal, setModal] = useState("")
    const [inputValue, setInputValue] = useState(props.slug);

    const onChangeHandler = event => {
      setInputValue(event.target.value);
    };

    function search(e) {
        if(e.key === 'Enter'){
            Router.push('/search/[slug]',`/search/${inputValue}`)
        }
    }

    function searchButton() {
        Router.push('/search/[slug]',`/search/${inputValue}`)
    }

    function showModal() {
        setModal('modal-show')
    }

    function closeModal() {
        setModal('')
    }

    return(
        <Layout showModal2={modal} closeModal2={closeModal} title={'Search'}>
            <section className="section_first-search">
                <Container>
                    <Row>
                        <Col>
                            <InputGroup className="mb-3">
                                <FormControl
                                    type="text"
                                    value={inputValue}
                                    onKeyPress={search}
                                    name="search"
                                    onChange={onChangeHandler}
                                />
                                <InputGroup.Append>
                                    <Button variant="outline-secondary" onClick={searchButton}>
                                        <img src="https://api.dignitestudio.com/images/image/Icons/search_black.svg" alt="icon-search"/>
                                    </Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Container>
                <SearchResult dataSearch={props.dataSearch} showModal={showModal}/>
            </Container>
        </Layout>
    )
}

Blog.getInitialProps = async (ctx) => {
        const {slug} = ctx.query
        const res = await fetch(`https://api.dignitestudio.com/api/search/${slug}`)
        const dataSearch = await res.json()
        return {dataSearch,slug}
}


export default Blog
