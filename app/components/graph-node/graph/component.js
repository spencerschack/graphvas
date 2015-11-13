import get from 'ember-metal/get';
import observer from 'ember-metal/observer';
import Node from '../node';

export default Node.extend({

  name: 'Graph',

  inputs: ['x', 'y'],

  updatePosition: observer('x', 'y', function() {
    if(this.$()) {
      this.$('.graph-node--graph--position')
        .css('left', (get(this, 'x') * 50 + 50) + '%')
        .css('top', (get(this, 'y') * 50 + 50) + '%');
    }
  })

});
