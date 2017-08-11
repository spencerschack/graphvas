'use strict';

define('graphvas/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('components/drag-target/component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/drag-target/component.js should pass ESLint\n\n23:9 - Parsing error: Unexpected token : (null)');
  });

  QUnit.test('components/edit-node/component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/edit-node/component.js should pass ESLint\n\n3:8 - \'set\' is defined but never used. (no-unused-vars)\n4:8 - \'on\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('components/graph-board/component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/graph-board/component.js should pass ESLint\n\n50:32 - Parsing error: Unexpected token : (null)');
  });

  QUnit.test('components/graph-board/menu/component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/graph-board/menu/component.js should pass ESLint\n\n19:45 - Parsing error: Unexpected token ... (null)');
  });

  QUnit.test('components/graph-board/select/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/graph-board/select/component.js should pass ESLint\n\n');
  });

  QUnit.test('components/graph-edge/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/graph-edge/component.js should pass ESLint\n\n');
  });

  QUnit.test('components/graph-node/add/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/graph-node/add/component.js should pass ESLint\n\n');
  });

  QUnit.test('components/graph-node/canvas/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/graph-node/canvas/component.js should pass ESLint\n\n');
  });

  QUnit.test('components/graph-node/circle/component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/graph-node/circle/component.js should pass ESLint\n\n3:8 - \'observer\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('components/graph-node/clock/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/graph-node/clock/component.js should pass ESLint\n\n');
  });

  QUnit.test('components/graph-node/cosine/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/graph-node/cosine/component.js should pass ESLint\n\n');
  });

  QUnit.test('components/graph-node/divide/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/graph-node/divide/component.js should pass ESLint\n\n');
  });

  QUnit.test('components/graph-node/graph/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/graph-node/graph/component.js should pass ESLint\n\n');
  });

  QUnit.test('components/graph-node/input/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/graph-node/input/component.js should pass ESLint\n\n');
  });

  QUnit.test('components/graph-node/integer-divide/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/graph-node/integer-divide/component.js should pass ESLint\n\n');
  });

  QUnit.test('components/graph-node/mesh/component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/graph-node/mesh/component.js should pass ESLint\n\n2:8 - \'get\' is defined but never used. (no-unused-vars)\n3:8 - \'observer\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('components/graph-node/modulo/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/graph-node/modulo/component.js should pass ESLint\n\n');
  });

  QUnit.test('components/graph-node/multiply/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/graph-node/multiply/component.js should pass ESLint\n\n');
  });

  QUnit.test('components/graph-node/node.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/graph-node/node.js should pass ESLint\n\n10:8 - \'getProperties\' is assigned a value but never used. (no-unused-vars)\n42:13 - \'shiftKey\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('components/graph-node/number-line/component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/graph-node/number-line/component.js should pass ESLint\n\n4:8 - \'NumberLineTemplate\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('components/graph-node/number/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/graph-node/number/component.js should pass ESLint\n\n');
  });

  QUnit.test('components/graph-node/output/component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/graph-node/output/component.js should pass ESLint\n\n44:44 - \'event\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('components/graph-node/sine/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/graph-node/sine/component.js should pass ESLint\n\n');
  });

  QUnit.test('components/mixins/droppable.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/mixins/droppable.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass ESLint\n\n');
  });

  QUnit.test('models/edge.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/edge.js should pass ESLint\n\n3:8 - \'get\' is defined but never used. (no-unused-vars)\n4:8 - \'set\' is defined but never used. (no-unused-vars)\n6:9 - \'assert\' is defined but never used. (no-unused-vars)\n7:8 - \'Binding\' is assigned a value but never used. (no-unused-vars)\n7:19 - \'Ember\' is not defined. (no-undef)');
  });

  QUnit.test('models/graph.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/graph.js should pass ESLint\n\n');
  });

  QUnit.test('models/node.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/node.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass ESLint\n\n');
  });

  QUnit.test('routes/graph.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/graph.js should pass ESLint\n\n');
  });

  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/index.js should pass ESLint\n\n16:9 - Parsing error: Unexpected token ... (null)');
  });

  QUnit.test('serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/application.js should pass ESLint\n\n');
  });

  QUnit.test('services/drag-coordinator.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'services/drag-coordinator.js should pass ESLint\n\n4:8 - \'get\' is defined but never used. (no-unused-vars)\n5:8 - \'observer\' is defined but never used. (no-unused-vars)\n6:8 - \'on\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('utils/array.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'utils/array.js should pass ESLint\n\n24:15 - Parsing error: Unexpected token : (null)');
  });

  QUnit.test('utils/component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'utils/component.js should pass ESLint\n\n12:16 - Parsing error: Unexpected token : (null)');
  });

  QUnit.test('utils/computed.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'utils/computed.js should pass ESLint\n\n');
  });

  QUnit.test('utils/example.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'utils/example.js should pass ESLint\n\n2:18 - Parsing error: Unexpected token : (null)');
  });

  QUnit.test('utils/map.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'utils/map.js should pass ESLint\n\n1:8 - \'Ember\' is defined but never used. (no-unused-vars)\n2:8 - \'get\' is defined but never used. (no-unused-vars)\n3:9 - \'toObject\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('utils/math.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'utils/math.js should pass ESLint\n\n');
  });

  QUnit.test('utils/object.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'utils/object.js should pass ESLint\n\n10:14 - Parsing error: Unexpected token : (null)');
  });

  QUnit.test('utils/point-sampler.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'utils/point-sampler.js should pass ESLint\n\n40:54 - Parsing error: Unexpected token : (null)');
  });
});
define('graphvas/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    _ember.default.run(application, 'destroy');
  }
});
define('graphvas/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'graphvas/tests/helpers/start-app', 'graphvas/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };

  var resolve = _ember.default.RSVP.resolve;
});
define('graphvas/tests/helpers/resolver', ['exports', 'graphvas/resolver', 'graphvas/config/environment'], function (exports, _resolver, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };

  exports.default = resolver;
});
define('graphvas/tests/helpers/start-app', ['exports', 'ember', 'graphvas/app', 'graphvas/config/environment'], function (exports, _ember, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    var attributes = _ember.default.merge({}, _environment.default.APP);
    attributes = _ember.default.merge(attributes, attrs); // use defaults, but you can override;

    return _ember.default.run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('graphvas/tests/integration/components/drag-target/component-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('drag-target', 'Integration | Component | drag target', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    assert.expect(2);

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "K+aQZk3+",
      "block": "{\"statements\":[[1,[26,[\"drag-target\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "FPGoWwQb",
      "block": "{\"statements\":[[0,\"\\n\"],[6,[\"drag-target\"],null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"locals\":[]},null],[0,\"  \"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('graphvas/tests/integration/components/graph-board/component-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('graph-board', 'Integration | Component | graph board', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    assert.expect(2);

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "IC3YlMX5",
      "block": "{\"statements\":[[1,[26,[\"graph-board\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "pduU6Csb",
      "block": "{\"statements\":[[0,\"\\n\"],[6,[\"graph-board\"],null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"locals\":[]},null],[0,\"  \"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('graphvas/tests/integration/components/graph-board/menu/component-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('graph-board/menu', 'Integration | Component | graph board/menu', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    assert.expect(2);

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "2wCfHvxE",
      "block": "{\"statements\":[[1,[26,[\"graph-board/menu\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "ViqrfOPq",
      "block": "{\"statements\":[[0,\"\\n\"],[6,[\"graph-board/menu\"],null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"locals\":[]},null],[0,\"  \"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('graphvas/tests/integration/components/graph-board/select/component-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('graph-board/select', 'Integration | Component | graph board/select', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    assert.expect(2);

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "icBbopWs",
      "block": "{\"statements\":[[1,[26,[\"graph-board/select\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "ru6jhz56",
      "block": "{\"statements\":[[0,\"\\n\"],[6,[\"graph-board/select\"],null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"locals\":[]},null],[0,\"  \"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('graphvas/tests/integration/components/graph-edge/component-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('graph-edge', 'Integration | Component | graph edge', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    assert.expect(2);

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "iqsaDQSK",
      "block": "{\"statements\":[[1,[26,[\"graph-edge\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "s9WZvrMO",
      "block": "{\"statements\":[[0,\"\\n\"],[6,[\"graph-edge\"],null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"locals\":[]},null],[0,\"  \"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('graphvas/tests/integration/components/graph-node/divide/component-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('graph-node/divide', 'Integration | Component | graph node/divide', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    assert.expect(2);

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "iYvA6C+B",
      "block": "{\"statements\":[[1,[26,[\"graph-node/divide\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "6VH9+eTt",
      "block": "{\"statements\":[[0,\"\\n\"],[6,[\"graph-node/divide\"],null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"locals\":[]},null],[0,\"  \"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('graphvas/tests/integration/components/graph-node/input/component-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('graph-node/input', 'Integration | Component | graph node/input', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    assert.expect(2);

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "Iq1xDCLC",
      "block": "{\"statements\":[[1,[26,[\"graph-node/input\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "7EJcrX36",
      "block": "{\"statements\":[[0,\"\\n\"],[6,[\"graph-node/input\"],null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"locals\":[]},null],[0,\"  \"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('graphvas/tests/integration/components/graph-node/number-line/component-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('graph-node/number-line', 'Integration | Component | graph node/number line', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    assert.expect(2);

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "Hw1FnweE",
      "block": "{\"statements\":[[1,[26,[\"graph-node/number-line\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "7L5FLl8j",
      "block": "{\"statements\":[[0,\"\\n\"],[6,[\"graph-node/number-line\"],null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"locals\":[]},null],[0,\"  \"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('graphvas/tests/integration/components/graph-node/number/component-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('graph-node/number', 'Integration | Component | graph node/number', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    assert.expect(2);

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "4I+Tx+G/",
      "block": "{\"statements\":[[1,[26,[\"graph-node/number\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "PPCZ3eeX",
      "block": "{\"statements\":[[0,\"\\n\"],[6,[\"graph-node/number\"],null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"locals\":[]},null],[0,\"  \"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('graphvas/tests/integration/components/graph-node/output/component-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('graph-node/output', 'Integration | Component | graph node/output', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    assert.expect(2);

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "q8FyiS8o",
      "block": "{\"statements\":[[1,[26,[\"graph-node/output\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "xkH8R+Os",
      "block": "{\"statements\":[[0,\"\\n\"],[6,[\"graph-node/output\"],null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"locals\":[]},null],[0,\"  \"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('graphvas/tests/integration/components/node-clock/component-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('node-clock', 'Integration | Component | node clock', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    assert.expect(2);

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "vk8QzTmj",
      "block": "{\"statements\":[[1,[26,[\"node-clock\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "f19M+wO+",
      "block": "{\"statements\":[[0,\"\\n\"],[6,[\"node-clock\"],null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"locals\":[]},null],[0,\"  \"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('graphvas/tests/integration/components/node-output/component-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('node-output', 'Integration | Component | node output', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    assert.expect(2);

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "99JsegrG",
      "block": "{\"statements\":[[1,[26,[\"node-output\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "pGjIHBTC",
      "block": "{\"statements\":[[0,\"\\n\"],[6,[\"node-output\"],null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"locals\":[]},null],[0,\"  \"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('graphvas/tests/integration/components/node-sine/component-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('node-sine', 'Integration | Component | node sine', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    assert.expect(2);

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "U/7ajaDp",
      "block": "{\"statements\":[[1,[26,[\"node-sine\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "rqnoMJTY",
      "block": "{\"statements\":[[0,\"\\n\"],[6,[\"node-sine\"],null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"locals\":[]},null],[0,\"  \"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('graphvas/tests/test-helper', ['graphvas/tests/helpers/resolver', 'ember-qunit', 'ember-cli-qunit'], function (_resolver, _emberQunit, _emberCliQunit) {
  'use strict';

  (0, _emberQunit.setResolver)(_resolver.default);
  (0, _emberCliQunit.start)();
});
define('graphvas/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/drag-target/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/drag-target/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/graph-board/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/graph-board/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/graph-board/menu/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/graph-board/menu/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/graph-board/select/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/graph-board/select/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/graph-edge/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/graph-edge/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/graph-node/divide/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/graph-node/divide/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/graph-node/input/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/graph-node/input/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/graph-node/number-line/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/graph-node/number-line/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/graph-node/number/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/graph-node/number/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/graph-node/output/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/graph-node/output/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/node-clock/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/node-clock/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/node-output/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/node-output/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/node-sine/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/node-sine/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/adapters/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/is-safe-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/is-safe-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/edge-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/edge-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/graph-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/graph-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/node-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/node-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/graph-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/graph-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/services/drag-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/drag-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/views/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/views/application-test.js should pass ESLint\n\n');
  });
});
define('graphvas/tests/unit/adapters/application-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('adapter:application', 'Unit | Adapter | application', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('graphvas/tests/unit/controllers/application-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('graphvas/tests/unit/helpers/is-safe-test', ['graphvas/helpers/is-safe', 'qunit'], function (_isSafe, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | is safe');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _isSafe.isSafe)(42);
    assert.ok(result);
  });
});
define('graphvas/tests/unit/models/edge-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('edge', 'Unit | Model | edge', {
    // Specify the other units that are required for this test.
    needs: ['model:from', 'model:to']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });
});
define('graphvas/tests/unit/models/graph-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('graph', 'Unit | Model | graph', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });
});
define('graphvas/tests/unit/models/node-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('node', 'Unit | Model | node', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });
});
define('graphvas/tests/unit/routes/application-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:application', 'Unit | Route | application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('graphvas/tests/unit/routes/graph-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:graph', 'Unit | Route | graph', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('graphvas/tests/unit/routes/index-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:index', 'Unit | Route | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('graphvas/tests/unit/serializers/application-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('application', 'Unit | Serializer | application', {
    // Specify the other units that are required for this test.
    needs: ['serializer:application']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('graphvas/tests/unit/services/drag-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('service:drag', 'Unit | Service | drag', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
define('graphvas/tests/unit/views/application-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('view:application', 'Unit | View | application');

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var view = this.subject();
    assert.ok(view);
  });
});
require('graphvas/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
