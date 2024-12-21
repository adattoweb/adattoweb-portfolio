import './AdvantageBlock.css'

export default function AdvantageBlock(props){
    const {isEn} = props;
    return (
        <div className="advantage-block">
            <div className="advantage-parent">
                <h3 className="header-name">{isEn ? 'My advantages' : 'Мої переваги'}</h3>
                <div className="advantage-content">
                <div className="advantage-item">
                    <h4>{isEn ? 'Quality' : 'Якість'}</h4>
                    <p>
                        {isEn ? 'I create high-quality websites that our clients love and that provide an excellent user experience. Every project is carefully thought out to meet the client’s needs and attract the target audience. I pay attention to details, functionality, and modern design to ensure each site is fast, user-friendly, and responsive.' 
                            : 'Я створюю якісні веб-сайти, які подобаються нашим клієнтам та забезпечують відмінний користувацький досвід. Кожен проєкт ретельно продуманий, щоб відповідати потребам замовника та залучати цільову аудиторію. Я приділяю увагу деталям, функціональності та сучасному дизайну, щоб кожен сайт був швидким, зручним та адаптивним.'}
                    </p>
                </div>
                <div className="advantage-item">
                    <h4>{isEn ? 'Reliability' : 'Надійність'}</h4>
                    <p>
                        {isEn ? 'Reliability is a priority in my work. If within 30 days of receiving the website the client notices any shortcomings or issues, I am ready to promptly fix them for free. This ensures you receive a high-quality product and confidence in the stable performance of your website.' 
                            : 'Надійність є пріоритетом у моїй роботі. Якщо протягом 30 днів після отримання сайту клієнт помітить будь-який недолік або проблему, я готовий оперативно виправити його безкоштовно. Це гарантує, що ви отримуєте продукт високої якості та впевненість у стабільній роботі вашого вебсайту.'}
                    </p>
                </div>
                <div className="advantage-item">
                    <h4>{isEn ? 'Speed' : 'Швидкість'}</h4>
                    <p>
                        {isEn ? 'I strive to create websites as quickly as possible without compromising quality. I always meet agreed deadlines to ensure timely project delivery and satisfy client expectations. Efficient work organization and attention to detail allow me to ensure high productivity and a fast development process.' 
                            : 'Я прагну створювати сайти максимально швидко, при цьому не жертвуючи якістю. Завжди дотримуюсь обумовлених дедлайнів, щоб забезпечити своєчасну здачу проєкту та задовольнити очікування клієнтів. Ефективна організація роботи та увага до деталей дозволяють мені забезпечити високу продуктивність і швидкий процес розробки.'}
                    </p>
                </div>
                <div className="advantage-item">
                    <h4>{isEn ? 'Creativity' : 'Креативність'}</h4>
                    <p>
                        {isEn ? 'I always have plenty of creative ideas and am ready to enhance your project with fresh and unique solutions. I strive to create memorable projects while considering all your wishes and adding my vision to achieve the best results.' 
                            : 'У мене завжди багато креативних ідей, і я завжди готовий доповнити ваш проєкт свіжими та унікальними рішеннями. Я прагну створювати проєкти, що запам’ятовуються, та враховую всі ваші побажання, додаючи власне бачення для досягнення найкращого результату.'}
                    </p>
                </div>

                </div>
            </div>
        </div>
    )
}