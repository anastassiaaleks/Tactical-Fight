import React from "react";
import { Unit } from "../../../core/classes/Unit";
import { cardImg } from "./cardImg";

interface IUnitCard {
  unit: Unit;
}

const UnitCard: React.FC<IUnitCard> = ({ unit }) => {
  return (
    <div>
      <img src={cardImg(unit.name)} style={{ maxWidth: "100px" }} />
      <div>{unit.name}</div>
    </div>
  );
};

export default UnitCard;
