import React from 'react';

const Blog = () => {
    return (
        <div className='my-5 '>
            <div className='text-center mb-3'>
                <h1>Interview question</h1>
            </div>
            <div className="card shadow accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            <b>How does React work?</b>
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <p><b>Ans:</b>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes. </p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            <b>Difference between props and state ?</b>
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
                        data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <p><b>Ans:</b> Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. </p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            <b>What is the useEffect other then data lode?</b>
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree"
                        data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <p><b>Ans:</b> The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. setting up subscriptions or timers, etc can lead to unwarranted side-effects.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;