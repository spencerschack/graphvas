import computed from 'ember-computed';
import get from 'ember-metal/get';

export function detectInstance(detector, key) {
  return computed(key, function() {
    return detector.detectInstance(get(this, key));
  });
}

export function initsTo(key) {
  return computed(function getInitialValue() {
    return get(this, key);
  });
}

export function cast(key, caster) {
  return computed(key, function() {
    return caster(get(this, key));
  });
}
