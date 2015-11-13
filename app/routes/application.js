import Ember from 'ember';
import Route from 'ember-route';
import get from 'ember-metal/get';
const {all} = Ember.RSVP;

export default Route.extend({

  beforeModel() {
    return all([
      get(this, 'store').findAll('node'),
      get(this, 'store').findAll('edge')
    ]);
  }

});
