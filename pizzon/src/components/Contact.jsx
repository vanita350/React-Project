import './Contact.css';

const Contactus = () => {
    return (
        <>
               <section className="banner">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 ">
                            <div className='banner-content'>
                                <h2>About Us</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                       
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 align justify-content-end  d-xs-flex d-lg-flex  d-none d-xxl-flex">
                            <ul className='breadcrumb'>
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    About Us
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>

                <div className="banner-img">
                    <div className='jamun-img d-none d-xl-flex  '>

                        {/* <img src="./assets/img/onion.png" alt="" /> */}
                    </div>
                    <div className='onion-img d-none d-lg-block d-md-flex'>
                        <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/onion.png" alt="" />
                    </div>
                    <div className='tamatop-img d-none d-lg-block d-md-flex'>
                        <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/tamato.png" alt="" />
                    </div>
                    <div className='leaf-img d-none d-lg-block d-md-flex'>
                        <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/banner-leaf.png" alt="" />
                    </div>
                </div>
            </section>
            {/* section2   */}
            <section class="reservation-main ptb-150 position-r overflow-h">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-6 col-lg-6 col-md-12 d-flex">
                            <div class="section-heading section-heading-left wow fadeInLeft">
                                <h3 class="sub-title">Consultation</h3>
                                <h1>Send Us Message</h1>

                                {/* <div class="contactfrmmsg">Thank You! Your message has been sent.</div> */}
                                <form class="book-form wow fadeInLeft md-mb-40 contactfrm" method="post">
                                    <div class="row col-xl-12">
                                        <div class="col-xl-6 col-lg-6 col-md-6">
                                            <div class="form-group">
                                                <input type="text" name="text" class="form-control" placeholder="Name*" required />
                                            </div>
                                        </div>
                                        <div class="col-xl-6 col-lg-6 col-md-6">
                                            <div class="form-group">
                                                <input type="text" name="text" class="form-control" placeholder="Email*" required />
                                            </div>
                                        </div>
                                        <div class="col-xl-6 col-lg-6 col-md-6">
                                            <div class="form-group">
                                                <input type="text" name="text" class="form-control" placeholder="Phone*" required />
                                            </div>
                                        </div>
                                        <div class="col-xl-6 col-lg-6 col-md-6">
                                            <div class="form-group">
                                                <input type="text" name="text" class="form-control" placeholder="Website" required />
                                            </div>
                                        </div>
                                        <div class="col-xl-12 col-lg-12 col-md-12">
                                            <div class="form-group">
                                                <textarea class="form-control" placeholder="Write Message" style={{ height: "150px" }}></textarea>
                                            </div>
                                        </div>
                                        <div class="form-button">
                                            <button class="btn-ct">SEND MESSAGE</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div class="col-xl-6 col-lg-6 col-md-12 d-flex">
                            <div class="full-img wow fadeInRight">
                                <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/cons-img.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* mep   */}

            <section class="map-section">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093846!2d144.95373531532164!3d-37.81627927975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5777b335b41f282!2s121%20King%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sin!4v1693821170000!5m2!1sen!2sin"
                >
                </iframe>
            </section>


            <div className="info-section">
                <div className="container">
                    <div className="info-box">
                        <div className="info-item">
                            <div className="box1">
                                <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/location.png" alt="Location" />
                            </div>
                            <div className="box2">
                                <h1>Location</h1>
                                <p>155 Main Street, 2nd Floor</p>
                                <p>New York City</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="box1">
                                <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/mail.png" alt="Email" />
                            </div>
                            <div className="box2">
                                <h1>Email Address</h1>
                                <p>Support@gmail.com</p>
                                <p>Contact@gmail.com</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="box1">
                                <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/call.png" alt="Contact" />
                            </div>
                            <div className="box2">
                                <h1>Contact Us</h1>
                                <p>+49 123 456 789</p>
                                <p>+49 123 456 789</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contactus;