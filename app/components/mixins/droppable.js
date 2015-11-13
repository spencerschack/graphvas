import Mixin from 'ember-metal/mixin';
import get from 'ember-metal/get';
import on from 'ember-evented/on';
import service from 'ember-service/inject';
import set from 'ember-metal/set';

export default Mixin.create({

  classNamesBindings: ['isDraggedOver'],

  dragCoordinator: service(),

  isDropTarget: false,
  
  classNameBindings: ['isDraggedOver'],

  setIsDraggedOver: on('mouseEnter', function() {
    if(get(this, 'isDropTarget')) {
      set(this, 'isDraggedOver', true);
      get(this, 'dragCoordinator').one('dragEnd', this, 'dropped');
    }
  }),

  clearIsDraggedOver: on('mouseLeave', function() {
    set(this, 'isDraggedOver', false);
    get(this, 'dragCoordinator').off('dragEnd', this, 'dropped');
  }),

});
