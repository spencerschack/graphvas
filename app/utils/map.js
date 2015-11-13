import Ember from 'ember';
import get from 'ember-metal/get';
import {toObject} from './array';

export function selectKeys(fn) {
  const selected = [];
  this.forEach((value, key) => {
    if(fn(value, key)) {
      selected.push(key);
    }
  });
  return selected;
}
