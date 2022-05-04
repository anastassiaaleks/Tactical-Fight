import React from "react";
import { Unit } from "../../../core/classes/Unit";
import { cardImg } from "./cardImg";

import "./unitCard.css";

interface IUnitCard {
  unit: Unit;
  currentUnit: Unit;
  allUnits: Unit[];
  changeCurrentUnit: () => void;
}

const UnitCard: React.FC<IUnitCard> = ({
  unit,
  currentUnit,
  allUnits,
  changeCurrentUnit,
}) => {
  const chooseAction = () => {
    currentUnit.doAction(allUnits, currentUnit.id, unit.id);
    changeCurrentUnit();
  };

  let unitBorder = "1px lightgray solid";
  if (unit.id === currentUnit.id) {
    unitBorder = "1px red solid";
  }

  return (
    <div className="card" onClick={chooseAction} style={{ border: unitBorder }}>
      <img src={cardImg(unit.name)} />
      <div>
        {unit.healthPoint} / {unit.fullHealthPoint}
      </div>
    </div>
  );
};

export default UnitCard;
