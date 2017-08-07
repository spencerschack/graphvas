import computed from 'ember-computed';
import get from 'ember-metal/get';
import Node from '../node';

export default Node.extend({

  name: 'Divide',

  inputs: ['dividend', 'divisor'],
  outputs: ['quotient'],

  quotient: computed('dividend', 'divisor', function() {
    console.log(get(this, 'dividend'));
    return get(this, 'dividend') / get(this, 'divisor');
  }),

});
