import './Content.css'
import HelloBlock from './ContentComponents/HelloBlock/HelloBlock'
import AboutBlock from './ContentComponents/AboutBlock/AboutBlock'
import StackBlock from './ContentComponents/StackBlock/StackBlock'
import AdvantageBlock from './ContentComponents/AdvantageBlock/AdvantageBlock'
import ReviewsBlock from './ContentComponents/ReviewsBlock/ReviewsBlock'

export default function Content(props){
    const {isEn} = props;
    return (
        <main className="content">
            <div className="about-grandparent">
                <HelloBlock isEn={isEn}></HelloBlock>
                <AboutBlock isEn={isEn}></AboutBlock>
            </div>
                <StackBlock isEn={isEn}></StackBlock>
                <AdvantageBlock isEn={isEn}></AdvantageBlock>
                <ReviewsBlock isEn={isEn}></ReviewsBlock>
        </main>
    )
}