import React from "react";
import { Unit } from "../../../core/classes/Unit";
import { cardImg } from "./../UnitCard/cardImg";
import "./currentTeam.css";

interface ICurrentTeam {
  currentTeam: Unit[];
  currentUnit: Unit;
}

const CurrentTeam: React.FC<ICurrentTeam> = ({ currentTeam, currentUnit }) => {
  return (
    <div className="currentUnit">
      <img src={cardImg(currentUnit.name)} />
      <p>{currentUnit.name}</p>
      <p>{currentUnit.healthPoint}</p>
      <p>{currentUnit.fullHealthPoint}</p>
      <p>{currentUnit.initiative}</p>
      <button>Defend itself</button>
    </div>
  );
};

export default CurrentTeam;
