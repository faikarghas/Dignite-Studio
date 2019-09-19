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

    this.state={
      modal:'',
      listMenu : [
        {id:1,nama:'ABOUT',link:'/about'},
        {id:2,nama:'WORK',link:'/work'},
        {id:3,nama:'HIRE US',link:'',klik:true},
        {id:4,nama:'BLOG',link:'/blog'},
        {id:5,nama:'STORE',link:'',linkweb:true},
      ],
      elHeight: 171,
      menu: false
    }

  }

  componentDidMount(){
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
    this.getHeight()
  }

  getHeight = () => {
    let elHeight = document.getElementById('top').clientHeight
    this.setState({
      elHeight
    })
  }

  openMenu = () => {
    const GSAP = require('gsap');
    const CustomEase = require('../../lib/CustomEase');

    const { TweenMax, TimelineLite, Power4 } = GSAP;

    this.setState({
      menu: true
    })

    // logo

    // menu icon
    TweenMax.to(this.svgElement1,.2, {fill: "rgb(255,255,255,1)"})
    TweenMax.to(this.svgElement2,.2, {fill: "rgb(255,255,255,1)"})
    TweenMax.to(this.svgElement3,.2, {fill: "rgb(255,255,255,1)"})



    // menu box
    TweenMax.to(this.navbar, .4, { right: 0, opacity:1, ease:Power4.easeInOut });
    TweenMax.to(this.headerElement, .4, { right: 0, opacity:1, ease:Power4.easeInOut });

    TweenMax.staggerFrom(this.users, 1, { opacity: 0}, .1);
    TweenMax.staggerTo(this.users, 1, { opacity: 1, ease:Power4.easeInOut }, .1);
  }

  closeMenu = () => {
    const GSAP = require('gsap');

    const { TweenMax, TimelineLite, Power4 } = GSAP;

    this.setState({
      menu: false
    })


    TweenMax.staggerFrom(this.users, 1, { opacity: 1}, 0.1);
    TweenMax.staggerTo(this.users, 1, { opacity: 0,ease:Power4.easeInOut }, 0.1,allDone);

    // menu icon
    TweenMax.to(this.svgElement1,.2, {fill: "rgb(34,34,34,1)",delay:1})
    TweenMax.to(this.svgElement2,.2, {fill: "rgb(34,34,34,1)",delay:1})
    TweenMax.to(this.svgElement3,.2, {fill: "rgb(34,34,34,1)",delay:1})

    let thisNavbar = this.navbar
    let headerElement = this.headerElement
    let logoElement = this.logoElement

    function allDone(){
      TweenMax.to(thisNavbar, .8, { right: '100%',ease:Power4.easeInOut ,onComplete:done2});
      TweenMax.to(headerElement, .8, { right: '100%',ease:Power4.easeInOut ,onComplete:done2});
    }

    function done2() {
      TweenMax.to(thisNavbar, 0, {css:{opacity:0,right:'-100%'},ease:Power4.easeInOut});
      TweenMax.to(headerElement, 0, {css:{opacity:0,right:'-100%'},ease:Power4.easeInOut});
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
    const {modal,menu} = this.state

    return(
      <React.Fragment>
        <Head>
          <title>Dignite Studio</title>
        </Head>

        <div>
          <Header openMenu={this.openMenu} closeMenu={this.closeMenu} menu={menu}
            headerRef={el => this.headerElement = el}
            svgRef1={el => this.svgElement1 = el}
            svgRef2={el => this.svgElement2 = el}
            svgRef3={el => this.svgElement3 = el}
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

        <ModalHire modal={modal} closeModal={this.closeModal} showModal2={this.props.showModal2} closeModal2={this.props.closeModal2}/>

      </React.Fragment>
    )
  }
}

export default Layout
