import React, { useEffect, useState } from "react";
import { Unit } from "../../../core/classes/Unit";
import CurrentUnit from "../CurrentUnit/CurrentUnit";
import Team from "../Team/Team";
import { v4 as uuidv4 } from "uuid";
import GameInfo from "../GameInfo/GameInfo";
import { getReverseTeam } from "./getReverseTeam";

import "./battlefield.css";

interface IBattlefield {
  firstTeam: Unit[];
  secondTeam: Unit[];
}

const Battlefield: React.FC<IBattlefield> = ({ firstTeam, secondTeam }) => {
  const [unitIndex, setUnitIndex] = useState<number>(0);
  const [round, setRound] = useState<number>(1);

  const allUnits =
    unitIndex < firstTeam.length
      ? firstTeam.concat(secondTeam)
      : secondTeam.concat(firstTeam);

  const halfUnitsLength = allUnits.length / 2;

  const currentTeam = unitIndex < halfUnitsLength ? firstTeam : secondTeam;
  const enemyTeam = unitIndex < halfUnitsLength ? secondTeam : firstTeam;
  const teams = [currentTeam, getReverseTeam(enemyTeam)];

  const currentUnit =
    unitIndex < halfUnitsLength
      ? allUnits[unitIndex]
      : allUnits[unitIndex - halfUnitsLength];

  useEffect(() => {
    if (currentUnit.isParalyze || currentUnit.healthPoint === 0) {
      changeCurrentUnit();
    }
  }, [currentUnit]);

  useEffect(() => {
    enemyTeam.forEach((unit) => {
      unit.isParalyze = false;
    });
  }, [currentTeam[0].id]);

  const changeCurrentUnit = () => {
    if (unitIndex > allUnits.length - 2) {
      setRound((prevState) => (prevState = prevState + 1));
    }
    setUnitIndex(
      (prevState) =>
        (prevState = prevState > allUnits.length - 2 ? 0 : prevState + 1)
    );
  };

  return (
    <div className="battlefield">
      <GameInfo round={round} />
      <div className="teamContainer">
        {teams.map((team) => {
          return (
            <Team
              key={uuidv4()}
              team={team}
              changeCurrentUnit={changeCurrentUnit}
              currentUnit={currentUnit}
              allUnits={allUnits}
            />
          );
        })}
      </div>
      <CurrentUnit
        currentUnit={currentUnit}
        changeCurrentUnit={changeCurrentUnit}
      />
    </div>
  );
};

export default Battlefield;
