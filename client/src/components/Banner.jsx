import layer_cake from "../assets/images/layer-cake.jpg";
import wedding_cake from "../assets/images/wedding_cake.jpg";
import cheese_cake from "../assets/images/cheesecake.jpg"

function Banner() {
    return (
        <div id="carouselExampleIndicators" className="carousel slide banner" data-bs-ride="carousel" data-bs-pause="false">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src={layer_cake} className="d-block w-100" alt="Slide 1"/>
            </div>
            <div className="carousel-item">
                <img src={wedding_cake} className="d-block w-100" alt="Slide 2"/>
            </div>
            <div className="carousel-item">
                <img src={cheese_cake} className="d-block w-100" alt="Slide 3"/>
            </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
    )
}

export default Banner;