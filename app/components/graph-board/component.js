import Ember from 'ember';
import Component from 'ember-component';
import set from 'ember-metal/set';
import get from 'ember-metal/get';
import computed from 'ember-computed';
import observer from 'ember-metal/observer';
import service from 'ember-service/inject';
import PointSampler from '../../utils/point-sampler';
import {selectKeys} from '../../utils/map';
import {extrema} from '../../utils/math';
import {average} from '../../utils/array';
const {Map, Set} = Ember;

function contains(rect) {
  return this.left < rect.left && this.right  > rect.right &&
         this.top  < rect.top  && this.bottom > rect.bottom;
}
function intersects(rect) {
  return !(this.right < rect.left   || this.left   > rect.right ||
           this.top   > rect.bottom || this.bottom < rect.top);
}

export default Component.extend({

  classNameBindings: ['isDragging',
    'isDraggingLeft:is-dragging-left:is-dragging-right'],

  store: service(),
  dragCoordinator: service(),

  board: computed(() => Map.create()),
  isDragging: computed('click', 'drag', function() {
    return !!(get(this, 'click') && get(this, 'drag'));
  }),
  isDraggingLeft: computed('{click,drag}.x', function() {
    return get(this, 'click.x') > get(this, 'drag.x');
  }),

  selectRect: computed('{click,drag}.{x,y}', function() {
    const [top, bottom] = extrema(get(this, 'click.y'), get(this, 'drag.y'));
    const [left, right] = extrema(get(this, 'click.x'), get(this, 'drag.x'));
    return {top, right, bottom, left};
  }),

  selected: computed('selectRect', function() {
    const selectRect = get(this, 'selectRect');
    if(selectRect) {
      const selector = get(this, 'isDraggingLeft') ? contains : intersects;
      return get(this, 'board')::selectKeys(rect => selectRect::selector(rect));
    }
    return [];
  }),

  updateDragCoordinatorSelectedObjects: observer('selectRect', function() {
    if(get(this, 'isDragging')) {
      set(this, 'dragCoordinator.selectedObjects', get(this, 'selected'));
    }
  }),

  pointSampler: computed(() => PointSampler.create()),

  trackShake: Ember.on('mouseMove', function({pageX: x, pageY: y}) {
    const sampler = get(this, 'pointSampler');
    sampler.push(x, y);
    const axis = get(sampler, 'shakeAxis');
    if(axis) {
      const selectedObjects = get(this, 'dragCoordinator.selectedObjects');
      const value = selectedObjects.mapBy(axis)::average();
      selectedObjects.invoke('set', axis, value);
      selectedObjects.invoke('save');
    }
  }),

  actions: {
    
    position(component) {
      const rect = component.element.getBoundingClientRect();
      get(this, 'board').set(get(component, 'node'), rect);
    },

    startSelect({pageX: x, pageY: y}) {
      set(this, 'click', {x, y});
      set(this, 'drag', {x, y});
    },

    select({pageX: x, pageY: y}) {
      set(this, 'drag', {x, y});
    },

    endSelect() {
      set(this, 'click', null);
      set(this, 'drag', null);
    },

    showMenu({pageX: x, pageY: y}) {
      set(this, 'showMenu', true);
      set(this, 'menuPosition', {x, y});
    },

    clear() {
      get(this, 'dragCoordinator.selectedObjects').clear();
      set(this, 'showMenu', false);
    },

    addNode(attrs) {
      const graph = get(this, 'graph');
      get(this, 'store').createRecord('node', {graph, ...attrs}).save();
      set(this, 'showMenu', false);
    }
  
  }

});
