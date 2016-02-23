import {Component, Inject, forwardRef} from 'angular2/core';
import {ApiComp} from '../wowApi.service';
import {IChar} from './char';

@Component({
    selector: 'achiev',
    templateUrl: 'app/Char/char.html',
    directives: [],
    providers: [ApiComp],

})



export class AchievementsComp  {

}
