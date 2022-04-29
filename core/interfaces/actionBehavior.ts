import { Unit } from "../classes/Unit";

export interface IActionBehavior {
  makeMove(target: Unit[], value?: number): Unit[];
}
