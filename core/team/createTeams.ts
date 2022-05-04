import { Unit } from "./../classes/Unit";
import { UnitFactory } from "../classes/UnitFactory";
import { unitList } from "../classes/UnitFactory";
import { ITeams } from "../interfaces/ITeams";
import { checkInitiative } from "./checkInitiative";

export const createTeams = (): ITeams => {
  const unitNumber = 12;

  let firstTeam: Unit[] = [];
  let secondTeam: Unit[] = [];

  for (let i = 0; i < unitNumber; i++) {
    let randomIndex = Math.floor(Math.random() * 9);
    let createdUnit = UnitFactory.createUnit(unitList[randomIndex]);

    if (i < unitNumber / 2) {
      firstTeam.push(createdUnit);
    } else {
      secondTeam.push(createdUnit);
    }
  }
  firstTeam = checkInitiative(firstTeam);
  secondTeam = checkInitiative(secondTeam);

  return { firstTeam, secondTeam };
};
