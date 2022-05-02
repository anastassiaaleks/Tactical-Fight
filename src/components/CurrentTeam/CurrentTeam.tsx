import React from "react";
import { Unit } from "../../../core/classes/Unit";

interface ICurrentTeam {
  currentTeam: Unit[];
  currentUnit: Unit;
}

const CurrentTeam: React.FC<ICurrentTeam> = ({ currentTeam, currentUnit }) => {
  return <div>CurrentTeam</div>;
};

export default CurrentTeam;
