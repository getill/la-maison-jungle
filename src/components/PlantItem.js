import React from "react";
import "../styles/PlantItem.css";
import CareScale from "./CareScale";

const PlantItem = ({ name, cover, id, light, water }) => {
  function handleClick(plantName) {
    alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix`);
  }
  return (
    <li key={id} className="lmj-plant-item" onClick={() => handleClick(name)}>
      <img className="lmj-plant-item-cover" src={cover} alt={`${name} cover`} />
      {name}
      <div>
        <CareScale careType="water" scaleValue={water} />
        <CareScale careType="light" scaleValue={light} />
      </div>
    </li>
  );
};

export default PlantItem;
