import {Component, Injectable} from 'angular2/core';
import { Http, Headers, HTTP_PROVIDERS, BaseRequestOptions, RequestOptions } from 'angular2/http';


@Injectable()



export class ApiComp {
  apiKey: string = '7nzfdaekfbk2x3ygya9bpvs64k248sxc';
  public data;
  constructor(public _http:Http) {

  }
  getPlayer(realm:string, player:string) {
    return this._http.get('https://eu.api.battle.net/wow/character/' + realm + '/' + player + '?locale=de_DE&apikey=' + this.apiKey)
     .map(res => res.json())
  }
}
