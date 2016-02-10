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
        () => this.getItem('mainHand')
      )
  }

  getItem(item) {
    var charItems = this.char.items;
    console.log(charItems);
    this.api.getItem(charItems.item.id).subscribe(
        data=> console.log(data)
    )

  }
  // getCharGuild() {
  //   this.api.
  // }



  // http:// eu.battle.net/static-render/nefarian/ + <the string you got from API as thumbnail>
}
