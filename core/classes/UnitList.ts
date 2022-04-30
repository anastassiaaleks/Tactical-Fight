import { Unit } from "./Unit";
import { Archimage } from "../classes/AttackUnits/Archimage";
import { Bandit } from "../classes/AttackUnits/Bandit";
import { Centaur } from "../classes/AttackUnits/Centaur";
import { ElfArcher } from "../classes/AttackUnits/ElfArcher";
import { Skeleton } from "../classes/AttackUnits/Skeleton";
import { SkeletonMage } from "../classes/AttackUnits/SkeletonMage";
import { Bishop } from "../classes/HealUnits/Bishop";
import { Monk } from "../classes/HealUnits/Monk";
import { Sirena } from "../classes/ParalyzeUnits/Sirena";

export const UnitList: Unit[] = [
  new Archimage(),
  new Bandit(),
  new Centaur(),
  new ElfArcher(),
  new Skeleton(),
  new SkeletonMage(),
  new Bishop(),
  new Monk(),
  new Sirena(),
];
