import { AttackUnit } from "./AttackUnit";
import { UnDefended } from "../../behavior/defend/UnDefended";
import { Attack } from "../../behavior/action/Attack";
import { Range } from "../../behavior/type/range";
import { Unit } from "../Unit";
import { v4 as uuidv4 } from "uuid";

export class Bandit extends AttackUnit {
  constructor() {
    super(
      uuidv4(),
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
  doAction(allUnits: Unit[], currentUnit: string): Unit[] {
    return this.attackEnemy(allUnits, currentUnit);
  }
}
