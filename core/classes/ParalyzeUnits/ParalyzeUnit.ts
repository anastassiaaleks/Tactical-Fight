import { IDefendBehavior } from "../../interfaces/defendBehavior";
import { IActionBehavior } from "../../interfaces/actionBehavior";
import { Unit } from "../Unit";

export abstract class ParalyzeUnit extends Unit {
  private _action: IActionBehavior;

  constructor(
    _name: string,
    _healthPoint: number,
    _fullHealthPoint: number,
    _initiative: number,
    _isParalyzed: boolean,
    _defended: IDefendBehavior,
    _action: IActionBehavior
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
  }
  paralyzeEnemy(enemies: Unit[]) {
    this._action.makeMove(enemies);
  }
}
