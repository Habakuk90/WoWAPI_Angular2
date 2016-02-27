import {Component, Input, Injectable, Inject, forwardRef} from 'angular2/core';
import {IChar} from '../char';

@Injectable()

@Component({
    selector: 'equip-data',
    templateUrl: 'app/Templates/Char/Equipment/equip.html',
    directives: [],
    providers: [],
    inputs: ['equipItems'],
    styleUrls: ['']
})



export class EquipmentComp {


  setCharEquip(char:IChar) {
    var charEquip=[]
    charEquip.push(char.items.head);
    charEquip.push(char.items.neck);
    charEquip.push(char.items.shoulder);
    charEquip.push(char.items.back);
    charEquip.push(char.items.tabard);
    charEquip.push(char.items.shirt);
    charEquip.push(char.items.wrist);
    charEquip.push(char.items.hands);
    charEquip.push(char.items.waist);
    charEquip.push(char.items.legs);
    charEquip.push(char.items.feet);
    charEquip.push(char.items.finger1);
    charEquip.push(char.items.finger2);
    charEquip.push(char.items.trinket1);
    charEquip.push(char.items.trinket2);
    charEquip.push(char.items.mainHand);
    return charEquip;
  }
}
