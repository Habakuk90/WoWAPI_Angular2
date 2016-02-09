import {Component, Injectable} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig, RouterOutlet} from 'angular2/router';
import {HomeComp} from './Home/home.comp';
import {CharComp} from './Char/char.comp';
// import 'rxjs/add/operators/map';
import { Http, Headers, HTTP_PROVIDERS, BaseRequestOptions, RequestOptions } from 'angular2/http';

import {ApiComp} from './wowApi.service';

@Injectable()

@Component({
    selector: 'app',
    templateUrl: 'dev/app.html',
    directives:[ROUTER_DIRECTIVES],
    providers: [ApiComp],

})


@RouteConfig([
	{ path: '/', component: HomeComp, as: 'Home' },
	{ path:'/char', component: CharComp, as: 'Char'}
	])


export class AppComp  {

}
