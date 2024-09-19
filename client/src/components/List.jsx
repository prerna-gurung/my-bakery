import Item from "./Item.jsx";
import chocolate_cake from "../assets/images/cakes/chocolate_cake.jpg";
import cupcake from "../assets/images/cakes/cupcake.jpg";
import berries_cake from "../assets/images/cakes/berries_cake.jpg";
import swiss_roll from "../assets/images/cakes/swiss_roll_cake.jpg";
import cheesecake from "../assets/images/cakes/cheesecake.jpg";
import butter_cake from "../assets/images/cakes/butter-cake.jpg";
import velvet_cake from "../assets/images/cakes/velvet_cake.jpg";
import pancake from "../assets/images/cakes/honey_pancake.jpg";
import orange_cake from "../assets/images/cakes/orange-cake.jpg";
import carrot_cake from "../assets/images/cakes/carrot_cake.jpg";


function List() {
   
    const cakes = [
        { image: chocolate_cake, title: "Chocolate Cake" },
        { image: cupcake, title: "Cupcake" },
        { image: berries_cake, title: "Berries Cake" },
        { image: swiss_roll, title: "Swiss Roll Cake" },
        { image: cheesecake, title: "Cheesecake" },
        { image: butter_cake, title: "Butter Cake" },
        { image: velvet_cake, title: "Velvet Cake" },
        { image: pancake, title: "Honey Pancake" },
        { image: orange_cake, title: "Orange Cake" },
        { image: carrot_cake, title: "Carrot Cake" },
    
    ];

    return (
        <section className="component">
        <h1 id="categories">Shop by Categories</h1>
        <div className="shop">
           

            {cakes.map((cake,index) => (
                <Item key={index} img={cake.image} alt={cake.title}/>
            ))}
        </div>
        </section>
    );
}

export default List;
