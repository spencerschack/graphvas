import Ember from 'ember';
import computed from 'ember-computed';
import get from 'ember-metal/get';
import {max, extrema, pairs, sum} from './array';

function distance({x, y}) {
  const dx = this.x - x;
  const dy = this.y - y;
  return Math.sqrt(dx * dx + dy * dy);
}

const SAMPLES = 20;
const NET_DISTANCE = 150;
const TOTAL_DISTANCE = 250;
const MAJOR_AXIS = 100;
const MINOR_AXIS = 50;

export default Ember.Object.extend({

  points: computed(() => []),

  push(x, y) {
    const points = get(this, 'points');
    points.unshiftObject({x, y});
    if(points.length > SAMPLES) {
      points.popObject();
    }
  },

  shakeAxis: computed('points.[]', function() {
    if(get(this, 'netDistance') < NET_DISTANCE &&
      get(this, 'totalDistance') > TOTAL_DISTANCE) {
      const {width, height} = get(this, 'boundingBox');
      if(width > MAJOR_AXIS && height < MINOR_AXIS) return 'y';
      if(height > MAJOR_AXIS && width < MINOR_AXIS) return 'x';
    }
  }),

  boundingBox: computed('points.[]', function() {
    let [minX, maxX] = get(this, 'points').mapBy('x')::extrema();
    let [minY, maxY] = get(this, 'points').mapBy('y')::extrema();
    return {width: maxX - minX, height: maxY - minY};
  }),

  netDistance: computed('points.[]', function() {
    const points = get(this, 'points');
    return points.slice(1).map(p => points[0]::distance(p))::max();
  }),

  totalDistance: computed('points.[]', function() {
    const points = get(this, 'points');
    return points::pairs().map(([p1, p2]) => p1::distance(p2))::sum();
  }),

});
