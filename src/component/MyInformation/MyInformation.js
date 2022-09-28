import React from 'react';
import imgs from '../images/pic preview.png'
import './MyInformation.css'

const MyInformation = () => {

    return (
        <div>
            <div className="my-title d-flex align-items-center gap-2">
                <img src={imgs} alt="" />
                <div>
                <h5>Sumanta Majumder</h5>
                <i>Dhaka, Bangladesh</i>
                </div>
            </div>
            <div className="hight-wight d-flex align-items-center gap-5">
                <div>
                    <h5>75<small>kg</small></h5>
                    <p>Weight</p>
                </div>
                <div>
                    <h5>5.6</h5>
                    <p>Height</p>
                </div>
                <div>
                    <h5>22<small>yrs</small></h5>
                    <p>Age</p>
                </div>
            </div>
            <h5>Add A Break</h5>
            <div className="break">
                <p>10s</p>
                <p></p>
            </div>
        </div>
    );
};

export default MyInformation;