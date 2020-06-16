import React from 'react';
import Title from "../Title";

const Contact = () => {
    return (
        <section className="py-5">
            <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                    <Title title="Contact Us" center/>
                    <form action="https://formspree.io/souravroy.info13@gmail.com" method="POST" className="mt-5">

                        {/*NAME*/}
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Alien"
                                required={true}
                            />
                        </div>

                        {/*EMAIL*/}
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="alien@gmail.com"
                                required={true}
                            />
                        </div>

                        {/*SUBJECT*/}
                        <div className="form-group">
                            <input
                                type="text"
                                name="subject"
                                className="form-control"
                                placeholder="SUBJECT !!"
                                required={true}
                            />
                        </div>

                        {/*MESSAGE*/}
                        <div className="form">
                            <textarea
                                name="message"
                                className="form-control"
                                rows="8"
                                placeholder="Hello Buddy, You Are Great !!"
                                required={true}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <input
                                type="submit"
                                value="Send"
                                className="form-control bg-info text-white"
                            />
                        </div>

                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
