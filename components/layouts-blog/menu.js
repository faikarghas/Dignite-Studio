import React, { Component } from 'react'
import { Container,Row,Col,InputGroup,FormControl } from 'react-bootstrap'
import Link from 'next/link'
import Router from 'next/router'


class Menu extends Component {

    state={
        search:''
    }

    handleChangeSearch = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    search=(e)=>{
        if(e.key === 'Enter'){
            Router.push('/search/[slug]',`/search/${this.state.search}`)
            console.log(e.key,this.state.search);
        }
    }

    render() {
        let active,activeA,activeB,activeD,activeT = ''

        if(this.props.activeCategory === 'business'){
            activeB = 'active'
        } else if (this.props.activeCategory === 'design'){
            activeD = 'active'
        } else if (this.props.activeCategory === 'tech'){
            activeT = 'active'
        } else if (this.props.activeCategory === 'announcement') {
            activeA = 'active'
        } else {
            active = 'active'
        }
        return (
            <React.Fragment>
                <section className="menu_blog">
                    <Container>
                        <Row style={{borderBottom:' 1px solid #ECEEF1'}}>
                            <Col xs={12} md={9}>
                                <ul className="menu_blog-1">
                                    <Link href="/blog"><a className={active}>ALL TOPICS</a></Link>
                                    <Link href={`/blogCategory?category=business`} as={`/blog/business`}><a className={activeB}>BUSINESS</a></Link>
                                    <Link href={`/blogCategory?category=design`} as={`/blog/design`}><a className={activeD}>DESIGN</a></Link>
                                    <Link href={`/blogCategory?category=tech`} as={`/blog/tech`}><a className={activeT}>TECH</a></Link>
                                    <Link href={`/blogCategory?category=announcement`} as={`/blog/announcement`}><a className={activeA}>ANNOUNCEMENT</a></Link>
                                </ul>
                            </Col>
                            <Col xs={12} md={3}>
                                <ul>
                                    <li>
                                        <InputGroup>
                                            <FormControl
                                            placeholder="Search"
                                            aria-label="Search"
                                            aria-describedby="basic-addon2"
                                            onKeyPress={this.search}
                                            value={this.state.search}
                                            name="search"
                                            onChange={this.handleChangeSearch}
                                            />
                                            <InputGroup.Append>
                                                <InputGroup.Text id="basic-addon2"><img src={process.env.API_HOST_IMG + "/Icons/search_white.svg"}  alt="icon search" width="20px"/></InputGroup.Text>
                                            </InputGroup.Append>
                                        </InputGroup>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="blog_contents">
                    <Container>
                        {this.props.children}
                    </Container>
                </section>
            </React.Fragment>
        )
    }
}

export default Menu
