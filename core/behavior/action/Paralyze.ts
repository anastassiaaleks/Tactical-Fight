import { Unit } from "../../classes/Unit";
import { IActionBehavior } from "../../interfaces/actionBehavior";

export class Paralyze implements IActionBehavior {
  makeMove(enemies: Unit[]) {
    enemies.forEach((enemy) => {
      enemy.isParalyze = true;
    });
    return enemies;
  }
}
