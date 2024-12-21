import star from '../../../assets/images/star.png'
import destar from '../../../assets/images/destar.png'

export default function ReviewsItem(props){
    const {children, name, stars, avatar} = props;
    const array = [];
    for(let i = 0; i < 5; i++){
        array.push(i < stars);
    }
    console.log(array)
    return (
        <div className="reviews-item">
            <div className="reviews-info">
                <img className="reviews-logo" src={avatar} alt="" />
                <div className="reviews-two">
                    <h4>{name}</h4>
                    <div className="reviews-stars">
                        {array.map((el, index) => (
                             <img
                             key={index}
                             src={el ? star : destar}
                             alt={el ? "Filled star" : "Empty star"}
                         />
                        ))}
                    </div>
                    <p>{children}</p>
                </div>
            </div>
        </div>
    )
}
