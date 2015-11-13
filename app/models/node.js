import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import {hasMany, belongsTo} from 'ember-data/relationships';

export default Model.extend({

  name:  attr('string'),
  x:     attr('number', { defaultValue: 0 }),
  y:     attr('number', { defaultValue: 0 }),
  state: attr({defaultValue: () => { return {}; }}),

  inputs:  hasMany('edge', {dependent: 'destroy', inverse: 'to'}),
  outputs: hasMany('edge', {dependent: 'destroy', inverse: 'from'}),
  graph:   belongsTo('graph', {autoSave: true, inverse: 'nodes'})

});
