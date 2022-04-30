import { AttackUnit } from "./AttackUnit";
import { UnDefended } from "../../behavior/defend/UnDefended";
import { Attack } from "../../behavior/action/Attack";
import { Range } from "../../behavior/type/range";

export class Bandit extends AttackUnit {
  constructor() {
    super(
      "Bandit",
      100,
      100,
      50,
      false,
      25,
      new UnDefended(),
      new Attack(),
      new Range()
    );
  }
}
