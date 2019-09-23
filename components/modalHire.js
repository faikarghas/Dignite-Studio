import { Container,Row,Col,Form,Button } from 'react-bootstrap';
class project extends React.Component{
    state = {
        name:'',
        email:'',
        companyName:'',
        phoneNumber:'',
        message:'',
        Loading:false,
        modal:''
    }

    inputHandler = (evt) => {
        this.setState({
            [evt.target.name]:evt.target.value
        })
    }

    onSubmitHandler = (evt) => {
        evt.preventDefault()
        const {name,email,companyName,phoneNumber,message} = this.state
        this.setState({Loading:true})
        fetch('https://api.dignitestudio.com/api/posthire',{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify( {
                name,
                email,
                companyName,
                phoneNumber,
                message
            })
        })
        .then(res=>res.json())
        .then(res=>{
            this.setState({Loading:false})
            this.setState({
                name:'',
                email:'',
                companyName:'',
                phoneNumber:'',
                message:''
            })
            alert('terkirim')
        })
    }

    closeModal = (a,b) =>{
        if(a){
            a()
        }
        b()
    }

    render(){
        const {name,email,companyName,phoneNumber,message} = this.state
        const {modal,closeModal,showModal2,closeModal2} = this.props

        return (
            <div className={`modal-hireus ${modal} ${showModal2}`}>
                <div className="close-contact">
                    <img onClick={()=>this.closeModal(closeModal2, closeModal)} src="https://api.dignitestudio.com/images/image/Icons/Close-Contact.png" alt="icon-close"/>
                </div>
                <Container>
                    <Row>
                        <Col xs={5}>
                            <h2 className="mb-5">Get in touch!</h2>
                            <h3>Have a project in mind? <br/>Let's talk.</h3>
                            <br/>
                            <br/>
                            <p>hello@dignitestudio.com</p>
                            <p>(+62) 813 1610 0044</p>
                        </Col>
                        <Col xs={7}>
                            <Form onSubmit={this.onSubmitHandler}>
                                <Form.Row>
                                    <Form.Group as={Col} md='6' className="mb-4">
                                        <Form.Control type="text" id="name" placeholder="Your Name" name="name" value={name} onChange={this.inputHandler} required/>
                                    </Form.Group>
                                    <Form.Group as={Col} md='6' className="mb-4">
                                        <Form.Control type="email" id="email" placeholder="Your Email" name="email" value={email} onChange={this.inputHandler} required/>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} md='6' className="mb-4">
                                        <Form.Control type="text" id="companyName" placeholder="Company Name" name="companyName" value={companyName} onChange={this.inputHandler} required/>
                                    </Form.Group>
                                    <Form.Group as={Col} md='6' className="mb-4">
                                        <Form.Control type="number" id="phoneNumber" placeholder="Phone Number" name="phoneNumber" value={phoneNumber} onChange={this.inputHandler} required/>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Group className="mb-5">
                                    <Form.Control as="textarea"  id="message" placeholder="Your Message" name="message" value={message} onChange={this.inputHandler} required/>
                                </Form.Group>
                                <Button type="submit">
                                    {this.state.Loading ? <div class="lds-ring"><div></div><div></div><div></div><div></div></div>: 'Start Conversation'}
                                </Button>
                            </Form>
                        </Col>
                  </Row>
                </Container>
            </div>
        )
    }
}

export default project
