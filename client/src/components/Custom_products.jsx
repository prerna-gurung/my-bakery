import { useNavigate } from "react-router-dom";

function Custom_products(props) {
   const navigate = useNavigate();

   function handleClick(event) {
     const name = event.currentTarget.dataset.name;
     const value = event.currentTarget.dataset.value;
     console.log("Name:", name);
     console.log("Value:", value);

     navigate(`/${name}`, { state: { name, value } });
   }
  return (
    <div>
      <div
        className="cust_prod"
        onClick={handleClick}
        data-name={props.alt}
        data-value={props.img}
      >
        <img src={props.img} alt={props.alt} className="cust-cake-img" />
      </div>
      <p className="cust-cake-title">{props.alt}</p>
    </div>
  );
}

export default Custom_products;
