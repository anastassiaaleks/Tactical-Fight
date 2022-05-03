import React from "react";
import { Unit } from "../../../core/classes/Unit";
import UnitCard from "../UnitCard/UnitCard";

import "./team.css";

interface ITeam {
  team: Unit[];
  changeCurrentUnit: () => void;
}

const Team: React.FC<ITeam> = ({ team, changeCurrentUnit }) => {
  return (
    <div className="team">
      <button onClick={changeCurrentUnit}>click</button>
      <div className="cardContainer">
        {team.map((unit) => {
          return <UnitCard key={unit.id} unit={unit} />;
        })}
      </div>
    </div>
  );
};

export default Team;
