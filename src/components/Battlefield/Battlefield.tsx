import React, { useState } from "react";
import { Unit } from "../../../core/classes/Unit";
import CurrentTeam from "../CurrentTeam/CurrentTeam";
import Team from "../Team/Team";
import { v4 as uuidv4 } from "uuid";

interface IBattlefield {
  firstTeam: Unit[];
  secondTeam: Unit[];
}

const Battlefield: React.FC<IBattlefield> = ({ firstTeam, secondTeam }) => {
  const [unitIndex, setUnitIndex] = useState<number>(0);

  const allUnits =
    unitIndex < firstTeam.length
      ? firstTeam.concat(secondTeam)
      : secondTeam.concat(firstTeam);

  const halfUnitsLength = allUnits.length / 2;

  const currentTeam = unitIndex < halfUnitsLength ? firstTeam : secondTeam;
  const enemyTeam = unitIndex < halfUnitsLength ? secondTeam : firstTeam;
  const teams = [currentTeam, enemyTeam];

  const currentUnit =
    unitIndex < halfUnitsLength
      ? allUnits[unitIndex]
      : allUnits[unitIndex - halfUnitsLength];

  const changeCurrentUnit = () => {
    setUnitIndex(
      (prevState) =>
        (prevState = prevState > allUnits.length - 1 ? 0 : prevState + 1)
    );
  };

  return (
    <div>
      {teams.map((team) => {
        return (
          <Team
            key={uuidv4()}
            team={team}
            changeCurrentUnit={changeCurrentUnit}
          />
        );
      })}
      <CurrentTeam currentTeam={currentTeam} currentUnit={currentUnit} />
    </div>
  );
};

export default Battlefield;
