import { UnDefended } from "../../behavior/defend/UnDefended";
import { HealUnit } from "./HealUnit";
import { Heal } from "../../behavior/action/Heal";
import { HealerSingle } from "../../behavior/type/healerSingle";
import { Unit } from "../Unit";

export class Monk extends HealUnit {
  constructor() {
    super(
      "Monk",
      90,
      90,
      20,
      false,
      40,
      new UnDefended(),
      new Heal(),
      new HealerSingle()
    );
  }
  doAction(allUnits: Unit[], currentUnit: Unit[]): Unit[] {
    return this.healAllies(allUnits, currentUnit);
  }
}
