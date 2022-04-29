import { IDefendBehavior } from "../../interfaces/defendBehavior";

export class Defended implements IDefendBehavior {
  defense(damage: number) {
    return Math.floor(damage / 2);
  }
}
