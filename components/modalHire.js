import { Container,Row,Col,Form,Button } from 'react-bootstrap';
class project extends React.Component{
    state = {
        name:'',
        email:'',
        companyName:'',
        phoneNumber:'',
        message:'',
        Loading:false
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

    render(){
        const {name,email,companyName,phoneNumber,message} = this.state
        const {modal,closeModal} = this.props
        return (
            <div className={`modal-hireus ${modal}`}>
                <div className="close-contact">
                    <img onClick={closeModal} src="../static/image/Icon/Close-Contact.png"/>
                </div>
                <Container>
                    <Row>
                        <Col xs={5}>
                            <h1 className="mb-5">Get in touch!</h1>
                            <h2>Have a project in mind? <br/>Let's talk.</h2>
                            <br/>
                            <br/>
                            <p className="m-0">Jl. Raya Rawabuntu</p>
                            <p className="m-0">Ruko Golden Vienna Blok BB No. 11</p>
                            <p className="m-0">Serpong, Tangerang Selatan</p>
                            <p className="m-0">Indonesia 15318</p>
                            <br/>
                            <br/>
                            <p>hello@dignitestudio.com</p>
                            <p>(+62) 812 8783 1421</p>
                        </Col>
                        <Col xs={7}>
                            <Form onSubmit={this.onSubmitHandler}>
                                <Form.Row>
                                    <Form.Group as={Col} md='6'>
                                        <Form.Control type="text" id="name" placeholder="Your Name" name="name" value={name} onChange={this.inputHandler} />
                                    </Form.Group>
                                    <Form.Group as={Col} md='6'>
                                        <Form.Control type="email" id="email" placeholder="Your Email" name="email" value={email} onChange={this.inputHandler} />
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} md='6'>
                                        <Form.Control type="text" id="companyName" placeholder="Company Name" name="companyName" value={companyName} onChange={this.inputHandler} />
                                    </Form.Group>
                                    <Form.Group as={Col} md='6'>
                                        <Form.Control type="number" id="phoneNumber" placeholder="Phone Number" name="phoneNumber" value={phoneNumber} onChange={this.inputHandler} />
                                    </Form.Group>
                                </Form.Row>
                                <Form.Group>
                                    <Form.Control as="textarea"  id="message" placeholder="Your Message" name="message" value={message} onChange={this.inputHandler}/>
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
