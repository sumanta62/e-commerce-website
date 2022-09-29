import React, { useEffect, useState } from 'react';
import logo from '../images/logo.png';
import GimClub from '../GimClub/GimClub';
import './Information.css'
import MyInformation from '../MyInformation/MyInformation';

const Information = () => {
    const [card, setCard] = useState([]);
    const [about, setAbout]=useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setCard(data))
    }, [])

    
    function handlarAddToCard(selectItems){
        const aboutCard = [...about, selectItems];
        setAbout(aboutCard);
    }

  
    return (
        <div className='information container mt-lg-5'>
            <div className="title-logo d-flex align-items-center gap-2 mb-4">
                <img src={logo} alt="" />
                <h2>GIM-Active-club</h2>
            </div>
            <p className='fw-bold'>Select today’s exercise</p>
            <div className="row mt-4">
                <div className="display-activety col-lg-9 col-md-8">
                    <div className="singal-club">
                            {
                                card.map(cards => <GimClub item={cards} key={cards.id} handlarAddToCard={handlarAddToCard}></GimClub>)
                            }
                    </div>
                </div>
                <div className="my-informaion col-lg-3 col-md-4">
                    <MyInformation about={about}></MyInformation>
                </div>
            </div>
        </div>
    );
};

export default Information;