import Button from './Button';

function Hero(props){
    const { title, subTitle, classBtn, textBtn } = props;
    return(
        <div className="hero">
            <div className="overlay"></div>
            <div className="content-hero">
                <h1>{title}</h1>
                <h4>{subTitle}</h4>
                <Button classBtn={classBtn} textBtn={textBtn}/>
            </div> 
        </div>
    );
}
export default Hero;


