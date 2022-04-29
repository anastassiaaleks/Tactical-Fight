import { UnDefended } from "../../behavior/defend/UnDefended";
import { HealUnit } from "./HealUnit";
import { Heal } from "../../behavior/action/Heal";

export class Bishop extends HealUnit {
  constructor() {
    super("Bishop", 130, 130, 20, false, 25, new UnDefended(), new Heal());
  }
}
