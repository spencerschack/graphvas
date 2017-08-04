import Component from 'ember-component';
import computed from 'ember-computed';
import observer from 'ember-metal/observer';
import get from 'ember-metal/get';
import on from 'ember-evented/on';
import service from 'ember-service/inject';
import set from 'ember-metal/set';
import {next} from 'ember-runloop';
import Edge from '../../../models/edge';
import Droppable from '../../mixins/droppable';

export default Component.extend(
  Droppable,
{

  classNames: ['graph-node--output'],

  store: service(),

  attributeBindings: ['output:data-output'],

  edges: computed('node.outputs.[]', 'output', function() {
    return get(this, 'node.outputs').filterBy('output', get(this, 'output'));
  }),

  setEdgesFromPosition: on('didInsertElement', observer('node.{x,y}', 'edges.[]', function() {
    next(() => {
      const {top, left} = this.$().offset();
      const width = this.$().outerWidth();
      const [x, y] = [left + width - 10, top + 13];
      get(this, 'edges').forEach(edge => {
        set(edge, 'fromX', x);
        set(edge, 'fromY', y);
      });
    });
  })),

  isDropTarget: computed('dragCoordinator.draggedObject', function() {
    const draggedObject = get(this, 'dragCoordinator.draggedObject');
    const isEdge = Edge.detectInstance(draggedObject);
    return isEdge && !get(draggedObject, 'output');
  }),

  initializeDrag: on('mouseDown', function(event) {
    const edge = get(this, 'store').createRecord('edge', {
      from: get(this, 'node'),
      output: get(this, 'output'),
      graph: get(this, 'node.graph')
    });
    const dragCoordinator = get(this, 'dragCoordinator');
    dragCoordinator.createDrag(edge, (x, y) => {
      set(edge, 'toX', x);
      set(edge, 'toY', y);
    });
    dragCoordinator.one('dragEnd', () => {
      next(() => {
        if(!get(edge, 'input')) {
          edge.destroyRecord();
        }
      });
    });
  }),

  dropped(edge) {
    set(edge, 'from', get(this, 'node'));
    set(edge, 'output', get(this, 'output'));
    edge.save();
  }

});
