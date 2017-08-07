import Component from 'ember-component';
import get from 'ember-metal/get';
import set from 'ember-metal/set';
import {alias, and} from 'ember-computed';
import on from 'ember-evented/on';
import observer from 'ember-metal/observer';

export default Component.extend({

  classNames: ['graph-edge'],

  input: alias('edge.input'),
  output: alias('edge.output'),
  from: alias('edge.from'),
  to: alias('edge.to'),

  canMakeConnection: and('input', 'output', 'from.component', 'to.component'),

  manageConnection: on('init', observer('canMakeConnection', function() {
    if(get(this, 'canMakeConnection')) {
      const from = get(this, 'from.component');
      const output = get(this, 'output');
      this.update();
      from.addObserver(output, this, 'update');
    } else {
      this.teardownConnection();
    }
  })),

  teardownConnection: on('willDestroyElement', function() {
    const from = get(this, 'from.component');
    const output = get(this, 'output');
    from.removeObserver(output, this, 'update');
  }),

  update() {
    const from = get(this, 'from.component');
    const value = get(from, get(this, 'output'));
    const to = get(this, 'to.component');
    set(to, get(this, 'input'), value);
  }

});
