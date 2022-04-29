import { Paralyze } from "../../behavior/action/Paralyze";
import { UnDefended } from "../../behavior/defend/UnDefended";
import { ParalyzeUnit } from "./ParalyzeUnit";

export class Sirena extends ParalyzeUnit {
  constructor() {
    super("Serena", 80, 80, 20, false, new UnDefended(), new Paralyze());
  }
}
