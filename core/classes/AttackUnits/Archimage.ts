import { AttackUnit } from "./AttackUnit";
import { UnDefended } from "../../behavior/defend/UnDefended";
import { Attack } from "../../behavior/action/Attack";
import { Mage } from "../../behavior/type/mage";
import { Unit } from "../Unit";

export class Archimage extends AttackUnit {
  constructor() {
    super(
      "Archimage",
      90,
      90,
      40,
      false,
      30,
      new UnDefended(),
      new Attack(),
      new Mage()
    );
  }
  doAction(allUnits: Unit[], currentUnit: Unit[]): Unit[] {
    return this.attackEnemy(allUnits, currentUnit);
  }
}
