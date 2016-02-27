export interface IChar  {
  achievementPoints: number,
  achievements: IAchievements,
  battlegroup: string,
  calcClass: string,
  class: number,
  faction: number,
  gender: number,
  guild: IGuild,
  items: IEquipment,
  level: number,
  name: string,
  pvp: IPvpBracket,
  race: number,
  realm: string,
  thumbnail: string,
  totalHonorableKills: number,
  playerClass: IClassData,
  playerRace: IRaceData
}

interface IAchievements {
  achievementsCompleted: number [],
  achievementsCompletedTimestamp: number[]
}

interface IGuild {
  achievementPoints: number,
  battlegroup: string,
  emblem: IGuildEmblem,
  members: number,
  name: string,
  realm: string
}

interface IGuildEmblem {
  backgroundColor: string,
  border: number,
  borderColor: string,
  icon: number,
  iconColor: string
}

export interface IEquipment {
  averageItemLevel: number,
  averageItemLevelEquipped: number,
  head: IItem,
  back: IItem,
  chest: IItem,
  feet: IItem,
  finger1: IItem,
  finger2: IItem,
  hands: IItem,
  legs: IItem,
  mainHand: IItem,
  neck: IItem,
  shirt: IItem,
  shoulder: IItem,
  tabard: IItem,
  trinket1: IItem,
  trinket2: IItem,
  waist: IItem,
  wrist: IItem,
}


export interface IItem {
  armor: number,
  context:string,
  icon: string,
  id: number,
  itemLevel: number,
  name: string,
  stats: IStats

}

interface IStats {
  amount: number,
  stat: number
}


interface IPvpBracket {
  two: IBracketDetail,
  three:IBracketDetail,
  five: IBracketDetail,
  RBG: IBracketDetail
}

interface IBracketDetail {
  rating: number,
  seasonLost: number,
  seasonPLayed: number,
  seasonWon: number,
  slug: string,
}

export interface IClassesData {
  classes: IClassData[],
}
interface IClassData {
  id: number,
  mask: number,
  powerType: string,
  name: string
}

export interface IRacesData {
  races: IRaceData[],
}

interface IRaceData {
  id: number,
  mask: number,
  name: string,
  side: string
}
