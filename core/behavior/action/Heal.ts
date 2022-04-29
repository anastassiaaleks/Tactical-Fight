import { Unit } from "../../classes/Unit";
import { IActionBehavior } from "../../interfaces/actionBehavior";

export class Heal implements IActionBehavior {
  makeMove(allies: Unit[], healValue: number) {
    allies.forEach((ally) => {
      ally.healthPoint =
        ally.healthPoint + healValue > ally.fullHealthPoint
          ? ally.fullHealthPoint
          : ally.healthPoint + healValue;
    });
    return allies;
  }
}
