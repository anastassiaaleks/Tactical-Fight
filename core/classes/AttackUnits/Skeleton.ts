import { AttackUnit } from "./AttackUnit";
import { UnDefended } from "../../behavior/defend/UnDefended";
import { Attack } from "../../behavior/action/Attack";

export class Skeleton extends AttackUnit {
  constructor() {
    super("Skeleton", 100, 100, 50, false, 25, new UnDefended(), new Attack());
  }
}
