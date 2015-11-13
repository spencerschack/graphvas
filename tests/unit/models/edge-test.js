import { moduleForModel, test } from 'ember-qunit';

moduleForModel('edge', 'Unit | Model | edge', {
  // Specify the other units that are required for this test.
  needs: ['model:from', 'model:to']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
