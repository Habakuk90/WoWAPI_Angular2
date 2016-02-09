import {Component} from 'angular2/core';
import {ApiComp} from '../wowApi.service'
interface IChar {
  battlegroup: string,
  class: number,
  level: number,
  faction: number,
  name: string,
  realm: string,
  thumbnail: string,
  className: string
}

@Component({
    selector: 'char',
    templateUrl: 'app/Char/char.html',
    directives: [],
    providers: [ApiComp],

})



export class CharComp {
  constructor(public api: ApiComp) {
    this.getClasses();
  }
  public charName: string = 'Kiluk';
  public realmName: string = 'Mannoroth';
  public classes;
  public char: IChar = {

  };



  getCharClass() {
    var char = this.char;
    var classes = [];

    for (var i = 0; i < 11; ++i) {
    classes.push(this.classes[i]);
      console.log(char)
      if (classes[i].id === char.class)
        this.char.className = classes[i].name;
    }

  }


  getClasses() {
    this.api.getClasses().subscribe(
      data => this.classes = (data.classes),
      err => console.log(err)
    )
  }
  getChar() {
    this.api.getChar(this.realmName, this.charName)
      .subscribe(
        data => this.char = data,
        error => console.log(error),
        () => this.getCharClass()
      )
  }

  setValues() {

  }

  // http:// eu.battle.net/static-render/nefarian/ + <the string you got from API as thumbnail>
}
