import Head from 'next/head'

import ModalHire from '../modalHire'
import Header from '../layouts/header'
import Menu from '../layouts/menu'
import Footer from '../layouts/footer'

import '../../sass/main.scss'

class Layout extends React.Component{
  state={
    activeMenu : '',
    closeContents: '',
    activeoverlay:'',
    overlaymenu:'',
    modal:'modal-hide',
    transMenu:''
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        transMenu:'trans'
      })
    },1000)
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
    const {activeMenu,closeContents,activeoverlay,overlaymenu,modal,transMenu} = this.state
    return(
      <React.Fragment>
        <Head>
          <title>Dignite | Studio</title>
        </Head>
        <div className={`overlay ${activeoverlay}` }></div>

        <div className={`menu ${activeMenu} ${overlaymenu} ${transMenu}`}>
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
