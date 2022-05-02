import React from "react";
import { Unit } from "../../../core/classes/Unit";

interface IUnitCard {
  unit: Unit;
}

const UnitCard: React.FC<IUnitCard> = ({ unit }) => {
  return (
    <div>
      <div>{unit.name}</div>
    </div>
  );
};

export default UnitCard;
