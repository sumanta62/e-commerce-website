import React, { useEffect, useState } from 'react';
import imgs from '../images/pic preview.png'
import './MyInformation.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const MyInformation = ({ about }) => {
    const [time, setTime] = useState([0]);
    const notify = () => toast("Activity Completed!");

    function setTimeAdd(times) {
        setTime(times)
        localStorage.setItem('time', JSON.stringify(times));

    }

    useEffect(() => {
        const addTimeCart = JSON.parse(localStorage.getItem('time'));
        if (addTimeCart) {
            localStorage.setItem('time', JSON.parse(addTimeCart))
        }

        setTime(addTimeCart)
    }, [])

    let total = 0;
    for (const items of about) {
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
                <button onClick={() => setTimeAdd(10)}>10s</button>
                <button onClick={() => setTimeAdd(20)} className='bg-primary'>20s</button>
                <button onClick={() => setTimeAdd(30)}>30s</button>
                <button onClick={() => setTimeAdd(40)}>40s</button>
                <button onClick={() => setTimeAdd(50)}>50s</button>
            </div>
            <h5>Exercise Details</h5>
            <div className='d-flex justify-content-between bg mt-3 mb-1 pt-2 px-2'>
                <p>Exercise time: </p>
                <p> <span>{total} second</span></p>
            </div>
            <div className='d-flex justify-content-between bg pt-2 mb-3 px-2'>
                <p>Break time: </p>
                <p><span >{time} second</span></p>
            </div>
            <button onClick={notify} className='btn btn-primary'>Activity Completed</button>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default MyInformation;