import { Unit } from "../../classes/Unit";
import { IActionBehavior } from "../../interfaces/actionBehavior";

export class Attack implements IActionBehavior {
  makeMove(enemies: Unit[], damageValue: number) {
    enemies.forEach((enemy) => {
      const damage = enemy.takeDamage(damageValue);

      enemy.healthPoint =
        enemy.healthPoint - damage > 0 ? enemy.healthPoint - damage : 0;
    });
    return enemies;
  }
}
