import React from "react";
import { Unit } from "../../../core/classes/Unit";
import { cardImg } from "./cardImg";

import "./unitCard.css";

interface IUnitCard {
  unit: Unit;
  currentUnit: Unit;
  allUnits: Unit[];
  availableTargets: Unit[];
  changeCurrentUnit: () => void;
}

const UnitCard: React.FC<IUnitCard> = ({
  unit,
  currentUnit,
  allUnits,
  availableTargets,
  changeCurrentUnit,
}) => {
  const chooseAction = () => {
    const targets = currentUnit.doAction(allUnits, currentUnit.id, unit.id);
    targets.length ? changeCurrentUnit() : null;
  };

  const isTarget = () => {
    for (let i = 0; i < availableTargets.length; i++) {
      if (availableTargets[i].id === unit.id) {
        return true;
      }
    }
    return false;
  };

  let unitBorder = "1px lightgray solid";

  if (unit.id === currentUnit.id) {
    unitBorder = "1px red solid";
  }

  if (isTarget() && unit.id !== currentUnit.id) {
    unitBorder = "1px green solid";
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
