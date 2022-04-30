import { AttackUnit } from "./AttackUnit";
import { UnDefended } from "../../behavior/defend/UnDefended";
import { Attack } from "../../behavior/action/Attack";
import { Range } from "../../behavior/type/range";
import { Unit } from "../Unit";
import { v4 as uuidv4 } from "uuid";

export class ElfArcher extends AttackUnit {
  constructor() {
    super(
      uuidv4(),
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
  doAction(allUnits: Unit[], currentUnit: string): Unit[] {
    return this.attackEnemy(allUnits, currentUnit);
  }
}
