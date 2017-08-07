import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import get from 'ember-metal/get';
import set from 'ember-metal/set';
import {belongsTo} from 'ember-data/relationships';
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
  toY: 0

});
