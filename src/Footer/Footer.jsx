import './Footer.css'
import adattologo from '../assets/images/adattologo.png'
import github from '../assets/images/github.png'
import telegram from '../assets/images/telegram.png'
import discord from '../assets/images/discord.png'

export default function Footer(props){
    const {isEn} = props;
    return (
        <footer className="footer">
            <div className="footer-one">
                <img src={adattologo} alt="logo"/>
                <div className="footer-info">
                    <h4>adattoweb</h4>
                    <p>{isEn ? 'Web-developer' : 'Веб-розробник'}</p>
                </div>
                <p className="footer-copy">
                {isEn ? 'Copyright © adatoweb ' + new Date().getFullYear() + '. All rights reserved.' : 'Copyright © adattoweb '+ new Date().getFullYear() + '. Всі права захищені.'}
                <br></br>
                {isEn ? 'In Telegram and Discord @adattoweb' : 'У телеграмі і діскорді @adattoweb'}
                </p>
            </div>
            <div className="footer-two">
                <a href="https://github.com/adattoweb" target="_blank" className="footer-two-item github">
                    <img src={github} alt="" />
                </a>
                <a href="https://t.me/adattoweb" target="_blank" className="footer-two-item telegram">
                    <img src={telegram} alt="" />
                </a>
                <a onClick={() => {
                    navigator.clipboard.writeText('@adattoweb')
                }} href="#" className="footer-two-item discord">
                    <img src={discord} alt="" />
                </a>
            </div>
        </footer>
    )
}