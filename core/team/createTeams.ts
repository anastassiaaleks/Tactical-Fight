import { Unit } from "./../classes/Unit";
import { UnitFactory } from "../classes/UnitFactory";
import { unitList } from "../classes/UnitFactory";
import { ITeams } from "../interfaces/ITeams";

export const createTeams = (): ITeams => {
  const unitNumber = 12;

  const firstTeam: Unit[] = [];
  const secondTeam: Unit[] = [];

  for (let i = 0; i < unitNumber; i++) {
    let randomIndex = Math.floor(Math.random() * 8);
    let createdUnit = UnitFactory.createUnit(unitList[randomIndex]);

    if (i < unitNumber / 2) {
      firstTeam.push(createdUnit);
    } else {
      secondTeam.push(createdUnit);
    }
  }
  return { firstTeam, secondTeam };
};
