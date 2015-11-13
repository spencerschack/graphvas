import Ember from 'ember';
import get from 'ember-metal/get';
import {toObject} from './array';

export function keys() {
  return Object.keys(this);
}

export function map(fn) {
  return this::keys()::toObject(key => fn(this[key]));
}

export function extract(keys) {
  return keys::toObject(key => this::deleteProperty(key));
}

export function filter(fn) {
  return this::keys()
    .filter(key => fn(key, this[key]))::toObject(key => this[key]);
}

export function filterBy(property, value = true) {
  return this::filter((_, v) => get(v, property) === value);
}

export function assign(...updates) {
  updates.forEach(update => { if(update) Ember.merge(this, update); });
  return this;
}

export function deleteProperty(name) {
  const ret = this[name];
  delete this[name];
  return ret;
}

export function fetch(property, fn) {
  if(this.hasOwnProperty(property)) {
    return this[property];
  }
  this[property] = fn(this, property);
  return this[property];
}
