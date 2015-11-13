import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import {hasMany} from 'ember-data/relationships';

export default Model.extend({

  name: attr('string'),

  nodes: hasMany('node', {dependent: 'destroy', inverse: 'graph'}),
  edges: hasMany('edge', {dependent: 'destroy', inverse: 'graph'})

})
