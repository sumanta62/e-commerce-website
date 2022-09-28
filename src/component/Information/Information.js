import React, { useEffect, useState } from 'react';
import logo from '../images/logo.png';
import GimClub from '../GimClub/GimClub';
import './Information.css'
import MyInformation from '../MyInformation/MyInformation';

const Information = () => {

    const [card, setCard] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setCard(data))
    }, [])
    return (
        <div className='information container mt-lg-5'>
            <div className="title-logo d-flex align-items-center gap-2 mb-4">
                <img src={logo} alt="" />
                <h2>GIM-Active-club</h2>
            </div>
            <p className='fw-bold'>Select today’s exercise</p>
            <div className="row">
                <div className="display-activety col-lg-9">
                    <div className="row">
                    {/* <div className="singal-club"> */}
                        <div className="col-lg-4 gap-4">
                            {
                                card.map(cards => <GimClub item={cards} key={cards.id}></GimClub>)
                            }
                        </div>
                    </div>
                </div>
                <div className="my-informaion col-lg-3">
                    <h1>fgvdjvkfdl</h1>
                    <MyInformation></MyInformation>
                </div>
            </div>
        </div>
    );
};

export default Information;