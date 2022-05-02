import React from "react";
import { createTeams } from "../core/team/createTeams";
import Battlefield from "./components/Battlefield/Battlefield";

const App = () => {
  const { firstTeam, secondTeam } = createTeams();

  return (
    <div>
      <Battlefield firstTeam={firstTeam} secondTeam={secondTeam} />
    </div>
  );
};

export default App;
