import computed from 'ember-computed';
import get from 'ember-metal/get';
import observer from 'ember-metal/observer';
import Node from '../node';

export default Node.extend({

  name: 'Mesh',

  outputs: ['mesh'],

  mesh: computed(function() {
    const arr = new Array(100);
    for(let i = 0; i < 10; i++) {
      for(let j = 0; j < 10; j++) {
        arr[i * 10 + j] = {x: i * 10 + 10, y: j * 10 + 10};
      }
    }
    return {
      draw(context) {
        arr.forEach(({x, y}) => {
          context.beginPath();
          context.arc(x, y, 0.5, 0, Math.PI * 2);
          context.fill();
        });
      }
    };
  })

});
