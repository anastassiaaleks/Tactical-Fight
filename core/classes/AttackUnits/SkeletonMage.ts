import { AttackUnit } from "./AttackUnit";
import { UnDefended } from "../../behavior/defend/UnDefended";
import { Attack } from "../../behavior/action/Attack";
import { Mage } from "../../behavior/type/mage";
import { Unit } from "../Unit";

export class SkeletonMage extends AttackUnit {
  constructor() {
    super(
      "Skeleton mage",
      50,
      50,
      40,
      false,
      20,
      new UnDefended(),
      new Attack(),
      new Mage()
    );
  }
  doAction(allUnits: Unit[], currentUnit: Unit[]): Unit[] {
    return this.attackEnemy(allUnits, currentUnit);
  }
}
