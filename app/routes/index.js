import Ember from 'ember';
import get from 'ember-metal/get';

export default Ember.Route.extend({

  redirect() {
    return this.store.createRecord('graph').save().then(graph => {
      this.transitionTo('graph', get(graph, 'id'));
    });
  }

});
