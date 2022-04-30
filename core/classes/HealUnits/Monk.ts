import { UnDefended } from "../../behavior/defend/UnDefended";
import { HealUnit } from "./HealUnit";
import { Heal } from "../../behavior/action/Heal";
import { HealerSingle } from "../../behavior/type/healerSingle";
import { Unit } from "../Unit";
import { v4 as uuidv4 } from "uuid";

export class Monk extends HealUnit {
  constructor() {
    super(
      uuidv4(),
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
  doAction(allUnits: Unit[], currentUnit: string): Unit[] {
    return this.healAllies(allUnits, currentUnit);
  }
}
