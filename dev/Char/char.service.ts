import {Component, Inject, Injectable, forwardRef} from 'angular2/core';
import {CharComp} from './char.comp';
import {IChar} from './char';


@Injectable()


export class CharService {
  public charData: IChar = {
    achievementPoints: 0,
    achievements: {achievementsCompleted: null, achievementsCompletedTimestamp: null},
    battlegroup: '',
    calcClass: 'string',
    playerClass: 0,
    faction: 0,
    gender: 0,
    guild: {
      achievementPoints: 0,
      battlegroup: '',
      emblem: null,
      members: 0,
      name: '',
      realm: ''
    },
    items: null,
    level: 0,
    name: 'Hallo',
    pvp: null,
    race: 0,
    realm: '',
    thumbnail: '',
    totalHonorableKills: 0
  };

}
