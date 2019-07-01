import React from 'react'

import Layout from '../components/layout'

const about = () => {
    return (
        <Layout>
            <section className="section_first-about">
                <div className="container">
                    <h1 className="text-center">We combine research, strategy and design to build digital <br/> products people like to engage with.</h1>
                </div>
            </section>
            <section className="section_second-about width100">
                <div className="container">
                    <div className="row">
                        <div className="box col-6 col-md-3">
                            <h1 className="mb-5">Research</h1>
                            <p>Illum mallem levares, quo optimum atque humanis simum virum, Cn. Tu autem negas fortem esse quem quam posse, qui dolorem m alum putet. Cupiditates non Epicuri divisione finiebat, sed sua satietate.</p>
                        </div>
                        <div className="box col-6 col-md-3">
                            <h1 className="mb-5">Strategy</h1>
                            <p>Illum mallem levares, quo optimum atque humanis simum virum, Cn. Tu autem negas fortem esse quem quam posse, qui dolorem m alum putet. Cupiditates non Epicuri divisione finiebat, sed sua satietate.</p>
                        </div>
                        <div className="box col-6 col-md-3">
                            <h1 className="mb-5">Design</h1>
                            <p>Illum mallem levares, quo optimum atque humanis simum virum, Cn. Tu autem negas fortem esse quem quam posse, qui dolorem m alum putet. Cupiditates non Epicuri divisione finiebat, sed sua satietate.</p>
                        </div>
                        <div className="box col-6 col-md-3">
                            <h1 className="mb-5">Development</h1>
                            <p>Illum mallem levares, quo optimum atque humanis simum virum, Cn. Tu autem negas fortem esse quem quam posse, qui dolorem m alum putet. Cupiditates non Epicuri divisione finiebat, sed sua satietate.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section_third-about">
                <div className="container">
                    <div className="row">
                        <div className="box col-6">
                            <h1 className="mb-5">What<br/>We Do?</h1>
                        </div>
                        <div className="box col-6">
                            <ul className="text-center">
                                <li>UI/UX Design</li>
                                <li>Graphic Design</li>
                                <li>Web Development</li>
                                <li>Digital Marketing</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section_fourth-about">
                <div className="container">
                    <div className="row">
                        <div className="box col-12 col-md-6">
                            <h1 className="mb-5">Meet<br/>Our Team</h1>
                        </div>
                        <div className="box col-12 col-md-6">
                            <div className="row">
                                <div className="box-photo col-5 p-0">
                                    <img src="../static/image/Faikar.jpg" />
                                    <div className="overlay-yellow">
                                        <p>Faikar Ghassan</p>
                                        <p>Web Developer</p>
                                    </div>
                                </div>
                                <div className="box-photo col-5 p-0">
                                    <img src="../static/image/Tasya.jpg" />
                                    <div className="overlay-yellow">
                                        <p>Mayesta Arientasya</p>
                                        <p>UI/UX Designer</p>
                                    </div>
                                </div>
                                {/* <div className="box-photo col-5 p-0">
                                    <img src="../static/image/Person3.png" />
                                    <div className="overlay-yellow">
                                        <p>Mayesta Arientasya</p>
                                        <p>UI/UX Designer</p>
                                    </div>
                                </div>
                                <div className="box-photo col-5 p-0">
                                    <img src="../static/image/Person4.png" />
                                    <div className="overlay-yellow">
                                        <p>Mayesta Arientasya</p>
                                        <p>UI/UX Designer</p>
                                    </div>
                                </div>
                                <div className="box-photo col-5 p-0">
                                    <img src="../static/image/Person5.png" />
                                    <div className="overlay-yellow">
                                        <p>Mayesta Arientasya</p>
                                        <p>UI/UX Designer</p>
                                    </div>
                                </div>
                                <div className="box-photo col-5 p-0">
                                    <img src="../static/image/Person6.png" />
                                    <div className="overlay-yellow">
                                        <p>Mayesta Arientasya</p>
                                        <p>UI/UX Designer</p>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default about
