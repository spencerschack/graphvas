import computed from 'ember-computed';
import get from 'ember-metal/get';
import Node from '../node';

export default Node.extend({

  name: 'Cosine',

  inputs: ['x'],
  outputs: ['y'],

  y: computed('x', function() {
    return Math.cos(get(this, 'x'));
  })

});
