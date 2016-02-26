import {Component,Input, Injectable,Inject, forwardRef} from 'angular2/core';
import {ApiComp} from '../wowApi.service';
import {CharComp} from './char.comp';
import {IChar} from './char';
import {CharService} from './char.service';


@Injectable()

@Component({
    selector: 'achiev-data',
    templateUrl: 'app/Char/achiev.html',
    directives: [],
    providers: [ApiComp, CharService],
    inputs: ['charData', 'achieveData'],
    styleUrls: ['']
})



export class AchievementsComp  {
  constructor(public api: ApiComp, public charService: CharService) {
  }
  public title: string;
  public description: string;
  public timestamp: Date;
  public achiv;
  public charData;
  public achieveData;
   // public char = CharComp.char;
}
