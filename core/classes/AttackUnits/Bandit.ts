import { AttackUnit } from "./AttackUnit";
import { UnDefended } from "../../behavior/defend/UnDefended";
import { Attack } from "../../behavior/action/Attack";
import { Range } from "../../behavior/type/range";
import { Unit } from "../Unit";

export class Bandit extends AttackUnit {
  constructor() {
    super(
      "Bandit",
      100,
      100,
      50,
      false,
      25,
      new UnDefended(),
      new Attack(),
      new Range()
    );
  }
  doAction(allUnits: Unit[], currentUnit: Unit[]): Unit[] {
    return this.attackEnemy(allUnits, currentUnit);
  }
}
