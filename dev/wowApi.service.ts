import {Component, Injectable} from 'angular2/core';
import { Http, Headers, HTTP_PROVIDERS, BaseRequestOptions, RequestOptions, URLSearchParams, Jsonp } from 'angular2/http';
// import {HelperComp} from './helper.comp';

@Injectable()
export class ApiComp {
  apiKey: string = '&apikey=7nzfdaekfbk2x3ygya9bpvs64k248sxc';
  link: string = 'https://eu.api.battle.net/wow/';
  constructor(public _http: Http, private jsonp: Jsonp) {

  }
  public fields: string = '?fields=';
  //[TODO] for all languages
  public local: string = '&locale=de_DE';
  public achievement: string = 'achievements';
  public auctionData: string = 'auction/data/:Realm/';

  public charProfile = { value: 'character/', name: 'charProfile' };

  // [TODO] nicht immer alles laden
  public profileFields = [
    'achievements',
    'apperance',
    'feed',
    'items',
    'pvp',
    'statistics',
    'talents',
    'guild',
  ]
  // wow/data/character/ achievements
  public guildProfile = { value: 'guild/:realm/:guildname', name: 'guildProfile' };
  public guildFields = [
    'members',
    'achievement',
    'news',
  ]

  public itemApi: string = 'item/';
  public itemSet = 'item/set/:setid';

  public pvpApi = { value: 'leaderboard/', name: 'pvp Leaderboard' };
  public brackets = [
    '2v2',
    '3v3',
    '5v5'
  ]
  public realmStatus: string = 'realm/status?';

  public spellApi: string = 'spell/:spellid?';

  public dataResource: string = 'data/';
  public dataResourceFields = {
    battlegroup: 'battlegroups/',
    charRaces: 'character/races',
    charClasses: 'character/classes',
    charAchieve: 'character/achievements',
    itemClasses: 'item/classes',
    talents: 'talents',
  }


  public fullLink: string = '';

  generateDataResourceLink(val) {
    return this.link + this.dataResource + val + '?' + this.local + this.apiKey;
  }

  generateProfileLink(char: string, fields: string) {
    return this.link + this.charProfile.value + char + this.fields + 'pvp+guild+achievements+items' +this.local + this.apiKey;
  }

  generateGuildLink(val) {
    this.fullLink = this.link + this.guildProfile.value + this.fields + val + this.local + this.apiKey;
  }

  generateAchievementLink() {
    return this.link + this.dataResource + this.dataResourceFields.charAchieve + '?' + this.local + this.apiKey;
  }

  generateItemLink(id:number) {
    return this.link + this.itemApi + id + '?' + this.local + this.apiKey;
  }

  generateLeaderboardLink(val) {
    this.fullLink = this.link + this.pvpApi.value + val + '?' + this.local + this.apiKey;
  }

  generateFullRealmListLink() {
    this.fullLink = this.link + this.realmStatus + this.local + this.apiKey;
  }

  generateSpellListLink() {
    this.fullLink = this.link + this.spellApi + this.local + this.apiKey;
  }

  generateClassDataLink() {
    return this.generateDataResourceLink(this.dataResourceFields.charClasses);
  }

  generateRaceDataLink() {
    return this.generateDataResourceLink(this.dataResourceFields.charRaces);
  }

  getRaceData() {
    return this._http.get(this.generateRaceDataLink()).map(res  => res.json());
  }

  getPlayerClassData() {
    return this._http.get(this.generateClassDataLink()).map(res => res.json());
  }

  getAchievementList() {
    return this._http.get(this.generateAchievementLink()).map(res => res.json());
  }

  getChar(name:string, realm:string, fields:string = '') {
    return this._http.get(this.generateProfileLink(name + '/' + realm, fields)).map(res => res.json());
  }
  getItem(id:number) {
    return this._http.get(this.generateItemLink(id)).map(res=> res.json());
  }
}
