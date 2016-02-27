import {IItem} from '../char'

export interface IAchievementsData {
  achievements: IAchievementCategory[],
}

interface IAchievementCategory{
  achievements: IAchievementsCategoryData[],
  categories: ICategories[],
  id: number,
  name: string,
}


interface IAchievementsCategoryData {
  accountWide: boolean,
  criteria: ICriteria,
  description: string,
  fationId: number,
  icon: string,
  id: number,
  points: number,
  rewardItem: IItem,
  title:string,
  timestamp: number[]
}

interface ICriteria {
  description: string,
  id: number,
  max: number,
  orderIndex: number,

}

interface ICategories {
  achievements: IAchievementsCategoryData[],
  id: number,
  name:string,
}
