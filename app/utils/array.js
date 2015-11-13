import get from 'ember-metal/get';

export function toArray() {
  return Array.prototype.slice.call(this);
}

export function sum() {
  let sum = 0;
  for(let i = 0; i < this.length; i++) {
    sum += this[i];
  }
  return sum;
}

export function max() {
  return Math.max.apply(null, this);
}

export function min() {
  return Math.min.apply(null, this);
}

export function extrema() {
  return [this::min(), this::max()];
}

export function pairs() {
  const ret = [];
  for(let i = 0; i < this.length - 1; i++) {
    ret.push([this[i], this[i + 1]]);
  }
  return ret;
}

export function average() {
  return this::sum() / this.length;
}

export function last() {
  return this[this.length - 1];
}

export function butLast() {
  return this.slice(0, -1);
}

export function toSentence() {
  if(this.length < 3) {
    return this.join(' and ');
  } else {
    return `${this::butLast().join(', ')}, and ${this::last()}`;
  }
}

export function index(indexer) {
  return this.reduce((object, item) => {
    object[indexer(item)] = item;
    return object;
  }, {});
}

export function indexBy(key) {
  return this::index(item => get(item, key));
}

export function without(...objects) {
  return objects.reduce((arr, object) => arr.without(object), this);
}

export function toObject(fn) {
  const object = {};
  this.forEach(item => object[item] = fn(item));
  return object;
}
