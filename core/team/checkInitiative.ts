import { Unit } from "./../classes/Unit";

export const checkInitiative = (team: Unit[]) => {
  const halfTeam = team.length / 2;

  for (let i = 0; i < halfTeam; i++) {
    if (team[i].initiative < team[i + halfTeam].initiative) {
      const temp1 = team[i];
      team[i] = team[i + halfTeam];
      team[i + halfTeam] = temp1;
    }
  }
  return team;
};
