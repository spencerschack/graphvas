import computed from 'ember-computed';
import get from 'ember-metal/get';
import Node from '../node';

export default Node.extend({

  name: 'Integer Divide',

  inputs: ['dividend', 'divisor'],
  outputs: ['quotient', 'remainder'],

  quotient: computed('dividend', 'divisor', function() {
    return Math.floor(get(this, 'dividend') / get(this, 'divisor'));
  }),

  remainder: computed('dividend', 'divisor', function() {
    return get(this, 'dividend') % get(this, 'divisor');
  })

});
