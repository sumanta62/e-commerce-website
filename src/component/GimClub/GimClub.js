
import './GimClub.css'

const GimClub = (props) => {
    const {img, id, name, age, time} = props.item;

    return (
        <div>
           <div className="card">
                <img src={img} alt="" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <h6>Age: {age}</h6>
                    <h6>Time required : {time}</h6>
                    <a href="/" className="btn btn-primary w-100%">Add to list</a>
                </div>
            </div>
        </div>
    );
};

export default GimClub;