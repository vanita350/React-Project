import React from 'react';
import './OurStory.css';
import aboutImg from '../assets/img/abt-img-2.jpg'; // ✅ Corrected filename and variable name

function OurStory() {
    return (
        <section className="about-section py-5">
            <div className="container">
                <div className="row align-items-center">
                    {/* Text Side */}
                    <div className="col-lg-7 col-md-12 mb-4 mb-lg-0">
                        <h5 className="text-danger subtitle">
                            Our Story <span className="underline"></span>
                        </h5>
                        <h2 className="title">The Story About Pizzon</h2>
                        <p className="desc">
                            Lorem ipsum dolor sit amet, <b>colur</b> consectetur omni adipisicing elit,
                            sed do eiusmod tempor incididunt labore et magna aliqua.
                        </p>

                        <div className="row pt-3">
                            <div className="col-sm-6">
                                <h5 className="mini-title">Our Family Name</h5>
                                <p className="desc-sm">
                                    Lorem ipsum dolor sit amet, consectetur omni adipisicing elit, sed do eiusmod tempor
                                    sol incididunt ut labore et exercitation.
                                </p>
                            </div>
                            <div className="col-sm-6">
                                <h5 className="mini-title">Our Journey</h5>
                                <p className="desc-sm">
                                    Lorem ipsum dolor sit amet, consectetur omni adipisicing elit, sed do eiusmod tempor
                                    sol incididunt ut labore et exercitation.
                                </p>
                            </div>

                            <div className="col-sm-6">
                                <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/abt-img-1.jpg" alt="" style={{ width: "100%" }} />
                            </div>

                            <div className="col-sm-6">
                                <h5 className="mini-title">Food and Fun</h5>
                                <p className="desc-sm">
                                    Lorem ipsum dolor sit amet, consectetur omni adipisicing elit, sed do eiusmod tempor
                                    sol incididunt ut labore et exercitation.
                                </p>
                                <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/abt-logo.png" alt="" />
                            </div>
                        </div>
                    </div>

                    {/* Image Side */}
                    <div className="col-lg-5 col-md-12 text-center">
                        <img src={aboutImg} alt="About" className="img-fluid rounded-4" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OurStory;
