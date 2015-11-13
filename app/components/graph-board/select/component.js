import Component from 'ember-component';
import get from 'ember-metal/get';
import observer from 'ember-metal/observer';

export default Component.extend({

  updateSizeAndPosition: observer('rect', function() {
    const {top, right, bottom, left} = get(this, 'rect');
    this.$()
      .width(right - left)
      .height(bottom - top)
      .css('top', top + 'px')
      .css('left', left + 'px');
  }),

});
