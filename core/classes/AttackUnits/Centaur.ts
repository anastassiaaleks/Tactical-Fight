import { AttackUnit } from "./AttackUnit";
import { UnDefended } from "../../behavior/defend/UnDefended";
import { Attack } from "../../behavior/action/Attack";
import { Melee } from "../../behavior/type/melee";
import { Unit } from "../Unit";
import { v4 as uuidv4 } from "uuid";

export class Centaur extends AttackUnit {
  constructor() {
    super(
      uuidv4(),
      "Centaur",
      150,
      150,
      50,
      false,
      50,
      new UnDefended(),
      new Attack(),
      new Melee()
    );
  }
  doAction(allUnits: Unit[], currentUnit: string, targetId?: string): Unit[] {
    return this.attackEnemy(allUnits, currentUnit, targetId);
  }
}
