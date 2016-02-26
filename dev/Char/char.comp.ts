import {Component, Inject, Injectable, forwardRef} from 'angular2/core';
import {ApiComp} from '../wowApi.service';
import {AchievementsComp} from './achievements.comp';
import {CharService} from './char.service';
import {IChar} from './char';

@Injectable()

@Component({
    selector: 'char',
    templateUrl: 'app/Char/char.html',
    directives: [AchievementsComp],
    providers: [ApiComp, CharService, AchievementsComp],
})



export class CharComp {
  public charName: string = 'Kiluk';
  public realmName: string = 'Mannoroth';
  public classes;
  public hidden;
  public visible = true;
  public char: IChar = this.charService.charData;
  public achiv: AchievmentsData;

  constructor(public api: ApiComp, public charService: CharService, public achiev:AchievementsComp) {
    this.getAchievementList();
    // this.char.thumbnail = '';
  }
  // getCharClass() {
  //   var char = this.char;
  //   var classes = [];

  //   for (var i = 0; i < 11; ++i) {
  //   classes.push(this.classes[i]);
  //     console.log(char)
  //     if (classes[i].id === char.class)
  //       this.char.className = classes[i].name;
  //   }

  // }
  getChar() {
    this.api.getChar(this.realmName, this.charName, 'guild')
      .subscribe(
      data => this.char = data,
      error => console.log(error),
      () => this.getCharPvPAchiev()
      )
  }
  filter(e) {
    if (e.target.style.background === 'rgb(22, 29, 117)' || !e.target.style.background) {
      e.target.style.background = '#696FF1';
    }
    else{
      e.target.style.background = '#161D75';
    }
  }

  getAchievementList() {
      var achiveList = [];

      this.api.getAchievementList().subscribe(
      data => this.achiv = data,
      err => console.log(err)
      )
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

  public charPvPAchiev;
  getCharPvPAchiev() {
    this.charPvPAchiev = [];
      var charAchiev = this.char.achievements.achievementsCompleted;
      var charAchievTimestamp = this.char.achievements.achievementsCompletedTimestamp;
      this.char.thumbnail = "http://eu.battle.net/static-render/eu/" + this.char.thumbnail;

      var pvpAchievArena = this.achiv.achievements[3].categories[15].achievements;
      var pvpAchievRBG = this.achiv.achievements[3].categories[14].achievements;
      for (var i = 0; i < charAchiev.length; ++i) {
      for (var j = 0; j < pvpAchievArena.length; ++j) {
        if (charAchiev[i] === pvpAchievArena[j].id) {
          pvpAchievArena[j].timestamp = this.setTimeStamp(charAchievTimestamp[charAchiev[i]] / 1000);
          this.charPvPAchiev.push(pvpAchievArena[j]);
          break;
        }
      }
      }
      for (var i = 0; i < charAchiev.length; ++i) {
      for (var j = 0; j < pvpAchievRBG.length; ++j) {
        if (charAchiev[i] === pvpAchievRBG[j].id) {
          this.charPvPAchiev.push(pvpAchievRBG[j]);
          break;
        }
      }
      }

      // for (var i = 0; i < this.charPvPAchiev.length; ++i) {
      //   this.charPvPAchiev[i].timestamp = this.setTimeStamp(charAchievTimestamp[this.charPvPAchiev[i].id] / 1000);
      // }
  }

  getAchiev() {

      //mit achievement id array
      var completed_achievement;
      var len = this.achiv.achievements.length;
      var len2 = this.achiv.achievements[0].achievements.length;
      for (var i = 0; i < len; i++) {
      for (var j = 0; j < len2; ++j) {
        if (this.achiv.achievements[i].achievements[j].id && this.achiv.achievements[i].achievements[j].id === 9)
          break;
      }
      }
  }

  // getItem(item) {
  //   var charItems = this.char.items;
  //   console.log(this.char);
  //   this.api.getItem(charItems.item.id).subscribe(
  //       data=> console.log(data)
  //   )

  // }
  // getCharGuild() {
  //   this.api.
  // }

  // http:// eu.battle.net/static-render/nefarian/ + <the string you got from API as thumbnail>
}

interface Char {
  achievements: CharAchievements,
  thumbnail: string,

}

interface CharAchievements {
  achievementsCompleted: number[],
  achievementsCompletedTimestamp: number[],

}

interface AchievmentsData {
  achievements: achievments[],

}
interface achievments {
  achievements: number[]
}
