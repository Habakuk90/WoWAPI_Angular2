import {Component,Input, Injectable,Inject, forwardRef} from 'angular2/core';
import {ApiComp} from '../../wowApi.service';
import {CharComp} from '../char.comp';
import {IChar} from '../char';
import {IAchievementsData} from './achiev';

@Injectable()

@Component({
    selector: 'achiev-data',
    templateUrl: 'app/Templates/Char/Achiev/achiev.html',
    directives: [],
    providers: [ApiComp],
    inputs: ['achieveData'],
    styleUrls: ['']
})



export class AchievementsComp  {
  constructor(public api: ApiComp) {
    this.getAchievementList();
  }
  public title: string;
  public description: string;
  public timestamp: Date;
  public achievementListData: IAchievementsData;
  public charData;

  getAchievementList() {
    var achiveList = [];

    this.api.getAchievementList().subscribe(
    data => this.achievementListData = data,
      err => console.log(err)
    )
  }

  getCharAchievements(char: IChar) {
    var charAchiev = char.achievements.achievementsCompleted;
    var charAchievTimestamp = char.achievements.achievementsCompletedTimestamp;
    console.log(this.achievementListData)
    var charPvPAchiev = [];

    var pvpAchievArena = this.achievementListData.achievements[3].categories[15].achievements;
    var pvpAchievRBG = this.achievementListData.achievements[3].categories[14].achievements;
    for (var i = 0; i < charAchiev.length; ++i) {
      for (var j = 0; j < pvpAchievArena.length; ++j) {
        if (charAchiev[i] === pvpAchievArena[j].id) {
          pvpAchievArena[j].timestamp = this.setTimeStamp(charAchievTimestamp[charAchiev[i]] / 1000);
          charPvPAchiev.push(pvpAchievArena[j]);
          break;
        }
      }
    }
    for (var i = 0; i < charAchiev.length; ++i) {
      for (var j = 0; j < pvpAchievRBG.length; ++j) {
        if (charAchiev[i] === pvpAchievRBG[j].id) {
          charPvPAchiev.push(pvpAchievRBG[j]);
          break;
        }
      }
    }

    for (var i = 0; i < charPvPAchiev.length; ++i) {
      charPvPAchiev[i].timestamp = this.setTimeStamp(charAchievTimestamp[charPvPAchiev[i].id] / 1000);
    }
    return charPvPAchiev;
  }
  setTimeStamp(timestamp) {
    var time = timestamp,
      date = new Date(timestamp * 1000),
      datevalues = [
        date.getFullYear(),
        date.getMonth() + 1,
        date.getDate(),
      ];
    return datevalues;
  }
  // public achieveData;
   // public char = CharComp.char;
}
