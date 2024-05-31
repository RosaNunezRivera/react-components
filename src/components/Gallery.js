
function Gallery(props) {
    const { title, imagesList} = props;

    return (
        <section className="section-gallery">
            <div className="container">
                <h2>{title}</h2>

                <div className="grid-container">
                     {imagesList.map((image, index) => (
                       <div className="grid-element-container" key={index}>
                            <img src={image.url} alt={image.alt} />
                        </div>
                    ))} 
                </div>
            </div>
        </section> 
    );
}
    
export default Gallery;