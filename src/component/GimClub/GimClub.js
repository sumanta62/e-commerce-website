
import './GimClub.css'

const GimClub = (props) => {

    const{handlarAddToCard}=props;
    const {img, name, age, time} = props.item;
   
    return (
        <div className=''>
           <div className="card">
                <img src={img} alt=""  className='w-100 '/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <h6>Age: {age}</h6>
                    <h6>Time required : {time}s</h6>
                    <button  onClick={()=>handlarAddToCard(props.item) } className="btn btn-primary w-100">Add to list</button>
                </div>
            </div>
        </div>
    );
};

export default GimClub;