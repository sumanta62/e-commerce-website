import React, { useEffect, useState } from 'react';
import logo from '../images/logo.png';
import GimClub from '../GimClub/GimClub';
import './Information.css'
import MyInformation from '../MyInformation/MyInformation';
import Blog from '../Blog/Blog';

const Information = () => {
    const [card, setCard] = useState([]);
    const [about, setAbout]=useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setCard(data))
    }, []);
    

    function handlarAddToCard(selectItems){
        const aboutCard = [...about, selectItems];
        setAbout(aboutCard);
    }

  
    return (
        <div className='information  mt-5'>
            <div className="title-logo d-flex align-items-center gap-2 mb-4">
                <img src={logo} alt="" />
                <h2>GIM-Active-club</h2>
            </div>
            <p className='fw-bold'>Select today’s exercise</p>
            <div className="row mt-4">
                <div className="display-activety col-md-12 col-lg-9 g-4">
                    <div className="singal-club">
                            {
                                card.map(cards => <GimClub item={cards} key={cards.id} handlarAddToCard={handlarAddToCard}></GimClub>)
                            }
                    </div>
                </div>
                <div className="my-informaion col-md-12 col-lg-3 g-4">
                    <MyInformation about={about}></MyInformation>
                </div>
            </div>
            <div>
                <Blog></Blog>
            </div>
            <section class="container my-5">
            <div className="footer text-center">
                <h6>Copyright 2022 GIM-Active-club</h6>
            </div>
        </section>
        </div>
    );
};

export default Information;