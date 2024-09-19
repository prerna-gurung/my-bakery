import { useNavigate } from "react-router-dom";

function Item(props) {

  const navigate = useNavigate();

  function handleClick(event) {
    const name = event.currentTarget.dataset.name;
    const value = event.currentTarget.dataset.value;
    console.log("Name:", name);
    console.log("Value:", value);

    
    navigate(`/${name}`,{state:{name,value}});
  }

  return (
    <div
      className="cake-item"
      onClick={handleClick}
      data-name={props.alt}
      data-value={props.img}
    >
      <img src={props.img} alt={props.alt} className="cake-img" />
      <p className="cake-title">{props.alt}</p>
    </div>
  );
}

export default Item;
