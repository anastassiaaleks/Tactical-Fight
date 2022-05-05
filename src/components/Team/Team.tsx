import React from "react";
import { Unit } from "../../../core/classes/Unit";
import UnitCard from "../UnitCard/UnitCard";

import "./team.css";

interface ITeam {
  team: Unit[];
  changeCurrentUnit: () => void;
  currentUnit: Unit;
  allUnits: Unit[];
  availableTargets: Unit[];
}

const Team: React.FC<ITeam> = ({
  team,
  changeCurrentUnit,
  currentUnit,
  allUnits,
  availableTargets,
}) => {
  return (
    <div className="team">
      <div className="cardContainer">
        {team.map((unit) => {
          return (
            <UnitCard
              key={unit.id}
              unit={unit}
              currentUnit={currentUnit}
              allUnits={allUnits}
              availableTargets={availableTargets}
              changeCurrentUnit={changeCurrentUnit}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Team;
