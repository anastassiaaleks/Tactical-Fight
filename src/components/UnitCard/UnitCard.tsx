import React from "react";
import { Unit } from "../../../core/classes/Unit";
import { cardImg } from "./cardImg";

import "./unitCard.css";

interface IUnitCard {
  unit: Unit;
}

const UnitCard: React.FC<IUnitCard> = ({ unit }) => {
  return (
    <div className="card">
      <img src={cardImg(unit.name)} />
      {/* <div>{unit.name}</div> */}
    </div>
  );
};

export default UnitCard;
