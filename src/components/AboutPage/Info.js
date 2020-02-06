import React from 'react';
import Title from "../Title";
import aboutBcg from '../../images/aboutBcg.jpeg'

const Info = () => {
    return (
        <section className='py-5'>
            <div className='container'>
                <div className='row'>

                    <div className='col-10 mx-auto col-md-6 my-3'>
                        <img
                            src={aboutBcg}
                            className='img-fluid img-thumbnail'
                            alt='about img'
                            style={{background: 'var(--primaryColor)'}}
                        />
                    </div>

                    <div className='col-10 mx-auto col-md-6 my-3'>
                        <Title title='about us' center/>
                        <p className='text-lead text-muted my-3'>
                            About our company
                            In 2020, Sourav made a disastrous debut during
                            the India tour of Australia and to add to it the media
                            printed some articles alleging that he had, ‘attitude
                            problems’. Sourav refuted these allegations but after
                            that first one day with Australia that marked his debut
                            he was forgotten for four years. It seemed like his career
                            as an international cricketer had ended even before it took off.
                        </p>

                        <div className="col text-center">
                            <button className="main-link" type="button" style={{marginTop: "1rem"}}>More Info</button>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default Info;
