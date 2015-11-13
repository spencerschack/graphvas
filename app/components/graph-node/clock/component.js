import Ember from 'ember';
import computed, {alias} from 'ember-computed';
import run from 'ember-runloop';
import Node from '../node';

const Clock = Ember.Object.extend({
  time: computed(function() {
    requestAnimationFrame(() => run(() => this.notifyPropertyChange('time')));
    return Date.now();
  })
});

export default Node.extend({

  name: 'Clock',

  outputs: ['time'],

  clock: Clock.create(),

  time: alias('clock.time')

});
