import Head from 'next/head'
import Link from 'next/link'
import PropTypes from 'prop-types';
import {motion} from 'framer-motion'
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
    document.body.style.overflowY = 'auto'
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
        canUrl = `https://www.dignitestudio.com`
    } else {
        canUrl = `https://www.dignitestudio.com/${canonical}`
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
          <Header openMenu={this.openMenu} closeMenu={this.closeMenu} menu={menu} headerRef={el => this.headerElement = el}/>
            {this.props.children}
          <Footer showModal={this.showModal} />
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
    color: state.theme.theme_colour,
    theme: state.theme.theme,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    initilizeThemeHandler : (bs,theme,colour) => dispatch(action.initilizeThemeHandler(bs,theme,colour)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(withMyHook(Layout))


// Record type: CNAME, Value: DIGNITE.STUDIO.

// Record type: A, Value: 184.168.221.63