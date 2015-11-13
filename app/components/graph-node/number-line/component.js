import get from 'ember-metal/get';
import observer from 'ember-metal/observer';
import Node from '../node';
import NumberLineTemplate from './template';

export default Node.extend({

  name: 'Number Line',

  inputs: ['value'],

  updatePosition: observer('value', function() {
    if(this.$()) {
      this.$('.graph-node--number-line--position')
        .css('left', (get(this, 'value') * 50 + 50) + '%');
    }
  })

});
