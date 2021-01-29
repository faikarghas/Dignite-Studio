import React, { Component } from 'react'
import { Container,Row,Col,InputGroup,FormControl } from 'react-bootstrap'
import Link from 'next/link'
import Router from 'next/router'
import useTranslation from '../../../../hooks/useTranslation'


function withMyHook(Component) {
    return function WrappedComponent(props) {
      const { locale, t } = useTranslation()
      return <Component {...props} locale={locale} />;
    }
}

class Menu extends Component {

    state = {
        search:'',
    }

    handleChangeSearch = (evt) => {
        // const state = this.state
        // state[e.target.name] = e.target.value;
        // this.setState(state);

        // or

        this.setState({[evt.target.name]:evt.target.value})
    }

    search=(e)=>{
        if(e.key === 'Enter'){
            Router.push('/[lang]/search/[search]',`/${this.props.locale}/search/${this.state.search}`)
        }
    }

    searchButton=()=>{
        Router.push('/[lang]/search/[search]',`/${this.props.locale}/search/${this.state.search}`)
    }

    render() {
        let active,activeB,activeD = ''
        const {locale} = this.props
        if(this.props.activeCategory === 'business'){
            activeB = 'active'
        } else if (this.props.activeCategory === 'design'){
            activeD = 'active'
        } else {
            active = 'active'
        }

        return (
            <React.Fragment>
                <section className="menu_blog">
                    <Container>
                        <Row style={{borderBottom:' 1px solid #ECEEF1'}}>
                            <Col xs={12} md={8}>
                                <ul className="menu_blog-1">
                                    <Link href="/[langs]/blog" as={`/${this.props.locale}/blog`}><a className={active}>ALL TOPICS</a></Link>
                                    <Link href={`/[langs]/[blogcat]/[category]`} as={`/${locale}/blog/business`}><a className={activeB}>BUSINESS</a></Link>
                                    <Link href={`/[langs]/[blogcat]/[category]`} as={`/${locale}/blog/design`}><a className={activeD}>DESIGN</a></Link>
                                    {/* <Link href={`/[langs]/[blogcat]/[category]`} as={`/${locale}/blog/announcement`}><a className={activeA}>ANNOUNCEMENT</a></Link> */}
                                </ul>
                            </Col>
                            <Col xs={12} md={4}>
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
                                            <InputGroup.Append onClick={this.searchButton} style={{cursor:'pointer'}}>
                                                <InputGroup.Text id="basic-addon2"><img src='http://api.dignitestudio.com/images/image/Icons/search_white.svg'  alt="icon search" width="20px"/></InputGroup.Text>
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

export default withMyHook(Menu)
