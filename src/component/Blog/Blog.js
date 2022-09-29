import React from 'react';

const Blog = () => {
    return (
        <div>
        <div className="card accordion accordion-flush" id="accordionFlushExample">
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
                        <p> <b>Var Variable:</b> The scope of the var keyword is the global or function scope. It means
                            variables defined outside the function can be accessed globally, and variables defined
                            inside a particular function can be accessed within the function. </p>
                        <p><b>Let Variable: </b> The scope of a let variable is only block scoped. It can’t be
                            accessible outside the particular block.</p>
                        <p><b> Const Variable: </b> The user cannot update the const variable once it is declared. </p>
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
                        <p> <b>Arrow function:</b> On the other side, no arguments special keyword is defined inside an
                            arrow function. Again (same as with this value), the arguments object is resolved lexically:
                            the arrow function accesses arguments from the outer function.. </p>
                        <p><b>Regular function: </b> Inside the body of a regular function, arguments is a special
                            array-like object containing the list of arguments with which the function has been invoked.
                        </p>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        <b>.forEach(), .map(), .filter() .find() What's the difference?</b>
                    </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        <p><b>.Map(): </b>Executes the same code on every element in an array and returns a new array
                            with the updated elements.</p>
                        <p><b>.forEach(): </b>Is used to execute the same code on every element in an array but does not
                            change the array and it returns undefined.</p>
                        <p><b>.filter(): </b>Checks every element in an array to see if it meets a certain criteria and
                            returns a new array with the elements that return truthy for the criteria.</p>
                        <p><b>.find(): </b>When you want to select a single element from an array.</p>
                    </div>
                </div>
            </div>
        </div>
      
        </div>
    );
};

export default Blog;