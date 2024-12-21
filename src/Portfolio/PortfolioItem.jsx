export default function PortfolioItem(props){
    const {name, children, image, isEn} = props;
    return (
        <div className="portfolio-item">
            <img src={image} alt="" />
            <div className="portfolio-info">
                <h3>{name}</h3>
                <p>{children}</p>
                <a className="button">{isEn ? 'Visit' : 'Відвідати'}</a>
            </div>
        </div>
    )
}