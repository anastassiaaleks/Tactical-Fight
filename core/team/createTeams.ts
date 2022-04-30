import { Unit } from "./../classes/Unit";
import { UnitList } from "./../classes/UnitList";

export const createTeams = () => {
  const unitNumber = 12;

  const firstTeam: Unit[] = [];
  const secondTeam: Unit[] = [];

  for (let i = 0; i < unitNumber; i++) {
    let randomIndex = Math.floor(Math.random() * 8);

    if (i < unitNumber / 2) {
      firstTeam.push(UnitList[randomIndex]);
    } else {
      secondTeam.push(UnitList[randomIndex]);
    }
  }
  return { firstTeam, secondTeam };
};
