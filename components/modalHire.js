import React from 'react'

const project = ({modal,closeModal}) => {
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
                        <form>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                <input type="text" className="form-control" id="inputEmail4" placeholder="Your Name"/>
                                </div>
                                <div className="form-group col-md-6">
                                <input type="email" className="form-control" id="inputPassword4" placeholder="Your Email"/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                <input type="text" className="form-control" id="inputEmail4" placeholder="Company Name"/>
                                </div>
                                <div className="form-group col-md-6">
                                <input type="number" className="form-control" id="inputPassword4" placeholder="Phone Number"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <textarea  className="form-control" id="inputAddress" placeholder="Your Message"/>
                            </div>
                            <button type="submit" className="btn">Start Conversation</button>
                        </form>
                    </div>
              </div>
            </div>
        </div>
    )
}

export default project
