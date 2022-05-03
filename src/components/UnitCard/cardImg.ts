import Archimage from "./../../img/Archimage.jpg";
import Bandit from "./../../img/Bandit.jpg";
import Centaur from "./../../img/Centaur.jpg";
import ElfArcher from "./../../img/ElfArcher.jpg";
import Skeleton from "./../../img/Skeleton.jpg";
import SkeletonMage from "./../../img/SkeletonMage.jpg";
import Bishop from "./../../img/Bishop.jpg";
import Monk from "./../../img/Monk.jpg";
import Sirena from "./../../img/Sirena.jpg";

export const cardImg = (cardName: string) => {
  switch (cardName) {
    case "Archimage":
      return Archimage;
    case "Bandit":
      return Bandit;
    case "Centaur":
      return Centaur;
    case "Elf Archer":
      return ElfArcher;
    case "Skeleton":
      return Skeleton;
    case "Skeleton Mage":
      return SkeletonMage;
    case "Bishop":
      return Bishop;
    case "Monk":
      return Monk;
    case "Sirena":
      return Sirena;
    default:
      return undefined;
  }
};
