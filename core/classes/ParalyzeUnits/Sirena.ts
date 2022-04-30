import { Paralyze } from "../../behavior/action/Paralyze";
import { UnDefended } from "../../behavior/defend/UnDefended";
import { Paralyzer } from "../../behavior/type/paralyzer";
import { Unit } from "../Unit";
import { ParalyzeUnit } from "./ParalyzeUnit";

export class Sirena extends ParalyzeUnit {
  constructor() {
    super(
      "Serena",
      80,
      80,
      20,
      false,
      new UnDefended(),
      new Paralyze(),
      new Paralyzer()
    );
  }
  doAction(allUnits: Unit[], currentUnit: Unit[]): Unit[] {
    return this.paralyzeEnemy(allUnits, currentUnit);
  }
}
