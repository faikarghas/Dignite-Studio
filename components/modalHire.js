import React from 'react'

class project extends React.Component{
    state = {
        name:'',
        email:'',
        companyName:'',
        phoneNumber:'',
        message:''
    }

    inputHandler = (evt) => {
        this.setState({
            [evt.target.name]:evt.target.value
        })
    }

    onSubmitHandler = (evt) => {
        evt.preventDefault()
        const {name,email,companyName,phoneNumber,message} = this.state
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
            console.log(res);
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
                <div className="container">
                    <div className="row">
                        <div className="col-5">
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
                        </div>
                        <div className="col-7">
                            <form onSubmit={this.onSubmitHandler}>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                    <input type="text" className="form-control" id="name" placeholder="Your Name" name="name" value={name} onChange={this.inputHandler} />
                                    </div>
                                    <div className="form-group col-md-6">
                                    <input type="email" className="form-control" id="email" placeholder="Your Email" name="email" value={email} onChange={this.inputHandler} />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                    <input type="text" className="form-control" id="companyName" placeholder="Company Name" name="companyName" value={companyName} onChange={this.inputHandler} />
                                    </div>
                                    <div className="form-group col-md-6">
                                    <input type="number" className="form-control" id="phoneNumber" placeholder="Phone Number" name="phoneNumber" value={phoneNumber} onChange={this.inputHandler} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <textarea  className="form-control" id="message" placeholder="Your Message" name="message" value={message} onChange={this.inputHandler}/>
                                </div>
                                <button type="submit" className="btn">Start Conversation</button>
                            </form>
                        </div>
                  </div>
                </div>
            </div>
        )
    }
}

export default project
