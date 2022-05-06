import React from "react";

interface IGameInfo {
  round: number;
}

const GameInfo: React.FC<IGameInfo> = ({ round }) => {
  return (
    <div>
      <p>GameInfo</p>
      <p>Round: {round}</p>
    </div>
  );
};

export default GameInfo;
