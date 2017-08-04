import Component from 'ember-component';
import get from 'ember-metal/get';
import on from 'ember-evented/on';

export default Component.extend({

  classNames: ['graph-board--menu'],

  updatePosition: on('didInsertElement', function() {
    const {x, y} = get(this, 'position');
    this.$()
      .css('top', y + 'px')
      .css('left', x + 'px');
  }),

  actions: {

    select(name) {
      this.sendAction('on-add-node', {name, ...get(this, 'position')})
    }

  }

});
