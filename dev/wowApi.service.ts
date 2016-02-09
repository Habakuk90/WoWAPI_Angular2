import {Component, Injectable} from 'angular2/core';
import { Http, Headers, HTTP_PROVIDERS, BaseRequestOptions, RequestOptions, URLSearchParams, Jsonp } from 'angular2/http';



@Injectable()



export class ApiComp {
  apiKey: string = '&apikey=7nzfdaekfbk2x3ygya9bpvs64k248sxc';
  link: string = 'https://eu.api.battle.net/wow/';
  constructor(public _http: Http, private jsonp: Jsonp) {

  }

  getClasses() {
    return this._http.get(this.link + 'data/character/classes?locale=de_DE' + this.apiKey).map(res => res.json());
  }

  getChar(realm:string, player:string) {
    return this._http.get(this.link + 'character/' + realm + '/' + player + '?locale=de_DE' + this.apiKey)
     .map(res => res.json())
  }
}
