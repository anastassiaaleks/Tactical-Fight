import { Unit } from "./Unit";
import { Archimage } from "./AttackUnits/Archimage";
import { Bandit } from "./AttackUnits/Bandit";
import { Centaur } from "./AttackUnits/Centaur";
import { ElfArcher } from "./AttackUnits/ElfArcher";
import { Skeleton } from "./AttackUnits/Skeleton";
import { SkeletonMage } from "./AttackUnits/SkeletonMage";
import { Bishop } from "./HealUnits/Bishop";
import { Monk } from "./HealUnits/Monk";
import { Sirena } from "./ParalyzeUnits/Sirena";

export const unitList = [
  "Skeleton",
  "Skeleton Mage",
  "Centaur",
  "Bandit",
  "Archimage",
  "Elf Archer",
  "Bishop",
  "Monk",
  "Sirena",
];

export class UnitFactory {
  public static createUnit(name: string) {
    switch (name) {
      case "Archimage":
        return new Archimage();
      case "Bandit":
        return new Bandit();
      case "Centaur":
        return new Centaur();
      case "Elf Archer":
        return new ElfArcher();
      case "Skeleton":
        return new Skeleton();
      case "Skeleton Mage":
        return new SkeletonMage();
      case "Bishop":
        return new Bishop();
      case "Monk":
        return new Monk();
      case "Sirena":
        return new Sirena();
      default:
        throw new Error("Unknown name of unit");
    }
  }
}
