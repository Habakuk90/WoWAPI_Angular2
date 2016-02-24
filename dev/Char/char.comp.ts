import {Component, Inject, forwardRef} from 'angular2/core';
import {ApiComp} from '../wowApi.service';

@Component({
    selector: 'char',
    templateUrl: 'app/Char/char.html',
    directives: [],
    providers: [ApiComp],

})



export class CharComp {
  constructor(public api: ApiComp) {
    this.getAchievementList();
  }
  public charName: string = 'Kiluk';
  public realmName: string = 'Mannoroth';
  public classes;
  public hidden;
  public visible = true;
  public char: Char;
  public achiv: AchievmentsData;
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
  getAchievementList() {
    console.log();
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

  public charPvPAchiev = [];
  getCharPvPAchiev() {
    var charAchiev = this.char.achievements.achievementsCompleted;
    var charAchievTimestamp = this.char.achievements.achievementsCompletedTimestamp;
    console.log(charAchiev)
    var pvpAchievArena = this.achiv.achievements[3].categories[15].achievements;
    console.log(charAchievTimestamp);
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
    console.log(this.charPvPAchiev);
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
  filter(e) {
    console.log(e.target.style.background);
    if (e.target.style.background === 'rgb(22, 29, 117)' || !e.target.style.background) {
      e.target.style.background = '#696FF1';
    }
    else{
      e.target.style.background = '#161D75';
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
  achievements:CharAchievements;

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
