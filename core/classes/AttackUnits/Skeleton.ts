import { AttackUnit } from "./AttackUnit";
import { UnDefended } from "../../behavior/defend/UnDefended";
import { Attack } from "../../behavior/action/Attack";
import { Melee } from "../../behavior/type/melee";
import { Unit } from "../Unit";

export class Skeleton extends AttackUnit {
  constructor() {
    super(
      "Skeleton",
      100,
      100,
      50,
      false,
      25,
      new UnDefended(),
      new Attack(),
      new Melee()
    );
  }
  doAction(allUnits: Unit[], currentUnit: Unit[]): Unit[] {
    return this.attackEnemy(allUnits, currentUnit);
  }
}
