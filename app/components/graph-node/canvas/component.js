import computed from 'ember-computed';
import get from 'ember-metal/get';
import observer from 'ember-metal/observer';
import {schedule} from 'ember-runloop';
import Node from '../node';
import template from './template';

export default Node.extend({

  template,

  name: 'Canvas',

  inputs: ['drawable'],

  canvas: computed(function() {
    if(this.$()) {
      return this.$('canvas')[0];
    }
    schedule('afterRender', this, 'notifyPropertyChange', 'canvas');
  }),

  drawContext: computed('canvas', function() {
    const canvas = get(this, 'canvas');
    return canvas ? canvas.getContext('2d') : canvas;
  }),

  draw: observer('drawable', 'canvas', function() {
    const context = get(this, 'drawContext');
    const canvas = get(this, 'canvas');
    if(canvas) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      get(this, 'drawable').draw(context);
    }
  })

});
