import React from 'react';
import imgs from '../images/pic preview.png'
import './MyInformation.css'

const MyInformation = ({about}) => {

    let total = 0;
    for(const items of about){
        total = total + items.time;
    }

    return (
        <div className='card p-2 shadow-lg pb-5 pt-4'>
            <h2 className='text-center mb-4'>About</h2>
            <div className="my-title d-flex align-items-center gap-1 ">
                <img src={imgs} alt="" />
                <div>
                <h6>Sumanta Majumder</h6>
                <small>Dhaka, Bangladesh</small>
                </div>
            </div>
            <div className="hight-wight d-flex align-items-center justify-content-around my-4  bg  pt-2 px-2 text-center">
                <div>
                    <h5>62<small>kg</small></h5>
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
            <div className="break d-flex justify-content-around gap-1 mt-2 mb-3 bg py-2 px-2">
                <button onClick={()=>handler(34)}>10s</button>
                <button className='bg-primary'>20s</button>
                <button>30s</button>
                <button>40s</button>
                <button>50s</button>
            </div>
            <h5>Exercise Details</h5>
            <div className='d-flex justify-content-between bg mt-3 mb-1 pt-2 px-2'>
                <p>Exercise time: </p>
               <p> <span>{total} second</span></p>
            </div>
            <div className='d-flex justify-content-between bg pt-2 mb-3 px-2'>
                <p>Break time: </p>
               <p> <span >00 second</span></p>
            </div>
            <button className='btn btn-primary'>Activity Completed</button>
        </div>
    );
};

export default MyInformation;