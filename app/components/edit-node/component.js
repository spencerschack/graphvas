import Component from 'ember-component';
import get from 'ember-metal/get';
import set from 'ember-metal/set';
import on from 'ember-evented/on';
import service from 'ember-service/inject';
import Node from '../../models/node';
import Droppable from '../mixins/droppable';
import {detectInstance} from '../../utils/computed';

export default Component.extend(
  Droppable,
{

  classNames: ['edit-node'],

  store: service(),

  isDropTarget: detectInstance(Node, 'dragCoordinator.draggedObject'),

  dropped() {
    get(this, 'dragCoordinator.selectedObjects').invoke('destroyRecord');
  },

  actions: {

    addNode(name) {
      const graph = get(this, 'graph');
      get(this, 'store').createRecord('node', {graph, name}).save();
    }

  }

});
