import Head from 'next/head'
import {Tween,Timeline} from 'react-gsap'
import Link from 'next/link'
import { Container,Row,Col } from 'react-bootstrap';

import ModalHire from '../modalHire'
import Header from '../layouts/header'
import Menu from '../layouts/menu'
import Footer from '../layouts/footer'

import { initGA, logPageView, modalView, logEvent } from '../../lib/analytics'

// Style
import '../../sass/main.scss'

class Layout extends React.Component{
  constructor(props) {
    super(props);
    this.users = [];
  }

  state={
    activeMenu : '',
    closeContents: '',
    activeoverlay:'',
    overlaymenu:'',
    modal:'',
    listMenu : [
      {id:1,nama:'ABOUT',link:'/about'},
      {id:2,nama:'WORK',link:'/work'},
      {id:3,nama:'HIRE US',link:'',klik:true},
      {id:4,nama:'BLOG',link:'/blog'},
      {id:5,nama:'STORE',link:'',linkweb:true},
    ]
  }

  componentDidMount(){
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
    const GSAP = require('gsap');

    const { TweenMax, TimelineLite, Power4 } = GSAP;


    console.log(
      this.users
    );
  }

  openMenu = () => {
    const GSAP = require('gsap');

    const { TweenMax, TimelineLite, Power4 } = GSAP;

    TweenMax.to(this.navbar, .4, { right: 0 });

    TweenMax.staggerFrom(this.users, .3, { opacity: 0 }, 0.2);
    TweenMax.staggerTo(this.users, .3, { opacity: 1 }, 0.2);

  }

  closeMenu = () => {
    const GSAP = require('gsap');

    const { TweenMax, TimelineLite, Power4 } = GSAP;
    TweenMax.to(this.navbar, 1.5, { right: '-100%' }).delay(.5);

    TweenMax.staggerFrom(this.users, .2, { opacity: 1 }, 0.2);
    TweenMax.staggerTo(this.users, .2, { opacity: 0 }, 0.2);

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
    const {activeoverlay,modal} = this.state

    return(
      <React.Fragment>
        <Head>
          <title>Dignite Studio</title>
        </Head>
        <div className={`overlay ${activeoverlay}` }></div>

            <div className="menu" ref={nav => this.navbar = nav}>
                <div>
                  {/* <Menu closeMenu={this.closeMenu} showModal={this.showModal}/> */}

                  <Container className="header_menu">
                      <ul style={{textAlign:'right',paddingTop:0}}>
                          <li className="closemenu p-0" style={{cursor:'pointer',opacity:1}}><img onClick={this.closeMenu} src='https://api.dignitestudio.com/images/image/Icons/Close-Menu.png' width="50px" height="50px" alt="icon-close"/></li>
                      </ul>
                  </Container>
                  <ul className="list-item">
                    {this.state.listMenu.map((item,i)=>{
                      if(item.klik === true){
                        return(
                          <li ref={div => this.users[i] = div}><a onClick={this.showModal}>HIRE US</a></li>
                        )
                      } else if (item.linkweb){
                        return (
                          <li ref={div => this.users[i] = div}><a href="https://dignitestore.herokuapp.com/" target="_blank" rel="noopener">STORE</a></li>
                        )
                      } else {
                        return(
                          <li key={item.id} ref={div => this.users[i] = div}><Link href="/about">{item.nama}</Link></li>
                        )
                      }
                    })}
                      {/* <li ref={nav => this.navbar2 = nav}><Link href="/about">ABOUT</Link></li>
                      <li ref={nav => this.navbar2 = nav}><Link href="/work">WORK</Link></li>
                      <li ref={nav => this.navbar2 = nav}><a onClick={this.showModal}>HIRE US</a></li>
                      <li ref={nav => this.navbar2 = nav}><Link href="/blog">BLOG</Link></li>
                      <li ref={nav => this.navbar2 = nav}><a href="https://dignitestore.herokuapp.com/" target="_blank" rel="noopener">STORE</a></li> */}
                  </ul>
                </div>
            </div>

        {/* <div className={`contents ${closeContents}`}> */}
        <div>
          <Header openMenu={this.openMenu}/>
            {this.props.children}
          <Footer showModal={this.showModal} />
        </div>

        <ModalHire modal={modal} closeModal={this.closeModal} showModal2={this.props.showModal2} closeModal2={this.props.closeModal2}/>

      </React.Fragment>
    )
  }
}

export default Layout
