import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import get from 'ember-metal/get';
import observer from 'ember-metal/observer';
import on from 'ember-evented/on';
import set from 'ember-metal/set';
import {belongsTo} from 'ember-data/relationships';
import {and} from 'ember-computed';
import {assert} from 'ember-metal/utils';
const {Binding} = Ember;

export default Model.extend({

  input:  attr('string'),
  output: attr('string'),

  from:  belongsTo('node',  {autoSave: true, inverse: 'outputs'}),
  to:    belongsTo('node',  {autoSave: true, inverse: 'inputs'}),
  graph: belongsTo('graph', {autoSave: true, inverse: 'edges'}),

  fromX: 0,
  fromY: 0,
  toX: 0,
  toY: 0,

  canMakeConnection: and('input', 'output', 'from.component', 'to.component'),

  manageConnection: on('init', observer('canMakeConnection', function() {
    const oldBinding = get(this, 'binding');
    if(oldBinding) {
      oldBinding.disconnect(this);
    }
    if(get(this, 'canMakeConnection')) {
      const binding = Binding
        .from(`from.component.${get(this, 'output')}`)
        .to(`to.component.${get(this, 'input')}`)
        .oneWay();
      set(this, 'binding', binding);
      binding.connect(this);
    }
  }))

});
