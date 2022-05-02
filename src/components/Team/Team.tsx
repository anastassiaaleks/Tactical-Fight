import React from "react";
import { Unit } from "../../../core/classes/Unit";
import UnitCard from "../UnitCard/UnitCard";

interface ITeam {
  team: Unit[];
  changeCurrentUnit: () => void;
}

const Team: React.FC<ITeam> = ({ team, changeCurrentUnit }) => {
  return (
    <div>
      <button onClick={changeCurrentUnit}>click</button>
      {team.map((unit) => {
        return <UnitCard key={unit.id} unit={unit} />;
      })}
    </div>
  );
};

export default Team;
