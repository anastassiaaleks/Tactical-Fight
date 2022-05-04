import { AttackUnit } from "./AttackUnit";
import { UnDefended } from "../../behavior/defend/UnDefended";
import { Attack } from "../../behavior/action/Attack";
import { Melee } from "../../behavior/unitTypes/melee";
import { Unit } from "../Unit";
import { v4 as uuidv4 } from "uuid";

export class Skeleton extends AttackUnit {
  constructor() {
    super(
      uuidv4(),
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
  doAction(allUnits: Unit[], currentUnit: string, targetId?: string): Unit[] {
    return this.attackEnemy(allUnits, currentUnit, targetId);
  }
}
