import { IActionBehavior } from "../../interfaces/actionBehavior";
import { IDefendBehavior } from "../../interfaces/defendBehavior";
import { ITypeBehavior } from "../../interfaces/typeBehavior";
import { Unit } from "../Unit";

export abstract class AttackUnit extends Unit {
  private _damage: number;
  private _action: IActionBehavior;
  private _targets: ITypeBehavior;

  constructor(
    _name: string,
    _healthPoint: number,
    _fullHealthPoint: number,
    _initiative: number,
    _isParalyzed: boolean,
    _damage: number,
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
    this._damage = _damage;
    this._action = _action;
    this._targets = _targets;
  }

  get damage(): number {
    return this._damage;
  }

  set damage(value: number) {
    this._damage = value;
  }

  attackEnemy(allUnits: Unit[], currentUnit: Unit[]) {
    const enemies = this._targets.getTargets(allUnits, currentUnit);
    this._action.makeMove(enemies, this._damage);

    return enemies;
  }
}
