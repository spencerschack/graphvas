import computed from 'ember-computed';
import get from 'ember-metal/get';
import Node from '../node';

export default Node.extend({

  name: 'Add',

  inputs: ['a', 'b'],
  outputs: ['c'],

  c: computed('a', 'b', function() {
    return get(this, 'a') + get(this, 'b');
  }),

});
