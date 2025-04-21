import './ReviewsBlock.css'
import ReviewsItem from './ReviewsItem'
import adattologo from '../../../assets/images/adattobiglogo.png'

export default function ReviewsBlock(props){
    const {isEn} = props;
    return (
        <div className="reviews-block">
            <div className="reviews-parent">
                <h3 className="header-name">{isEn ? 'Reviews' : 'Відгуки'}</h3>
                <div className="reviews-content">
                    <ReviewsItem avatar={adattologo} stars={5} name="Клієнт">{isEn ? '"Did everything efficiently and quickly! A top-notch developer! Simply amazing! Awesome!' :
                     'Зробив все якісно і швидко! Топовий розробник! Просто чудовий! Крутий!'}</ReviewsItem>
                    <ReviewsItem avatar={adattologo} stars={4} name="Клієнт">{isEn ? '"Did everything efficiently and quickly! A top-notch developer! Simply amazing! Awesome!' :
                     'Зробив все якісно і швидко! Топовий розробник! Просто чудовий! Крутий!'}</ReviewsItem>
                    <ReviewsItem avatar={adattologo} stars={4} name="Клієнт">{isEn ? '"Did everything efficiently and quickly! A top-notch developer! Simply amazing! Awesome!' :
                     'Зробив все якісно і швидко! Топовий розробник! Просто чудовий! Крутий!'}</ReviewsItem>
                    <ReviewsItem avatar={adattologo} stars={5} name="Клієнт">{isEn ? '"Did everything efficiently and quickly! A top-notch developer! Simply amazing! Awesome!' :
                     'Зробив все якісно і швидко! Топовий розробник! Просто чудовий! Крутий!'}</ReviewsItem>
                </div>
            </div>
        </div>
    )
}