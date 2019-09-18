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
  }

  openMenu = () => {
    const GSAP = require('gsap');
    const CustomEase = require('../../lib/CustomEase');

    console.log(CustomEase.CustomEase.create());

    const { TweenMax, TimelineLite, Power4 } = GSAP;
    TweenMax.to(this.navbar, .5, { right: 0, opacity:1, ease:Power4.easeInOut });
    // TweenMax.to(this.navbar2, .2, { right: 0, opacity:1, ease:Power4.easeInOut });

    TweenMax.staggerFrom(this.users, 1.2, { opacity: 0}, .1);
    TweenMax.staggerTo(this.users, 1.2, { opacity: 1, ease:Power4.easeInOut }, .1);

    // TweenMax.to(this.users, .1, { opacity: 1,delay: .4,ease:Power4.easeInOut });

  }

  closeMenu = () => {
    const GSAP = require('gsap');

    const { TweenMax, TimelineLite, Power4 } = GSAP;


      TweenMax.staggerFrom(this.users, 1, { opacity: 1}, 0.1);
      TweenMax.staggerTo(this.users, 1, { opacity: 0,ease:Power4.easeInOut }, 0.1,allDone);
      // TweenMax.to(this.users, .5, { opacity: 0  ,ease:Power4.easeInOut ,onComplete:allDone});

      let thisNavbar = this.navbar
      let thisNavbar2 = this.navbar2

      function allDone(){
        TweenMax.to(thisNavbar, .8, { right: '100%',ease:Power4.easeInOut ,onComplete:done2});
        // TweenMax.to(thisNavbar2, .4, { right: '100%',ease:Power4.easeInOut ,onComplete:done2});
      }

      function done2() {
        TweenMax.to(thisNavbar, 0, {css:{opacity:0,right:'-100%'},ease:Power4.easeInOut});
        // TweenMax.to(thisNavbar2, 0, {css:{opacity:0,right:'-100%'},ease:Power4.easeInOut});
      }
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
    const {modal} = this.state

    return(
      <React.Fragment>
        <Head>
          <title>Dignite Studio</title>
        </Head>
        <div className={`overlay` }></div>
          {/* <div className="menu2" ref={nav => this.navbar2 = nav}></div> */}
          <div className="menu" ref={nav => this.navbar = nav}>
              <div>
                <Container className="header_menu">
                    <ul style={{textAlign:'right',paddingTop:0}}>
                        <li className="closemenu p-0" style={{cursor:'pointer',opacity:1}}><img onClick={this.closeMenu} src='https://api.dignitestudio.com/images/image/Icons/Close-Menu.png' width="50px" height="50px" alt="icon-close"/></li>
                    </ul>
                </Container>
                <ul className="list-item">
                  {this.state.listMenu.map((item,i)=>{
                    if(item.klik){
                      return(
                        <li key={item.id} ref={div => this.users[i] = div}><a onClick={this.showModal}>HIRE US</a></li>
                      )
                    } else if (item.linkweb){
                      return (
                        <li key={item.id} ref={div => this.users[i] = div}><a href="https://dignitestore.herokuapp.com/" target="_blank" rel="noopener">STORE</a></li>
                      )
                    } else {
                      return(
                        <li key={item.id} ref={div => this.users[i] = div}><Link href={item.link}><a>{item.nama}</a></Link></li>
                      )
                    }
                  })}
                </ul>
              </div>
          </div>
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
