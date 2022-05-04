import { AttackUnit } from "./AttackUnit";
import { UnDefended } from "../../behavior/defend/UnDefended";
import { Attack } from "../../behavior/action/Attack";
import { Mage } from "../../behavior/unitTypes/mage";
import { Unit } from "../Unit";
import { v4 as uuidv4 } from "uuid";

export class SkeletonMage extends AttackUnit {
  constructor() {
    super(
      uuidv4(),
      "Skeleton Mage",
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
  doAction(allUnits: Unit[], currentUnit: string): Unit[] {
    return this.attackEnemy(allUnits, currentUnit);
  }
}
