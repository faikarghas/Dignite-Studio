import React, {useState} from 'react'
import { Container,Row,Col,InputGroup,FormControl,Button } from 'react-bootstrap'
import Router from 'next/router'
import fetch from 'isomorphic-unfetch'

import SearchResult from '../../components/presentational/searchResult'
import Layout from '../../components/layouts/base'
import useTranslation from '../../hooks/useTranslation'

const Search = props => {
    const [modal, setModal] = useState("")
    const [inputValue, setInputValue] = useState(props.search);
    const {locale,t} = useTranslation()

    const onChangeHandler = event => {
      setInputValue(event.target.value);
    };

    function searchEnter(e) {
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
        <Layout showModal2={modal} closeModal2={closeModal} title={'Search'} canonical={'search'}>
            <section className="section_first-search">
                <Container>
                    <Row>
                        <Col>
                            <InputGroup className="mb-3">
                                <FormControl
                                    type="text"
                                    value={inputValue}
                                    onKeyPress={searchEnter}
                                    name="search"
                                    onChange={onChangeHandler}
                                />
                                <InputGroup.Append>
                                    <Button variant="outline-secondary" onClick={searchButton}>
                                        <img src={`${process.env.API_HOST_IMG}/Icons/search_black.svg`} alt="icon-search"/>
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

Search.getInitialProps = async (ctx) => {
        const {search} = ctx.query
        const res = await fetch(`https://api.dignite.studio/api/search/${search}`)
        const dataSearch = await res.json()
        return {dataSearch,search}
}


export default Search
