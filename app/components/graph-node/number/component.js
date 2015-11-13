import {alias} from 'ember-computed';
import on from 'ember-evented/on';
import observer from 'ember-metal/observer';
import set from 'ember-metal/set';
import get from 'ember-metal/get';
import Node from '../node';

export default Node.extend({

  name: 'Number',

  outputs: ['value'],

  value: alias('node.state.value'),

  updateValue: on('input', function() {
    set(this, 'value', parseFloat(this.$('input').val()));
  }),

  updateInput: on('focusOut', 'didInsertElement', observer('value', function() {
    if(this.$()) {
      const input = this.$('input');
      if(!input.is(':focus')) {
        input.val(get(this, 'value'));
      }
    }
  }))

});
