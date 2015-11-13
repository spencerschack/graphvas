import Component from 'ember-component';
import get from 'ember-metal/get';
import on from 'ember-evented/on';

export function initialize() {
  Component.reopen({
    addComponentClassName: on('init', function() {
      if(get(this, 'tagName') !== '') {
        const constructorName = this.constructor.toString();
        const className = constructorName.split(':')[1].replace(/\//g, '--');
        // We don't want to affect private components ("-text-field").
        if(className[0] !== '-') {
          get(this, 'classNames').addObject(className);
        }
      }
    })
  });
}

export default {
  name: 'component-class-name',
  initialize: initialize
};


