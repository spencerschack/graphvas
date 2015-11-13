import $ from 'jquery';
import Evented from 'ember-evented';
import Service from 'ember-service';
import get from 'ember-metal/get';
import observer from 'ember-metal/observer';
import on from 'ember-evented/on';
import set from 'ember-metal/set';
import {bool} from 'ember-computed';

export default Service.extend(
  Evented,
{

  isDragging: bool('draggedObject'),

  draggedObject: null,

  selectedObjects: [],

  createDrag(object, drag) {
    set(this, 'draggedObject', object);
    $('body').addClass('is-dragging');
    this.trigger('dragStart', object);
    $(window).on(`mousemove.${this}`, event => {
      drag(event.pageX, event.pageY);
      this.trigger('drag', event);
    });
    $(window).one('mouseup', () => {
      $(window).off(`mousemove.${this}`);
      set(this, 'draggedObject', null);
      $('body').removeClass('is-dragging');
      this.trigger('dragEnd', object);
    });
  }

});
