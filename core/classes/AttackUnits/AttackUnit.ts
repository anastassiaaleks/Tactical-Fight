import { IActionBehavior } from "../../interfaces/actionBehavior";
import { IDefendBehavior } from "../../interfaces/defendBehavior";
import { ITypeBehavior } from "../../interfaces/typeBehavior";
import { Unit } from "../Unit";

export abstract class AttackUnit extends Unit {
  private _damage: number;
  private _action: IActionBehavior;

  constructor(
    _id: string,
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
      _id,
      _name,
      _healthPoint,
      _fullHealthPoint,
      _initiative,
      _isParalyzed,
      _defended,
      _targets
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

  attackEnemy(allUnits: Unit[], currentUnit: string, targetId?: string) {
    const enemies = this.targets.getTargets(allUnits, currentUnit, targetId);
    this._action.makeMove(enemies, this._damage);

    return enemies;
  }
}
