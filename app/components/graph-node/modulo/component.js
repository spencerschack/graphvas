import computed from 'ember-computed';
import get from 'ember-metal/get';
import Node from '../node';

export default Node.extend({

  name: 'Modulo',

  inputs: ['dividend', 'divisor'],
  outputs: ['modulo'],

  modulo: computed('dividend', 'divisor', function() {
    return get(this, 'dividend') % get(this, 'divisor');
  })

});
