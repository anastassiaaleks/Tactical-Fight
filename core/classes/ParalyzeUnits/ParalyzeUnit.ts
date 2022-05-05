import { IDefendBehavior } from "../../interfaces/defendBehavior";
import { IActionBehavior } from "../../interfaces/actionBehavior";
import { ITypeBehavior } from "../../interfaces/typeBehavior";
import { Unit } from "../Unit";

export abstract class ParalyzeUnit extends Unit {
  private _action: IActionBehavior;

  constructor(
    _id: string,
    _name: string,
    _healthPoint: number,
    _fullHealthPoint: number,
    _initiative: number,
    _isParalyzed: boolean,
    _defended: IDefendBehavior,
    _action: IActionBehavior,
    _targets: ITypeBehavior
  ) {
    super(
      _id,
      _name,
      _healthPoint,
      _fullHealthPoint,
      _initiative,
      _isParalyzed,
      _defended,
      _targets
    );
    this._action = _action;
  }

  paralyzeEnemy(allUnits: Unit[], currentUnit: string, targetId: string) {
    const enemies = this.targets.getTargets(allUnits, currentUnit, targetId);
    this._action.makeMove(enemies);

    return enemies;
  }
}
