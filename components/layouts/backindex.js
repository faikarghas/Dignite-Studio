import Head from 'next/head'

import ModalHire from '../modalHire'
import Header from '../layouts/header'
import Menu from '../layouts/menu'
import Footer from '../layouts/footer'

import { initGA, logPageView, modalView, logEvent } from '../../lib/analytics'

// Style
import '../../sass/main.scss'

class BLayout extends React.Component{
  state={
    activeMenu : '',
    closeContents: '',
    activeoverlay:'',
    overlaymenu:'',
    modal:'',
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
          <Footer showModal={this.showModal} />
        </div>

        <ModalHire modal={modal} closeModal={this.closeModal} showModal2={this.props.showModal2} closeModal2={this.props.closeModal2}/>

      </React.Fragment>
    )
  }
}

export default BLayout