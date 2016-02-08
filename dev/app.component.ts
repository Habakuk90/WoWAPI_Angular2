import {Component, Injectable} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig, RouterOutlet} from 'angular2/router';
import {HomeComp} from './Home/home.comp';
import {AboutComp} from './About/about.comp';
// import 'rxjs/add/operators/map';
import { Http, Headers, HTTP_PROVIDERS, BaseRequestOptions, RequestOptions } from 'angular2/http';

import {ApiComp} from './wowApi.service';

@Injectable()

@Component({
    selector: 'app',
    templateUrl: 'dev/app.html',
    directives:[ROUTER_DIRECTIVES],
    providers: [ApiComp]
})

@RouteConfig([
	{ path: '/', component: HomeComp, as: 'Home' },
	{ path:'/about', component: AboutComp, as: 'About'}
	])


export class AppComp  {
  obj;
  constructor(public api:ApiComp) {

  }
  test() {

    this.api.getPlayer('Mannoroth', 'Kiluk')
      .subscribe(
      data => this.obj = data,
      error => console.log(error),
      () => this.createImage()
    )
  }

 createImage() {

     var img = document.createElement("img");
     img.src = "http://eu.battle.net/static-render/eu/" + this.obj.thumbnail;
     document.getElementById('dings').appendChild(img);
 }
}
