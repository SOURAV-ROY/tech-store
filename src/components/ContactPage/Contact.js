import React from 'react';
import Title from "../Title";

const Contact = () => {
    return (
        <section className="py-5">
            <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                    <Title title="Contact Us" center/>
                    <form action="" className="mt-5">

                        {/*NAME*/}
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Alien"
                            />
                        </div>

                        {/*EMAIL*/}
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="alien@email.com"
                            />
                        </div>

                        {/*SUBJECT*/}
                        <div className="form-group">
                            <input
                                type="text"
                                name="subject"
                                className="form-control"
                                placeholder="Important!!!"
                            />
                        </div>

                        {/*MESSAGE*/}
                        <div className="form">
                            <textarea
                                name="message"
                                className="form-control"
                                rows="10"
                                placeholder="Hello There Buddy"
                            />
                        </div>

                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
