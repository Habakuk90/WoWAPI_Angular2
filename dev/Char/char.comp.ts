import {Component, Inject, forwardRef} from 'angular2/core';
import {ApiComp} from '../wowApi.service';
import {IChar} from './char';

@Component({
    selector: 'char',
    templateUrl: 'app/Char/char.html',
    directives: [],
    providers: [ApiComp],

})



export class CharComp {
  constructor(public api: ApiComp) {
  }
  public charName: string = 'Kiluk';
  public realmName: string = 'Mannoroth';
  public classes;

  public char = [];
  public achiv = [];
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
        () => this.getAchievementList()
      )

  }
  getAchievementList() {
    console.log();
    var achiveList = [];
    this.api.getAchievementList().subscribe(
      data => this.achiv = data,
      err => console.log(err),
      () => this.getAchiev()
    )
  }



  getAchiev() {

    //mit achievement id array
    var completed_achievement;
    console.log(this.char.achievements.achievementsCompleted);
    var len = this.achiv.achievements.length;
    var len2 = this.achiv.achievements[0].achievements.length;
    for (var i = 0; i < len; i++) {
      for (var j = 0; j < len2; ++j) {
        if (this.achiv.achievements[i].achievements[j].id && this.achiv.achievements[i].achievements[j].id === 9)
          console.log(this.achiv.achievements[i].achievements[j], "true");
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
