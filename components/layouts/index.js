import Head from 'next/head'

import ModalHire from '../modalHire'
import Header from '../layouts/header'
import Menu from '../layouts/menu'
import Footer from '../layouts/footer'

import { initGA, logPageView } from '../../lib/analytics'

import '../../sass/main.scss'
import '../../node_modules/video-react/styles/scss/video-react.scss'

class Layout extends React.Component{
  state={
    activeMenu : '',
    closeContents: '',
    activeoverlay:'',
    overlaymenu:'',
    modal:'modal-hide',
  }
  componentDidMount(){
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }
  openMenu = () => {
    this.setState({
      activeMenu:'active',
      closeContents:'closeContent',
      activeoverlay:'activeoverlay',
      overlaymenu:''
    })
  }
  closeMenu = () => {
    this.setState({
      activeMenu:'deactive',
      closeContents:'',
      activeoverlay:'',
      overlaymenu:'overlaymenu'
    })
  }
  showModal = () => {
    this.setState({
      modal:'modal-show'
    })
  }
  closeModal = () => {
    this.setState({
      modal:'modal-hide'
    })
  }
  render(){
    const {activeMenu,closeContents,activeoverlay,overlaymenu,modal} = this.state
    return(
      <React.Fragment>
        <Head>
          <title>Dignite | Studio</title>
        </Head>
        <div className={`overlay ${activeoverlay}` }></div>

        <div className={`menu ${activeMenu} ${overlaymenu}`}>
            <Menu closeMenu={this.closeMenu} showModal={this.showModal}/>
        </div>
        <div className={`contents ${closeContents}`}>
          <Header openMenu={this.openMenu}/>
            {this.props.children}
          <Footer showModal={this.showModal}/>
        </div>

        <ModalHire modal={modal} closeModal={this.closeModal}/>

      </React.Fragment>
    )
  }
}

export default Layout
