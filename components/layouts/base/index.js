import Head from 'next/head'
import Link from 'next/link'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import * as action from '../../../redux/actionIndex'

import ModalHire from '../../presentational/modalHire'
import Header from '../../presentational/header'
import Footer from '../../presentational/footer'
import ThemeButton from '../../presentational/themeButton'
import useTranslation from '../../../hooks/useTranslation'

import { initGA, logPageView, modalView, logEvent } from '../../../lib/analytics'

// Style
import '../../../sass/main.scss'

function withMyHook(Component) {
  return function WrappedComponent(props) {
    const { locale, t } = useTranslation()

    return <Component {...props} locale={locale} />;
  }
}

class Layout extends React.Component{
  constructor(props) {
    super(props);
    this.users = [];

    this.state={
      modal:'',
      listMenu : [
        {id:1,nama:'ABOUT',link:'about'},
        {id:2,nama:'WORK',link:'work'},
        {id:3,nama:'HIRE US',link:'',klik:true},
        {id:4,nama:'BLOG',link:'blog'},
        {id:5,nama:'STORE',link:'',linkweb:true},
        {id:6,nama:'BUTTON',link:'',button:true},
      ],
      menu: false,
    }

  }

  componentDidMount(){
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
    this.props.initilizeThemeHandler()
  }


  openMenu = () => {
    this.setState({ menu: true })

    let refData = {
      svg1: this.svgElement1,
      svg2: this.svgElement2,
      svg3: this.svgElement3,
      navbar: this.navbar,
      hEl: this.headerElement,
      usersRef: this.users,
      color: this.props.colour
    }
    this.props.openMenuHandler(refData)
  }

  closeMenu = () => {
    this.setState({ menu: false })

    let refData = {
      svg1: this.svgElement1,
      svg2: this.svgElement2,
      svg3: this.svgElement3,
      navbar: this.navbar,
      hEl: this.headerElement,
      usersRef: this.users,
      color: this.props.colour

    }
    this.props.closeMenuHandler(refData)
  }

  showModal = (category,action,label,modalName) => {
    modalView(modalName)
    logEvent(category,action,label)
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
    const {modal,menu} = this.state
    const {canonical,title,locale,metaDesc} = this.props

    let canUrl = `https://www.dignitestudio.com/${canonical}`

    if (canonical === 'home') {
        canUrl = `https://www.dignitestudio.com/${locale}`
    } else {
        canUrl = `https://www.dignitestudio.com/${locale}/${canonical}`
    }

    return(
      <React.Fragment>
        <Head>
          <title>{`${title}`}</title>
          <meta name="description" content={`${metaDesc}`}/>
          <meta name="og:description" content={`${metaDesc}`}/>
          <link rel="canonical" href={`${canUrl}`} />
        </Head>

        <div>
          <Header openMenu={this.openMenu} closeMenu={this.closeMenu} menu={menu}
            headerRef={el => this.headerElement = el}
            svgRef1={el => this.svgElement1 = el}
            svgRef2={el => this.svgElement2 = el}
            svgRef3={el => this.svgElement3 = el}
            menuButtonColour={this.state.menuButtonColour}
          />
            {this.props.children}
          <Footer showModal={this.showModal} />
        </div>

        <div className="menu" ref={nav => this.navbar = nav} >
          <ul className="list-item">
            {this.state.listMenu.map((item,i)=>{
              if(item.klik){
                return(
                  <li key={item.id} ref={div => this.users[i] = div}><a onClick={this.showModal}>HIRE US</a></li>
                )
              } else if (item.linkweb){
                return (
                  <li key={item.id} ref={div => this.users[i] = div}><a href="https://store.dignitestudio.com/" target="_blank" rel="noopener">STORE</a></li>
                )
              } else if(item.button){
                return (
                  <li key={item.id} style={{opacity:1}} ref={div => this.users[i] = div} className="mt-5">
                    <ThemeButton
                      svgRef1={el => this.svgElement1 = el}
                      svgRef2={el => this.svgElement2 = el}
                      svgRef3={el => this.svgElement3 = el}
                    />
                  </li>
                )
              } else {
                return(
                  <li key={item.id} ref={div => this.users[i] = div}>
                    <Link href={`/${item.link}`} as={`/${item.link}`}>
                      <a>{item.nama}</a>
                    </Link>
                  </li>
                )
              }
            })}

          </ul>
        </div>

        <ModalHire modal={modal} closeModal={this.closeModal} showModal2={this.props.showModal2} closeModal2={this.props.closeModal2}/>

      </React.Fragment>
    )
  }
}

Layout.propTypes = {
  title : PropTypes.string,
  canonical : PropTypes.string
}

const mapStateToProps = (state) => {
  return {
    colour: state.theme.theme_colour,
    theme: state.theme.theme,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    initilizeThemeHandler : (bs,theme,colour) => dispatch(action.initilizeThemeHandler(bs,theme,colour)),
    openMenuHandler: (data) => dispatch(action.openMenuHandler(data)),
    closeMenuHandler: (data) => dispatch(action.closeMenuHandler(data))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(withMyHook(Layout))
