import { IDefendBehavior } from "../../interfaces/defendBehavior";
import { IActionBehavior } from "../../interfaces/actionBehavior";
import { ITypeBehavior } from "../../interfaces/typeBehavior";
import { Unit } from "../Unit";

export abstract class ParalyzeUnit extends Unit {
  private _action: IActionBehavior;
  private _targets: ITypeBehavior;

  constructor(
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
      _name,
      _healthPoint,
      _fullHealthPoint,
      _initiative,
      _isParalyzed,
      _defended
    );
    this._action = _action;
    this._targets = _targets;
  }
  paralyzeEnemy(allUnits: Unit[], currentUnit: Unit[]) {
    const enemies = this._targets.getTargets(allUnits, currentUnit);
    this._action.makeMove(enemies);

    return enemies;
  }
}
