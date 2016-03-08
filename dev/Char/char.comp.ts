import {Component, Inject, Injectable, forwardRef} from 'angular2/core';
import {ApiComp} from '../wowApi.service';
import {AchievementsComp} from './Achiev/achievements.comp';
import {IChar, IClassesData, IRacesData, IEquipment, IItem} from './char';
import {IAchievementsData} from './Achiev/achiev';
import {EquipmentComp} from './Equipment/equipment.comp';

@Injectable()

@Component({
    selector: 'char',
    templateUrl: 'app/Templates/Char/char.html',
    directives: [AchievementsComp, EquipmentComp],
    providers: [ApiComp, AchievementsComp, EquipmentComp],
})



export class CharComp {
  public charName: string = 'Kiluk';
  public realmName: string = 'Mannoroth';
  public classesData: IClassesData;
  public raceData: IRacesData;
  public hidden;
  public visible = true;
  public char: IChar;
  public achiveData: IAchievementsData;

  public showEquipment: boolean;
  public showPvPAchievements: boolean;


  constructor(public api: ApiComp, public achiev:AchievementsComp, public equip:EquipmentComp) {
    this.getCharClassData();
    this.getRaceData();
    // this.char.thumbnail = '';
  }
  getCharClassData() {
    // var charClass = this.char.class;
    this.api.getPlayerClassData().
    subscribe(
      data => this.classesData = data,
      error => console.log(error)
    )
  }

  getRaceData() {
    this.api.getRaceData()
    .subscribe(
      data => this.raceData = data,
      error => console.log(error)
      )
  }


  getChar() {
    this.api.getChar(this.realmName, this.charName, 'guild')
      .subscribe(
      data => this.char = data,
      error => console.log(error),
      () => this.setCharData()
      )
  }



  public charPvPAchiev;
  public charEquipment: IItem[];
  setCharData() {
    var classesData = this.classesData;
    var charClass = this.char.class;


    var charRace = this.char.race;
    for (var i = 0; i < classesData.classes.length; ++i) {
      if (classesData.classes[i].id === charClass) {
        console.log(classesData.classes[i]);
        this.char.playerClass = (classesData.classes[i])
      }
    }

    var racesData = this.raceData;
    for (var i = 0; i < racesData.races.length; ++i) {
      if (racesData.races[i].id === charRace){
        this.char.playerRace = racesData.races[i];
      }
    }

    this.char.thumbnail = "http://eu.battle.net/static-render/eu/" + this.char.thumbnail;
    this.charPvPAchiev = this.achiev.getCharAchievements(this.char);
    this.charEquipment = this.equip.setCharEquip(this.char);

    console.log(this.charEquipment[0].icon);
  }

  filter(e) {
    var id: string = e.target.id;
    if (id === 'equip'){
      this.showEquipment = true;
    }
    else{
      this.showEquipment = false;
    }
    if (id === 'pvp-achiev'){
      this.showPvPAchievements = true;
    }
    else{
      this.showPvPAchievements = false;
    }

  }
}
