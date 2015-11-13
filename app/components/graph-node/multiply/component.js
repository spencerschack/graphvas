import computed from 'ember-computed';
import get from 'ember-metal/get';
import Node from '../node';

export default Node.extend({

  name: 'Multiply',

  inputs: ['multiplier', 'multiplicand'],
  outputs: ['product'],

  product: computed('multiplier', 'multiplicand', function() {
    return get(this, 'multiplier') * get(this, 'multiplicand');
  }),

});
