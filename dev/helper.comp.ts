import {Component, Injectable} from 'angular2/core';



@Component({
    selector: 'helper',
    templateUrl: 'dev/Helper.html',
    directives: [],
    providers: []
})

export class HelperComp {
  public link: string = 'https://eu.api.battle.net/wow/';
  public fields: string = '?fields=';
  //[TODO] for all languages
  public local: string = '&locale=de_DE';
  public apiKey: string = '&apikey=7nzfdaekfbk2x3ygya9bpvs64k248sxc';
  public achievement: string = 'achievement/:id?';
  public auctionData: string = 'auction/data/:Realm/';

  public charProfile = { value: 'character/:realm/:character', name: 'charProfile' };
  public profileFields = [
    'achievements',
    'apperance',
    'feed',
    'items',
    'pvp',
    'statistics',
    'talents',
  ]

  public guildProfile = { value: 'guild/:realm/:guildname', name: 'guildProfile' };
  public guildFields = [
    'members',
    'achievement',
    'news',
  ]

  public itemApi: string = 'item/:itemid?';
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
  public dataResourceFields = [
    'battlegroups/',
    'character/races',
    'character/classes',
    'character/achievements',
    'item/classes',
    'talents',
  ]

  public fullLink: string = '';
  generateProfileLink(val) {
    this.fullLink = this.link + this.charProfile.value + this.fields + val + this.local + this.apiKey;

  }
  generateAchievementLink() {
    this.fullLink = this.link + this.achievement + this.local + this.apiKey;
  }

  generateGuildLink(val) {
    this.fullLink = this.link + this.guildProfile.value + this.fields + val + this.local + this.apiKey;

  }
  generateItemLink(){
    this.fullLink = this.link + this.itemApi + this.local + this.apiKey;
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

  generateDataResourceLink(val) {
    this.fullLink = this.link + this.dataResource + val + '?' + this.local + this.apiKey;
  }

  //wow.zamimg.com/images/wow/icons/large/inv_60pvp_ring2a.jpg
}
