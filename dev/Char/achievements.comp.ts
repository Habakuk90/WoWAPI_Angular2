import {Component,Input, Injectable,Inject, forwardRef} from 'angular2/core';
import {ApiComp} from '../wowApi.service';
import {CharComp} from './char.comp';
import {IChar} from './char';


@Injectable()

@Component({
    selector: 'achiev-data',
    templateUrl: 'app/Char/achiev.html',
    directives: [],
    providers: [ApiComp],
    inputs: ['achieveData'],
    styleUrls: ['']
})



export class AchievementsComp  {
  constructor(public api: ApiComp) {
  }
  public title: string;
  public description: string;
  public timestamp: Date;
  public achiv;
  public charData;

}
