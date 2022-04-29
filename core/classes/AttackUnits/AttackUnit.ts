import { IActionBehavior } from "../../interfaces/actionBehavior";
import { IDefendBehavior } from "../../interfaces/defendBehavior";
import { Unit } from "../Unit";

export abstract class AttackUnit extends Unit {
  private _damage: number;
  private _action: IActionBehavior;

  constructor(
    _name: string,
    _healthPoint: number,
    _fullHealthPoint: number,
    _initiative: number,
    _isParalyzed: boolean,
    _damage: number,
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
    this._damage = _damage;
    this._action = _action;
  }

  get damage(): number {
    return this._damage;
  }

  set damage(value: number) {
    this._damage = value;
  }

  attackEnemy(enemies: Unit[]) {
    this._action.makeMove(enemies, this._damage);
  }
}
