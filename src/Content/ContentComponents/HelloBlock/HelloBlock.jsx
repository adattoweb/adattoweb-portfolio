import './HelloBlock.css'

export default function HelloBlock(props){
    const {isEn} = props;
    return (
        <div className="hello-block">
            <div className="hello-parent">
                <h4>{isEn ? 'Hello I ' : 'Привіт я '}<span>{isEn ? 'Adatto!' : 'Адатто!'}</span></h4>
                <p>{isEn ? 'I' : 'Я'}<span> Frontend Developer. </span>{isEn ? 'I create high-quality and user-friendly landing pages.' : 'Я створюю якісні та комфортні лендінг сайти.'}</p>
                <div className="button hello-button">{isEn ? 'My stack' : 'Мій стек'}</div>
            </div>
        </div>
    )
}