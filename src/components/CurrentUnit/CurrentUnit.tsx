import React from "react";
import { Defended } from "../../../core/behavior/defend/Defended";
import { UnDefended } from "../../../core/behavior/defend/UnDefended";
import { Unit } from "../../../core/classes/Unit";
import { hpIndicator } from "../../functions/hpIndicator";
import { cardImg } from "../UnitCard/cardImg";
import "./currentUnit.css";

interface ICurrentUnit {
  currentUnit: Unit;
  changeCurrentUnit: () => void;
}

const CurrentUnit: React.FC<ICurrentUnit> = ({
  currentUnit,
  changeCurrentUnit,
}) => {
  if (currentUnit.defense instanceof Defended) {
    currentUnit.defense = new UnDefended();
  }

  const defendItself = () => {
    currentUnit.defense = new Defended();
    changeCurrentUnit();
  };

  const hpIndicatorWidth = 100 - hpIndicator(currentUnit);

  return (
    <div className="currentUnit">
      <div className="currentImgContainer">
        <img className="currentImg" src={cardImg(currentUnit.name)} />
      </div>
      <div className="hpDiv">
        <div
          className="currentHp"
          style={{ width: hpIndicatorWidth + `%` }}
        ></div>
        <p>
          {currentUnit.healthPoint} / {currentUnit.fullHealthPoint}
        </p>
      </div>
      <p>{currentUnit.name}</p>
      <button className="defendBtn" onClick={defendItself}>
        Defend itself
      </button>
    </div>
  );
};

export default CurrentUnit;
