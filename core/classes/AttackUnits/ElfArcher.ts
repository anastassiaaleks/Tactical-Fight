import { AttackUnit } from "./AttackUnit";
import { UnDefended } from "../../behavior/defend/UnDefended";
import { Attack } from "../../behavior/action/Attack";
import { Range } from "../../behavior/type/range";
import { Unit } from "../Unit";

export class ElfArcher extends AttackUnit {
  constructor() {
    super(
      "Elf Archer",
      90,
      90,
      60,
      false,
      45,
      new UnDefended(),
      new Attack(),
      new Range()
    );
  }
  doAction(allUnits: Unit[], currentUnit: Unit[]): Unit[] {
    return this.attackEnemy(allUnits, currentUnit);
  }
}
