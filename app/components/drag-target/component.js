import Component from 'ember-component';
import on from 'ember-evented/on';
import {
  oneWindowEvent,
  onWindowEvent,
  offWindowEvent
} from '../../utils/component';

export default Component.extend({

  classNames: ['drag-target'],

  handleContextMenu: on('contextMenu', function(event) {
    event.preventDefault();
    this.sendAction('on-context-menu', event);
  }),

  handleMouseDown: on('mouseDown', function(event) {
    if(event.which === 3) {
      return;
    }
    this.sendAction('on-mouse-down', event);
    this::onWindowEvent('mouseMove', 'mouseUp', event => {
      this::offWindowEvent('mouseMove', 'mouseUp');
      if(event.type === 'mousemove') {
        document.body.classList.add('is-dragging');
        this.sendAction('on-drag-start', event);
        this::onWindowEvent('mouseMove', event => {
          this.sendAction('on-drag', event);
        });
        this::oneWindowEvent('mouseUp', event => {
          this::offWindowEvent('mouseMove');
          document.body.classList.remove('is-dragging');
          this.sendAction('on-drag-end', event);
        });
      } else {
        this.sendAction('on-click', event);
      }
    });
  })

});
