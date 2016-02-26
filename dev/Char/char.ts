export interface IChar  {
  achievementPoints: number,
  achievements: Achievements,
  battlegroup: string,
  calcClass: string,
  playerClass: number,
  faction: number,
  gender: number,
  guild: Guild,
  items: Equipment,
  level: number,
  name: string,
  pvp: PvpBracket,
  race: number,
  realm: string,
  thumbnail: string,
  totalHonorableKills: number
}

interface Achievements {
  achievementsCompleted: number [],
  achievementsCompletedTimestamp: number[]
}

interface Guild {
  achievementPoints: number,
  battlegroup: string,
  emblem: GuildEmblem,
  members: number,
  name: string,
  realm: string
}

interface GuildEmblem {
  backgroundColor: string,
  border: number,
  borderColor: string,
  icon: number,
  iconColor: string
}

interface Equipment {
  averageItemLevel: number,
  averageItemLevelEquipped: number,
  back: Item,
  chest: Item,
  feet: Item,
  finger1: Item,
  finger2: Item,
  hands: Item,
  legs: Item,
  mainHand: Item,
  neck: Item,
  shirt: Item,
  shoulder: Item,
  tabard: Item,
  trinket1: Item,
  trinket2: Item,
  waist: Item,
  wrist: Item,
}


interface Item {
  armor: number,
  context:string,
  icon: string,
  id: number,
  itemLevel: number,
  name: string,
  stats: Stats

}

interface Stats {
  amount: number,
  stat: number
}


interface PvpBracket {
  two: BracketDetail,
  three:BracketDetail,
  five: BracketDetail,
  RBG: BracketDetail
}

interface BracketDetail {
  rating: number,
  seasonLost: number,
  seasonPLayed: number,
  seasonWon: number,
  slug: string,
}
