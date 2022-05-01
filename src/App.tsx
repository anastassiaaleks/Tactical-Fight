import React from "react";
import { createTeams } from "../core/team/createTeams";

const App = () => {
  const { firstTeam, secondTeam } = createTeams();
  const allUnits = firstTeam.concat(secondTeam);

  return <div></div>;
};

export default App;
