import Item from "./Item.jsx";
import chocolate_bar from "../assets/images/other_products/chocolate_bar.jpg";
import donut from "../assets/images/other_products/donut.jpg";
import icecream from "../assets/images/other_products/icecream.jpg";
import gift from "../assets/images/other_products/gift.jpg";
import roses from "../assets/images/other_products/rose.jpg";
import macaron from "../assets/images/other_products/macaron.jpg";
import cookies from "../assets/images/other_products/cookies.jpg";
import candles from "../assets/images/other_products/candles.jpg";
import brownie from "../assets/images/other_products/brownie.jpg";
import bread from "../assets/images/other_products/bread.jpg";

function Other() {
    const cakes = [
        { image: icecream, title: "Ice Cream" },
        { image: donut, title: "Donuts" },
        { image: chocolate_bar, title: "Chocolate" },
        { image: gift, title: "Gift Boxes" },
        { image: cookies, title: "Cookies and biscuits" },
        { image: macaron, title: "Macarons" },
        { image: brownie, title: "Brownie" },
        { image: bread, title: "Breads" },
        { image: candles, title: "Candles" },
        { image: roses, title: "Flowers" }
       
    ];
    return (
        <section className="component">
        <h1 id="other-items">Other Than Cakes</h1>
        <div className="other">
            {cakes.map((cake, index) => (
                <Item key={index} img={cake.image} alt={cake.title} />
            ))}
        </div>
        </section>
    )
}

export default Other;