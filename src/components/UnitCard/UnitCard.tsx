import React from "react";
import { Unit } from "../../../core/classes/Unit";
import UnitImg from "../UnitImg/UnitImg";
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
    const targets = currentUnit.doAction(allUnits, currentUnit.id, unit.id);
    targets.length ? changeCurrentUnit() : null;
  };

  const isTarget = () => {
    const availableTargets = currentUnit.targets.getAvailableTargets(
      allUnits,
      currentUnit.id
    );

    for (let i = 0; i < availableTargets.length; i++) {
      if (availableTargets[i].id === unit.id) {
        return true;
      }
    }
    return false;
  };

  const unitBorder =
    unit.id === currentUnit.id
      ? "currentUnitBorder"
      : isTarget() && unit.id !== currentUnit.id
      ? "targetBorder"
      : "defaultBorder";

  const classes = "card " + unitBorder;

  return (
    <div className={classes} onClick={chooseAction}>
      <UnitImg unit={unit} />
      <div>
        {unit.healthPoint} / {unit.fullHealthPoint}
      </div>
    </div>
  );
};

export default UnitCard;
