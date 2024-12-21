import './AboutBlock.css'
import terrarium from '../../../assets/images/terrarium.jpg'
import bloodcraft from '../../../assets/images/bloodcraft.jpg'
import adatto from '../../../assets/images/adatto.jpg'
import poemix from '../../../assets/images/poemix.jpg'

export default function AboutBlock(props){
    const {isEn} = props;
    return (
        <div className="about-block">
            <div className="about-parent">
                <div className="about-text">
                <h4>{isEn ? 'I create user-friendly websites' : 'Я створюю комфортні сайти'}</h4>
                <p>
                    {isEn ? 'I strive to create high-quality, user-friendly, and visually appealing websites that provide an excellent user experience.' 
                        : 'Я намагаюсь створити як умога якісні, комфортні та гарні сайти, що забезпечують чудовий досвід користувачів.'}
                </p>
                <div className="button hello-button">
                    {isEn ? 'Portfolio' : 'Портфоліо'}
                </div>

                </div>
                <div className="about-image">
                    <img src={terrarium} alt="terrarium" />
                    <img src={bloodcraft} alt="bloodcraft" />
                    <img src={adatto} alt="adatto" />
                    <img src={poemix} alt="poemix" />
                </div>
            </div>
        </div>
    )
}