import { IActionBehavior } from "../../interfaces/actionBehavior";
import { IDefendBehavior } from "../../interfaces/defendBehavior";
import { ITypeBehavior } from "../../interfaces/typeBehavior";
import { Unit } from "../Unit";

export abstract class HealUnit extends Unit {
  private _heal: number;
  private _action: IActionBehavior;
  private _targets: ITypeBehavior;

  constructor(
    _id: string,
    _name: string,
    _healthPoint: number,
    _fullHealthPoint: number,
    _initiative: number,
    _isParalyzed: boolean,
    _heal: number,
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
      _defended
    );
    this._heal = _heal;
    this._action = _action;
    this._targets = _targets;
  }

  get heal(): number {
    return this._heal;
  }

  set heal(value: number) {
    this._heal = value;
  }

  get action(): IActionBehavior {
    return this._action;
  }

  set action(value: IActionBehavior) {
    this._action = value;
  }

  get targets(): ITypeBehavior {
    return this._targets;
  }

  set targets(value: ITypeBehavior) {
    this._targets = value;
  }

  healAllies(allUnits: Unit[], currentUnit: string, targetId?: string) {
    const allies = this._targets.getTargets(allUnits, currentUnit, targetId);
    this._action.makeMove(allies, this._heal);

    return allies;
  }
}
