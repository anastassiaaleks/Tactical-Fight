import { Unit } from "../../../core/classes/Unit";

export const getReverseTeam = (enemyTeam: Unit[]) => {
  let team = [];
  for (let i = enemyTeam.length - 1; i >= 0; i--) {
    team.push(enemyTeam[i]);
  }
  return team;
};
