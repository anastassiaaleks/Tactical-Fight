import React from "react";
import { Defended } from "../../../core/behavior/defend/Defended";
import { Unit } from "../../../core/classes/Unit";
import { hpIndicator } from "../../functions/hpIndicator";
import { cardImg } from "./cardImg";
import Poison from "./../../img/poison.png";
import Shield from "../../img/shield.jpg";
import IsDead from "../../img/isDead.png";
import "./unitImg.css";

interface IUnitImg {
  unit: Unit;
}

const UnitImg: React.FC<IUnitImg> = ({ unit }) => {
  const hpIndicatorHeight = hpIndicator(unit);

  return (
    <div className="imgContainer">
      {unit.defense instanceof Defended && unit.healthPoint !== 0 ? (
        <img className="shieldImg" src={Shield} />
      ) : null}
      {unit.isParalyze && unit.healthPoint !== 0 ? (
        <img className="poisonImg" src={Poison} />
      ) : null}
      {unit.healthPoint === 0 ? <img className="deadImg" src={IsDead} /> : null}
      <img className="unitImg" src={cardImg(unit.name)} />
      <div
        className="hpIndicator"
        style={{ height: hpIndicatorHeight + `%` }}
      ></div>
    </div>
  );
};

export default UnitImg;
