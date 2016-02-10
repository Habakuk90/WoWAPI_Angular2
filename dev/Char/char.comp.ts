import {Component} from 'angular2/core';
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
    console.log(this.char);
    this.api.getAchievementList().subscribe(
        data => this.achiv = data,
        err => console.log(err),
        () => this.getAchiev()
      )
  }

  getAchiev() {
    var completed_achievement;
    var len = this.achiv.achievements.length;
    console.log(this.achiv.achievements.length)
    for (var i = 0; i < len; i++) {
      if (this.achiv.achievements[0].achievements[0].id === 6) {
          completed_achievement = this.achiv.achievements[0].achievements[0];
      }
    }
    console.log(completed_achievement);
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
