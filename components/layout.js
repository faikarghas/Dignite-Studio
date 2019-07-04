import Head from 'next/head'
import Link from 'next/link'

import Header from './Header'
import Menu from './menu'
import ModalHire from './modalHire'

import '../sass/main.scss'

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
            <ul>
                <li onClick={this.closeMenu} className="closemenu" style={{cursor:'pointer'}}><img src="../static/image/Icon/Close-Menu.png" width="50px" height="50px"/></li>
                <Link href="/"><li>HOME</li></Link>
                <Link href="/about"><li>ABOUT</li></Link>
                <Link href="/work"><li>WORK</li></Link>
                <li onClick={this.showModal}>HIRE US</li>
                <a href="https://dignitestore.herokuapp.com/" target="_blank" rel="noopener"><li>STORE</li></a>
            </ul>

        </div>
        <div className={`contents ${closeContents}`}>
          <div className="container header_menu">
              <ul>
                  <Link href="/">
                    <li style={{cursor:'pointer'}}><img src="../../static/image/logo.png" width="100px" height="100px"></img></li>
                  </Link>
                  <li onClick={this.openMenu} style={{cursor:'pointer'}}><img src="../static/image/Icon/MenuToggle.png" width="50px" height="20px"/></li>
              </ul>
          </div>
            {this.props.children}
          <footer>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <h2 className="mb-5">Get in touch</h2>
                        <p>hello@dignitestudio.com</p>
                        <a href="">(+62) 812 8783 1421</a>
                        <ul className="mt-5">
                            <li><img src="../static/image/SocialIcon/Facebook.png"/></li>
                            <li><img src="../static/image/SocialIcon/Instagram.png"/></li>
                            <li><img src="../static/image/SocialIcon/LinkedIn.png"/></li>
                            <li><img src="../static/image/SocialIcon/Whatsapp.png"/></li>
                        </ul>
                    </div>
                    <div className="col-6">
                        <button className="button_hire" onClick={this.showModal}><h2>HIRE US</h2></button>
                    </div>
                </div>
            </div>
          </footer>
        </div>

        <ModalHire modal={modal} closeModal={this.closeModal}/>

      </React.Fragment>
    )
  }
}

export default Layout
