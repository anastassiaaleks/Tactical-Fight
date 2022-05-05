import React from "react";
import { Defended } from "../../../core/behavior/defend/Defended";
import { UnDefended } from "../../../core/behavior/defend/UnDefended";
import { Unit } from "../../../core/classes/Unit";
import { cardImg } from "./../UnitCard/cardImg";
import "./currentTeam.css";

interface ICurrentTeam {
  currentTeam: Unit[];
  currentUnit: Unit;
  changeCurrentUnit: () => void;
}

const CurrentTeam: React.FC<ICurrentTeam> = ({
  currentTeam,
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

  return (
    <div className="currentUnit">
      <img src={cardImg(currentUnit.name)} />
      <p>{currentUnit.name}</p>
      <p>{currentUnit.healthPoint}</p>
      <p>{currentUnit.fullHealthPoint}</p>
      <p>{currentUnit.initiative}</p>
      <button onClick={defendItself}>Defend itself</button>
    </div>
  );
};

export default CurrentTeam;
