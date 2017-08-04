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

  classNames: ['graph-node--input'],

  store: service(),

  edge: computed('node.inputs.[]', 'input', function() {
    return get(this, 'node.inputs').findBy('input', get(this, 'input'));
  }),

  setEdgeToPosition: on('didInsertElement', observer('edge', 'node.{x,y}', function() {
    next(() => {
      const edge = get(this, 'edge');
      if(edge) {
        const {top, left} = this.$().offset();
        set(edge, 'toX', left + 10);
        set(edge, 'toY', top + 13);
      }
    });
  })),

  isDropTarget: computed('dragCoordinator.draggedObject', function() {
    const draggedObject = get(this, 'dragCoordinator.draggedObject');
    const isEdge = Edge.detectInstance(draggedObject);
    return isEdge && !get(draggedObject, 'input');
  }),

  initializeDrag: on('mouseDown', function() {
    const node = get(this, 'node');
    const input = get(this, 'input');
    let edge = get(node, 'inputs').findBy('input', input);
    if(edge) {
      set(edge, 'output', null);
      set(edge, 'from', null);
    } else {
      edge = get(this, 'store').createRecord('edge', {
        to: node,
        input,
        graph: get(node, 'graph')
      });
    }
    const dragCoordinator = get(this, 'dragCoordinator');
    dragCoordinator.createDrag(edge, (x, y) => {
      set(edge, 'fromX', x);
      set(edge, 'fromY', y);
    });
    dragCoordinator.one('dragEnd', () => {
      next(() => {
        if(!get(edge, 'output')) {
          edge.destroyRecord();
        }
      });
    });
  }),

  dropped(edge) {
    set(edge, 'to', get(this, 'node'));
    set(edge, 'input', get(this, 'input'));
    edge.save();
  }

});
