import { UnDefended } from "../../behavior/defend/UnDefended";
import { HealUnit } from "./HealUnit";
import { Heal } from "../../behavior/action/Heal";
import { HealerMass } from "../../behavior/unitTypes/healerMass";
import { Unit } from "../Unit";
import { v4 as uuidv4 } from "uuid";

export class Bishop extends HealUnit {
  constructor() {
    super(
      uuidv4(),
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
  doAction(allUnits: Unit[], currentUnit: string): Unit[] {
    return this.healAllies(allUnits, currentUnit);
  }
}
