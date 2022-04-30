import { IActionBehavior } from "../interfaces/actionBehavior";
import { IDefendBehavior } from "../interfaces/defendBehavior";

export abstract class Unit {
  constructor(
    private _name: string,
    private _healthPoint: number,
    private _fullHealthPoint: number,
    private _initiative: number,
    private _isParalyzed: boolean,
    private _defended: IDefendBehavior
  ) {}

  get healthPoint(): number {
    return this._healthPoint;
  }

  set healthPoint(value: number) {
    this._healthPoint = value;
  }

  get fullHealthPoint(): number {
    return this._fullHealthPoint;
  }

  set fullHealthPoint(value: number) {
    this._fullHealthPoint = value;
  }

  get initiative(): number {
    return this._initiative;
  }

  set initiative(value: number) {
    this._initiative = value;
  }

  get isParalyze(): boolean {
    return this._isParalyzed;
  }

  set isParalyze(value: boolean) {
    this._isParalyzed = value;
  }

  get defense() {
    return this._defended;
  }

  set defense(value: IDefendBehavior) {
    this._defended = value;
  }

  takeDamage(damage: number) {
    return this._defended.defense(damage);
  }

  abstract doAction(allUnits: Unit[], currentUnit: Unit[]): Unit[];
}
