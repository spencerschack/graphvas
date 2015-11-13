import Ember from 'ember';
import Component from 'ember-component';
import get from 'ember-metal/get';
import observer from 'ember-metal/observer';
import computed from 'ember-computed';
import on from 'ember-evented/on';
import set from 'ember-metal/set';
import service from 'ember-service/inject';

const {getProperties} = Ember;

export default Component.extend({

  classNames: ['graph-node'],
  classNameBindings: ['isDragging', 'isSelected',
    'inputs.length:has-inputs', 'outputs.length:has-outputs',],

  dragCoordinator: service(),

  layoutName: 'components/graph-node',

  inputs: [],
  outputs: [],

  isSelected: computed('dragCoordinator.selectedObjects.[]', function() {
    const node = get(this, 'node');
    return get(this, 'dragCoordinator.selectedObjects').contains(node);
  }),

  setComponent: on('init', function() {
    set(this, 'node.component', this);
  }),

  setPosition: on('didInsertElement', observer('node.{x,y}', function() {
    this.element.style.left = get(this, 'node.x') + 'px';
    this.element.style.top  = get(this, 'node.y') + 'px';
    this.sendAction('on-position', this);
  })),

  actions: {

    select({shiftKey}) {
      const node = get(this, 'node');
      if(!get(this, 'isSelected')) {
        if(event.shiftKey) {
          get(this, 'dragCoordinator.selectedObjects').addObject(node);
        } else {
          set(this, 'dragCoordinator.selectedObjects', [node]);
        }
      } else if(event.shiftKey) {
        get(this, 'dragCoordinator.selectedObjects').removeObject(node);
      }
    },

    startPosition(event) {
      set(this, 'lastX', event.pageX);
      set(this, 'lastY', event.pageY);
      this.send('select', event);
    },

    position({pageX: x, pageY: y}) {
      const lastX = get(this, 'lastX');
      const lastY = get(this, 'lastY');
      const selectedObjects = get(this, 'dragCoordinator.selectedObjects');
      selectedObjects.invoke('incrementProperty', 'x', x - lastX);
      selectedObjects.invoke('incrementProperty', 'y', y - lastY);
      set(this, 'lastX', x);
      set(this, 'lastY', y);
    },

    endPosition() {
      set(this, 'isDragging', false);
      get(this, 'dragCoordinator.selectedObjects').invoke('save');
    },
    
    destroy() {
      const node = get(this, 'node');
      node.destroyRecord();
      get(this, 'dragCoordinator.selectedObjects').removeObject(node);
    }
  
  }

});
