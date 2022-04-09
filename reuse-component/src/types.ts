export interface IPokemon {
  id: number;
  name: Name;
  type?: (string)[] | null;
  base: Base;
}
interface Name {
  english: string;
  japanese: string;
  chinese: string;
  french: string;
}

interface Base {
  HP: number;
  Attack: number;
  Defense: number;
  "Sp. Attack": number;
  "Sp. Defense": number;
  Speed: number;
}
