import { AttackUnit } from "./AttackUnit";
import { UnDefended } from "../../behavior/defend/UnDefended";
import { Attack } from "../../behavior/action/Attack";
import { Range } from "../../behavior/type/range";

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
}
