import './Portfolio.css'
import poemix from '../assets/images/poemix.jpg'
import bloodcraft from '../assets/images/bloodcraft.jpg'
import terrarium from '../assets/images/terrarium.jpg'
import vismem from '../assets/images/vismem.png'
import PortfolioItem from './PortfolioItem'
import magma from '../assets/images/magma.png'

export default function Portfolio(props){
    const {isEn} = props;
    return (
        <div className="portfolio-block">
            <PortfolioItem isEn={isEn} name="POEMIX" image={poemix} link="https://adattoweb.github.io/poemix/">
                {isEn ? 'This is a GitHub project whose main goal is to help schoolchildren learn poetry. It can also be used to memorize texts.' :
                'Це GitHub проєкт основна мета якого допомагати школярам вивчати вірши. Його також можна використовувати для запам’ятовування текстів.'}
            </PortfolioItem>
            <PortfolioItem isEn={isEn} name="BLOODCRAFT" image={bloodcraft}>
                {isEn ? 'This is a website for a Minecraft server. It is built on WordPress, so the site includes a news and events page where administrators periodically post updates. The website is not working.' 
                    : 'Це сайт для майнкрафт серверу. Він зроблений на WordPress, тому на сайті є сторінка новини і івенти, де адміністратори сайту періодично роблять записи. Сайт не працює.'}
            </PortfolioItem>
            <PortfolioItem isEn={isEn} name="TERRARIUM" image={terrarium}>
                {isEn ? 'This is a website for a Minecraft server with an interesting design. Unfortunately, it is currently not operational.' 
                    : 'Це сайт для майнкрафт серверу, з доволі цікавим дизайном, але наразі він, на жаль, не працює.'}
            </PortfolioItem>
            {/* <PortfolioItem isEn={isEn} name="VISMEM" image={vismem}>
                {isEn ? 'This is a GitHub project designed to train your visual memory. You are presented with a set of numbers or letters (depending on your choice) that you must memorize and then input.' 
                    : 'Це GitHub проєкт, на якому можна тренувати свою візуальну пам’ять. Вам дається набір цифр або букв (як оберете), а Ви повинні їх запам’ятати і ввести.'}
            </PortfolioItem> */}
            <PortfolioItem isEn={isEn} name="MAGMA" image={magma} link="https://adattoweb.github.io/magma">
                {isEn ? 'This is a GitHub project for tracking, planning, and analyzing your time.The main advantage — everything is stored locally.The main drawback — no synchronization.' 
                    : 'Це GitHub проєкт, на якому можна відслідковувати, планувати та аналізувати свій час. Головна перевага - все зберігається локально. Головний недолік - немає синхронізації.'}
            </PortfolioItem>
        </div>
    )
}