import { IDefendBehavior } from "../../interfaces/defendBehavior";

export class UnDefended implements IDefendBehavior {
  defense(damage: number) {
    return damage;
  }
}
