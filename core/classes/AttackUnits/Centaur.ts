import { AttackUnit } from "./AttackUnit";
import { UnDefended } from "../../behavior/defend/UnDefended";
import { Attack } from "../../behavior/action/Attack";
import { Melee } from "../../behavior/type/melee";
import { Unit } from "../Unit";

export class Centaur extends AttackUnit {
  constructor() {
    super(
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
  doAction(allUnits: Unit[], currentUnit: Unit[]): Unit[] {
    return this.attackEnemy(allUnits, currentUnit);
  }
}
