import React from "react";
import { createTeams } from "../core/team/createTeams";

const App = () => {
  const { firstTeam, secondTeam } = createTeams();

  console.log(
    firstTeam[0].doAction(firstTeam.concat(secondTeam), firstTeam[0].id)
  );
  // console.log(secondTeam)

  return <div></div>;
};

export default App;
