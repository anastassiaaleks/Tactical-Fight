import { IActionBehavior } from "../../interfaces/actionBehavior";
import { IDefendBehavior } from "../../interfaces/defendBehavior";
import { Unit } from "../Unit";

export abstract class HealUnit extends Unit {
  private _heal: number;
  private _action: IActionBehavior;

  constructor(
    _name: string,
    _healthPoint: number,
    _fullHealthPoint: number,
    _initiative: number,
    _isParalyzed: boolean,
    _heal: number,
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
    this._heal = _heal;
    this._action = _action;
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

  healAllies(allies: Unit[]) {
    this._action.makeMove(allies, this._heal);
    return allies;
  }
}
