import './StackBlock.css'
import javascript from '../../../assets/images/javascript.png'
import react from '../../../assets/images/react.png'
import typescript from '../../../assets/images/typescript.png'
import sass from '../../../assets/images/sass.png'
import tailwind from '../../../assets/images/tailwind.png'

export default function StackBlock({isEn}){
    return (
        <div className="stack-block" id="stack">
            <div className="stack-parent">
                <h3 className="header-name">{isEn ? 'My stack' : 'Мій стек'}</h3>
                <div className="stack-lang">
                    <div className="stack-item">
                        <img src={sass} alt="" />
                        <p>Scss</p>
                    </div>
                    <div className="stack-item">
                        <img src={javascript} alt="" />
                        <p>JavaScript</p>
                    </div>
                    <div className="stack-item">
                        <img src={react} alt="" />
                        <p>React</p>
                    </div>
                    <div className="stack-item">
                        <img src={typescript} alt="" />
                        <p>TypeScript</p>
                    </div>
                    <div className="stack-item">
                        <img src={tailwind} alt="" />
                        <p>Tailwindcss</p>
                    </div>
                </div>
            </div>
        </div>
    )
}