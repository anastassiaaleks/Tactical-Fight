import React from "react";
import { Unit } from "../../../core/classes/Unit";
import { cardImg } from "./cardImg";
import { Defended } from "../../../core/behavior/defend/Defended";
import Poison from "../../img/poison.png";
import Shield from "../../img/shield.jpg";
import IsDead from "../../img/isDead.png";

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

  const phIndicatorHeight =
    unit.healthPoint === 0
      ? 100
      : ((unit.fullHealthPoint - unit.healthPoint) / unit.fullHealthPoint) *
        100;

  return (
    <div className={classes} onClick={chooseAction}>
      <div className="imgContainer">
        {unit.defense instanceof Defended && unit.healthPoint !== 0 ? (
          <img className="shieldImg" src={Shield} />
        ) : null}
        {unit.isParalyze && unit.healthPoint !== 0 ? (
          <img className="poisonImg" src={Poison} />
        ) : null}
        {unit.healthPoint === 0 ? (
          <img className="deadImg" src={IsDead} />
        ) : null}
        <img className="unitImg" src={cardImg(unit.name)} />
        <div
          className="hpIndicator"
          style={{ height: phIndicatorHeight + `%` }}
        ></div>
      </div>
      <div>
        {unit.healthPoint} / {unit.fullHealthPoint}
      </div>
    </div>
  );
};

export default UnitCard;
