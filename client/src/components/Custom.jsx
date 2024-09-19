import Custom_products from "./Custom_products";
import valentine_cake from "../assets/images/custom_cake/valentine-cake.jpg"
import cartoon_cake from "../assets/images/custom_cake/cartoon_cake.jpg"
import wedding_cake from "../assets/images/custom_cake/wedding-cake.jpg"
import birthday_cake from "../assets/images/custom_cake/birthday_cake.jpg"
function Custom() {
    const custom_cake = [
        { image: valentine_cake, title: "Valentine Cake" },
        { image: cartoon_cake, title: "Cartoon Cake" },
        { image: birthday_cake, title: "Cute Birthday Cake" },
        { image: wedding_cake, title: "Wedding Ceremony Cake" }
    ];
    return (

        <section className="component" id="ocassion_section">
        <h1 id="ocassion">Shop by Ocassion</h1>
        <div className="custom-made">
           

            {custom_cake.map((cake, index) => (
                <Custom_products key={index} img={cake.image} alt={cake.title} />
            ))}
        </div>
      
        </section>
    )
   
}

export default Custom;