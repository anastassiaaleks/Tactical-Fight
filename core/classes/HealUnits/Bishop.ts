import { UnDefended } from "../../behavior/defend/UnDefended";
import { HealUnit } from "./HealUnit";
import { Heal } from "../../behavior/action/Heal";
import { HealerMass } from "../../behavior/type/healerMass";

export class Bishop extends HealUnit {
  constructor() {
    super(
      "Bishop",
      130,
      130,
      20,
      false,
      25,
      new UnDefended(),
      new Heal(),
      new HealerMass()
    );
  }
}
