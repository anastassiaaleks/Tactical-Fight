import { Paralyze } from "../../behavior/action/Paralyze";
import { UnDefended } from "../../behavior/defend/UnDefended";
import { Paralyzer } from "../../behavior/unitTypes/paralyzer";
import { Unit } from "../Unit";
import { ParalyzeUnit } from "./ParalyzeUnit";
import { v4 as uuidv4 } from "uuid";

export class Sirena extends ParalyzeUnit {
  constructor() {
    super(
      uuidv4(),
      "Sirena",
      80,
      80,
      20,
      false,
      new UnDefended(),
      new Paralyze(),
      new Paralyzer()
    );
  }
  doAction(allUnits: Unit[], currentUnit: string, targetId: string): Unit[] {
    return this.paralyzeEnemy(allUnits, currentUnit, targetId);
  }
}
