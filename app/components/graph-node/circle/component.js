import computed from 'ember-computed';
import get from 'ember-metal/get';
import observer from 'ember-metal/observer';
import Node from '../node';

const TWOPI = Math.PI * 2;

export default Node.extend({

  name: 'Circle',

  inputs: ['x', 'y', 'radius'],
  outputs: ['drawable'],

  drawable: computed('x', 'y', 'radius', function() {
    const x = get(this, 'x');
    const y = get(this, 'y');
    const radius = get(this, 'radius');
    return {
      draw(context) {
        context.beginPath();
        context.arc(x, y, radius, 0, TWOPI);
        context.fill();
      }
    }
  })

});
