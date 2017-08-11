"use strict";



define('graphvas/adapters/application', ['exports', 'ember-local-storage/adapters/adapter'], function (exports, _adapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _adapter.default;
    }
  });
});
define('graphvas/app', ['exports', 'ember', 'graphvas/resolver', 'ember-load-initializers', 'graphvas/config/environment'], function (exports, _ember, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var App = _ember.default.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('graphvas/components/drag-target/component', ['exports', 'ember-component', 'ember-evented/on', 'graphvas/utils/component'], function (exports, _emberComponent, _on, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberComponent.default.extend({

    classNames: ['drag-target'],

    handleContextMenu: (0, _on.default)('contextMenu', function (event) {
      event.preventDefault();
      this.sendAction('on-context-menu', event);
    }),

    handleMouseDown: (0, _on.default)('mouseDown', function (event) {
      var _this = this;

      if (event.which === 3) {
        return;
      }
      this.sendAction('on-mouse-down', event);
      _component.onWindowEvent.call(this, 'mouseMove', 'mouseUp', function (event) {
        _component.offWindowEvent.call(_this, 'mouseMove', 'mouseUp');
        if (event.type === 'mousemove') {
          document.body.classList.add('is-dragging');
          _this.sendAction('on-drag-start', event);
          _component.onWindowEvent.call(_this, 'mouseMove', function (event) {
            _this.sendAction('on-drag', event);
          });
          _component.oneWindowEvent.call(_this, 'mouseUp', function (event) {
            _component.offWindowEvent.call(_this, 'mouseMove');
            document.body.classList.remove('is-dragging');
            _this.sendAction('on-drag-end', event);
          });
        } else {
          _this.sendAction('on-click', event);
        }
      });
    })

  });
});
define("graphvas/components/drag-target/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "GGshw0/V", "block": "{\"statements\":[[18,\"default\"],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"hasPartials\":false}", "meta": { "moduleName": "graphvas/components/drag-target/template.hbs" } });
});
define('graphvas/components/edit-node/component', ['exports', 'ember-component', 'ember-metal/get', 'ember-metal/set', 'ember-evented/on', 'ember-service/inject', 'graphvas/models/node', 'graphvas/components/mixins/droppable', 'graphvas/utils/computed'], function (exports, _emberComponent, _get, _set, _on, _inject, _node, _droppable, _computed) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberComponent.default.extend(_droppable.default, {

    classNames: ['edit-node'],

    store: (0, _inject.default)(),

    isDropTarget: (0, _computed.detectInstance)(_node.default, 'dragCoordinator.draggedObject'),

    dropped: function dropped() {
      (0, _get.default)(this, 'dragCoordinator.selectedObjects').invoke('destroyRecord');
    },


    actions: {
      addNode: function addNode(name) {
        var graph = (0, _get.default)(this, 'graph');
        (0, _get.default)(this, 'store').createRecord('node', { graph: graph, name: name }).save();
      }
    }

  });
});
define("graphvas/components/edit-node/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "mqMoMJ/n", "block": "{\"statements\":[[6,[\"if\"],[[28,[\"isDropTarget\"]]],null,{\"statements\":[[0,\"  \"],[11,\"div\",[]],[15,\"class\",\"edit-node--remove\"],[13],[0,\"\\n    Remove\\n  \"],[14],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"  \"],[11,\"div\",[]],[15,\"class\",\"edit-node--add\"],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"edit-node--add--button\"],[13],[0,\"\\n      Add Node\\n    \"],[14],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"edit-node--add--menu\"],[13],[0,\"\\n      \"],[11,\"div\",[]],[15,\"class\",\"edit-node--add--category\"],[13],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"edit-node--add--category--name\"],[13],[0,\"Sources\"],[14],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"edit-node--add--category--list\"],[13],[0,\"\\n          \"],[11,\"a\",[]],[15,\"href\",\"\"],[15,\"class\",\"edit-node--add--option\"],[5,[\"action\"],[[28,[null]],\"addNode\",\"graph-node/number\"]],[13],[0,\"Number\"],[14],[0,\"\\n          \"],[11,\"a\",[]],[15,\"href\",\"\"],[15,\"class\",\"edit-node--add--option\"],[5,[\"action\"],[[28,[null]],\"addNode\",\"graph-node/clock\"]],[13],[0,\"Clock\"],[14],[0,\"\\n          \"],[11,\"a\",[]],[15,\"href\",\"\"],[15,\"class\",\"edit-node--add--option\"],[5,[\"action\"],[[28,[null]],\"addNode\",\"graph-node/circle\"]],[13],[0,\"Circle\"],[14],[0,\"\\n        \"],[14],[0,\"\\n      \"],[14],[0,\"\\n      \"],[11,\"div\",[]],[15,\"class\",\"edit-node--add--category\"],[13],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"edit-node--add--category--name\"],[13],[0,\"Functions\"],[14],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"edit-node--add--category--list\"],[13],[0,\"\\n          \"],[11,\"a\",[]],[15,\"href\",\"\"],[15,\"class\",\"edit-node--add--option\"],[5,[\"action\"],[[28,[null]],\"addNode\",\"graph-node/add\"]],[13],[0,\"Add\"],[14],[0,\"\\n          \"],[11,\"a\",[]],[15,\"href\",\"\"],[15,\"class\",\"edit-node--add--option\"],[5,[\"action\"],[[28,[null]],\"addNode\",\"graph-node/multiply\"]],[13],[0,\"Multiply\"],[14],[0,\"\\n          \"],[11,\"a\",[]],[15,\"href\",\"\"],[15,\"class\",\"edit-node--add--option\"],[5,[\"action\"],[[28,[null]],\"addNode\",\"graph-node/divide\"]],[13],[0,\"Divide\"],[14],[0,\"\\n          \"],[11,\"a\",[]],[15,\"href\",\"\"],[15,\"class\",\"edit-node--add--option\"],[5,[\"action\"],[[28,[null]],\"addNode\",\"graph-node/sine\"]],[13],[0,\"Sine\"],[14],[0,\"\\n          \"],[11,\"a\",[]],[15,\"href\",\"\"],[15,\"class\",\"edit-node--add--option\"],[5,[\"action\"],[[28,[null]],\"addNode\",\"graph-node/cosine\"]],[13],[0,\"Cosine\"],[14],[0,\"\\n        \"],[14],[0,\"\\n      \"],[14],[0,\"\\n      \"],[11,\"div\",[]],[15,\"class\",\"edit-node--add--category\"],[13],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"edit-node--add--category--name\"],[13],[0,\"Displays\"],[14],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"edit-node--add--category--list\"],[13],[0,\"\\n          \"],[11,\"a\",[]],[15,\"href\",\"\"],[15,\"class\",\"edit-node--add--option\"],[5,[\"action\"],[[28,[null]],\"addNode\",\"graph-node/number-line\"]],[13],[0,\"Number Line\"],[14],[0,\"\\n          \"],[11,\"a\",[]],[15,\"href\",\"\"],[15,\"class\",\"edit-node--add--option\"],[5,[\"action\"],[[28,[null]],\"addNode\",\"graph-node/graph\"]],[13],[0,\"Graph\"],[14],[0,\"\\n          \"],[11,\"a\",[]],[15,\"href\",\"\"],[15,\"class\",\"edit-node--add--option\"],[5,[\"action\"],[[28,[null]],\"addNode\",\"graph-node/canvas\"]],[13],[0,\"Canvas\"],[14],[0,\"\\n        \"],[14],[0,\"\\n      \"],[14],[0,\"\\n    \"],[14],[0,\"\\n  \"],[14],[0,\"\\n\"]],\"locals\":[]}]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "graphvas/components/edit-node/template.hbs" } });
});
define('graphvas/components/graph-board/component', ['exports', 'ember', 'ember-component', 'ember-metal/set', 'ember-metal/get', 'ember-computed', 'ember-metal/observer', 'ember-service/inject', 'graphvas/utils/point-sampler', 'graphvas/utils/map', 'graphvas/utils/math', 'graphvas/utils/array'], function (exports, _ember, _emberComponent, _set, _get, _emberComputed, _observer, _inject, _pointSampler, _map, _math, _array) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  var Map = _ember.default.Map,
      Set = _ember.default.Set;


  function contains(rect) {
    return this.left < rect.left && this.right > rect.right && this.top < rect.top && this.bottom > rect.bottom;
  }
  function intersects(rect) {
    return !(this.right < rect.left || this.left > rect.right || this.top > rect.bottom || this.bottom < rect.top);
  }

  exports.default = _emberComponent.default.extend({

    classNames: ['graph-board'],
    classNameBindings: ['isDragging', 'isDraggingLeft:is-dragging-left:is-dragging-right'],

    store: (0, _inject.default)(),
    dragCoordinator: (0, _inject.default)(),

    board: (0, _emberComputed.default)(function () {
      return Map.create();
    }),
    isDragging: (0, _emberComputed.default)('click', 'drag', function () {
      return !!((0, _get.default)(this, 'click') && (0, _get.default)(this, 'drag'));
    }),
    isDraggingLeft: (0, _emberComputed.default)('{click,drag}.x', function () {
      return (0, _get.default)(this, 'click.x') > (0, _get.default)(this, 'drag.x');
    }),

    selectRect: (0, _emberComputed.default)('{click,drag}.{x,y}', function () {
      var _extrema = (0, _math.extrema)((0, _get.default)(this, 'click.y'), (0, _get.default)(this, 'drag.y')),
          _extrema2 = _slicedToArray(_extrema, 2),
          top = _extrema2[0],
          bottom = _extrema2[1];

      var _extrema3 = (0, _math.extrema)((0, _get.default)(this, 'click.x'), (0, _get.default)(this, 'drag.x')),
          _extrema4 = _slicedToArray(_extrema3, 2),
          left = _extrema4[0],
          right = _extrema4[1];

      return { top: top, right: right, bottom: bottom, left: left };
    }),

    selected: (0, _emberComputed.default)('selectRect', function () {
      var selectRect = (0, _get.default)(this, 'selectRect');
      if (selectRect) {
        var _context;

        var selector = (0, _get.default)(this, 'isDraggingLeft') ? contains : intersects;
        return (_context = (0, _get.default)(this, 'board'), _map.selectKeys).call(_context, function (rect) {
          return selector.call(selectRect, rect);
        });
      }
      return [];
    }),

    updateDragCoordinatorSelectedObjects: (0, _observer.default)('selectRect', function () {
      if ((0, _get.default)(this, 'isDragging')) {
        (0, _set.default)(this, 'dragCoordinator.selectedObjects', (0, _get.default)(this, 'selected'));
      }
    }),

    pointSampler: (0, _emberComputed.default)(function () {
      return _pointSampler.default.create();
    }),

    trackShake: _ember.default.on('mouseMove', function (_ref) {
      var x = _ref.pageX,
          y = _ref.pageY;

      var sampler = (0, _get.default)(this, 'pointSampler');
      sampler.push(x, y);
      var axis = (0, _get.default)(sampler, 'shakeAxis');
      if (axis) {
        var _context2;

        var selectedObjects = (0, _get.default)(this, 'dragCoordinator.selectedObjects');
        var value = (_context2 = selectedObjects.mapBy(axis), _array.average).call(_context2);
        selectedObjects.invoke('set', axis, value);
        selectedObjects.invoke('save');
      }
    }),

    actions: {
      position: function position(component) {
        var rect = component.element.getBoundingClientRect();
        (0, _get.default)(this, 'board').set((0, _get.default)(component, 'node'), rect);
      },
      startSelect: function startSelect(_ref2) {
        var x = _ref2.pageX,
            y = _ref2.pageY;

        (0, _set.default)(this, 'click', { x: x, y: y });
        (0, _set.default)(this, 'drag', { x: x, y: y });
      },
      select: function select(_ref3) {
        var x = _ref3.pageX,
            y = _ref3.pageY;

        (0, _set.default)(this, 'drag', { x: x, y: y });
      },
      endSelect: function endSelect() {
        (0, _set.default)(this, 'click', null);
        (0, _set.default)(this, 'drag', null);
      },
      showMenu: function showMenu(_ref4) {
        var x = _ref4.pageX,
            y = _ref4.pageY;

        (0, _set.default)(this, 'showMenu', true);
        (0, _set.default)(this, 'menuPosition', { x: x, y: y });
      },
      clear: function clear() {
        (0, _get.default)(this, 'dragCoordinator.selectedObjects').clear();
        (0, _set.default)(this, 'showMenu', false);
      },
      addNode: function addNode(attrs) {
        var graph = (0, _get.default)(this, 'graph');
        (0, _get.default)(this, 'store').createRecord('node', _extends({ graph: graph }, attrs)).save();
        (0, _set.default)(this, 'showMenu', false);
      }
    }

  });
});
define('graphvas/components/graph-board/menu/component', ['exports', 'ember-component', 'ember-metal/get', 'ember-evented/on'], function (exports, _emberComponent, _get2, _on) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  exports.default = _emberComponent.default.extend({

    classNames: ['graph-board--menu'],

    updatePosition: (0, _on.default)('didInsertElement', function () {
      var _get = (0, _get2.default)(this, 'position'),
          x = _get.x,
          y = _get.y;

      this.$().css('top', y + 'px').css('left', x + 'px');
    }),

    actions: {
      select: function select(name) {
        this.sendAction('on-add-node', _extends({ name: name }, (0, _get2.default)(this, 'position')));
      }
    }

  });
});
define("graphvas/components/graph-board/menu/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Yf3Xgcfm", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"graph-board--menu--category\"],[13],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"graph-board--menu--category--name\"],[13],[0,\"Sources\"],[14],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"graph-board--menu--category--list\"],[13],[0,\"\\n    \"],[11,\"a\",[]],[15,\"href\",\"\"],[15,\"class\",\"graph-board--menu--option\"],[5,[\"action\"],[[28,[null]],\"select\",\"graph-node/number\"]],[13],[0,\"Number\"],[14],[0,\"\\n    \"],[11,\"a\",[]],[15,\"href\",\"\"],[15,\"class\",\"graph-board--menu--option\"],[5,[\"action\"],[[28,[null]],\"select\",\"graph-node/clock\"]],[13],[0,\"Clock\"],[14],[0,\"\\n    \"],[11,\"a\",[]],[15,\"href\",\"\"],[15,\"class\",\"graph-board--menu--option\"],[5,[\"action\"],[[28,[null]],\"select\",\"graph-node/circle\"]],[13],[0,\"Circle\"],[14],[0,\"\\n    \"],[11,\"a\",[]],[15,\"href\",\"\"],[15,\"class\",\"graph-board--menu--option\"],[5,[\"action\"],[[28,[null]],\"select\",\"graph-node/mesh\"]],[13],[0,\"Mesh\"],[14],[0,\"\\n  \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"],[11,\"div\",[]],[15,\"class\",\"graph-board--menu--category\"],[13],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"graph-board--menu--category--name\"],[13],[0,\"Functions\"],[14],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"graph-board--menu--category--list\"],[13],[0,\"\\n    \"],[11,\"a\",[]],[15,\"href\",\"\"],[15,\"class\",\"graph-board--menu--option\"],[5,[\"action\"],[[28,[null]],\"select\",\"graph-node/add\"]],[13],[0,\"Add\"],[14],[0,\"\\n    \"],[11,\"a\",[]],[15,\"href\",\"\"],[15,\"class\",\"graph-board--menu--option\"],[5,[\"action\"],[[28,[null]],\"select\",\"graph-node/multiply\"]],[13],[0,\"Multiply\"],[14],[0,\"\\n    \"],[11,\"a\",[]],[15,\"href\",\"\"],[15,\"class\",\"graph-board--menu--option\"],[5,[\"action\"],[[28,[null]],\"select\",\"graph-node/divide\"]],[13],[0,\"Divide\"],[14],[0,\"\\n    \"],[11,\"a\",[]],[15,\"href\",\"\"],[15,\"class\",\"graph-board--menu--option\"],[5,[\"action\"],[[28,[null]],\"select\",\"graph-node/integer-divide\"]],[13],[0,\"Integer Divide\"],[14],[0,\"\\n    \"],[11,\"a\",[]],[15,\"href\",\"\"],[15,\"class\",\"graph-board--menu--option\"],[5,[\"action\"],[[28,[null]],\"select\",\"graph-node/modulo\"]],[13],[0,\"Modulo\"],[14],[0,\"\\n    \"],[11,\"a\",[]],[15,\"href\",\"\"],[15,\"class\",\"graph-board--menu--option\"],[5,[\"action\"],[[28,[null]],\"select\",\"graph-node/sine\"]],[13],[0,\"Sine\"],[14],[0,\"\\n    \"],[11,\"a\",[]],[15,\"href\",\"\"],[15,\"class\",\"graph-board--menu--option\"],[5,[\"action\"],[[28,[null]],\"select\",\"graph-node/cosine\"]],[13],[0,\"Cosine\"],[14],[0,\"\\n  \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"],[11,\"div\",[]],[15,\"class\",\"graph-board--menu--category\"],[13],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"graph-board--menu--category--name\"],[13],[0,\"Displays\"],[14],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"graph-board--menu--category--list\"],[13],[0,\"\\n    \"],[11,\"a\",[]],[15,\"href\",\"\"],[15,\"class\",\"graph-board--menu--option\"],[5,[\"action\"],[[28,[null]],\"select\",\"graph-node/number-line\"]],[13],[0,\"Number Line\"],[14],[0,\"\\n    \"],[11,\"a\",[]],[15,\"href\",\"\"],[15,\"class\",\"graph-board--menu--option\"],[5,[\"action\"],[[28,[null]],\"select\",\"graph-node/graph\"]],[13],[0,\"Graph\"],[14],[0,\"\\n    \"],[11,\"a\",[]],[15,\"href\",\"\"],[15,\"class\",\"graph-board--menu--option\"],[5,[\"action\"],[[28,[null]],\"select\",\"graph-node/canvas\"]],[13],[0,\"Canvas\"],[14],[0,\"\\n  \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "graphvas/components/graph-board/menu/template.hbs" } });
});
define('graphvas/components/graph-board/select/component', ['exports', 'ember-component', 'ember-metal/get', 'ember-metal/observer'], function (exports, _emberComponent, _get2, _observer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberComponent.default.extend({

    classNames: ['graph-board--select'],

    updateSizeAndPosition: (0, _observer.default)('rect', function () {
      var _get = (0, _get2.default)(this, 'rect'),
          top = _get.top,
          right = _get.right,
          bottom = _get.bottom,
          left = _get.left;

      this.$().width(right - left).height(bottom - top).css('top', top + 'px').css('left', left + 'px');
    })

  });
});
define("graphvas/components/graph-board/select/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "T5GOccDw", "block": "{\"statements\":[[18,\"default\"],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"hasPartials\":false}", "meta": { "moduleName": "graphvas/components/graph-board/select/template.hbs" } });
});
define("graphvas/components/graph-board/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "K/PjwIdp", "block": "{\"statements\":[[1,[33,[\"drag-target\"],null,[[\"on-drag-start\",\"on-drag\",\"on-drag-end\",\"on-click\",\"on-context-menu\",\"class\"],[\"startSelect\",\"select\",\"endSelect\",\"clear\",\"showMenu\",\"graph-board--drag-target\"]]],false],[0,\"\\n\"],[18,\"default\",[[33,[\"action\"],[[28,[null]],\"position\"],null]]],[0,\"\\n\"],[6,[\"if\"],[[28,[\"isDragging\"]]],null,{\"statements\":[[0,\"  \"],[1,[33,[\"graph-board/select\"],null,[[\"rect\"],[[28,[\"selectRect\"]]]]],false],[0,\"\\n\"]],\"locals\":[]},null],[6,[\"if\"],[[28,[\"showMenu\"]]],null,{\"statements\":[[0,\"  \"],[1,[33,[\"graph-board/menu\"],null,[[\"position\",\"on-add-node\"],[[28,[\"menuPosition\"]],\"addNode\"]]],false],[0,\"\\n\"]],\"locals\":[]},null],[11,\"ul\",[]],[15,\"class\",\"graph-board--hints\"],[13],[0,\"\\n  \"],[11,\"li\",[]],[13],[0,\"\\n    Right click to add a node.\\n  \"],[14],[0,\"\\n  \"],[11,\"li\",[]],[13],[0,\"\\n    Click and drag the node name to reposition.\\n  \"],[14],[0,\"\\n  \"],[11,\"li\",[]],[13],[0,\"\\n    Drag from an output to an input to create an connection.\\n  \"],[14],[0,\"\\n  \"],[11,\"li\",[]],[13],[0,\"\\n    Hold shift to select multiple nodes.\\n  \"],[14],[0,\"\\n  \"],[11,\"li\",[]],[13],[0,\"\\n    Drag a box to select nodes to move them as one\\n    \"],[11,\"ul\",[]],[13],[0,\"\\n      \"],[11,\"li\",[]],[13],[0,\"\\n        Dragging from the right selects intersecting nodes.\\n      \"],[14],[0,\"\\n      \"],[11,\"li\",[]],[13],[0,\"\\n        Dragging from the left selects contained nodes.\\n      \"],[14],[0,\"\\n    \"],[14],[0,\"\\n  \"],[14],[0,\"\\n  \"],[11,\"li\",[]],[13],[0,\"\\n    When a group of nodes are selected, align them vertically or horizontally by wiggling your mouse vertically or horizontally.\\n  \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"hasPartials\":false}", "meta": { "moduleName": "graphvas/components/graph-board/template.hbs" } });
});
define('graphvas/components/graph-edge/component', ['exports', 'ember-component', 'ember-metal/get', 'ember-metal/set', 'ember-computed', 'ember-evented/on', 'ember-metal/observer'], function (exports, _emberComponent, _get, _set, _emberComputed, _on, _observer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberComponent.default.extend({

    classNames: ['graph-edge'],

    input: (0, _emberComputed.alias)('edge.input'),
    output: (0, _emberComputed.alias)('edge.output'),
    from: (0, _emberComputed.alias)('edge.from'),
    to: (0, _emberComputed.alias)('edge.to'),

    canMakeConnection: (0, _emberComputed.and)('input', 'output', 'from.component', 'to.component'),

    manageConnection: (0, _on.default)('init', (0, _observer.default)('canMakeConnection', function () {
      if ((0, _get.default)(this, 'canMakeConnection')) {
        var from = (0, _get.default)(this, 'from.component');
        var output = (0, _get.default)(this, 'output');
        this.update();
        from.addObserver(output, this, 'update');
      } else {
        this.teardownConnection();
      }
    })),

    teardownConnection: (0, _on.default)('willDestroyElement', function () {
      var from = (0, _get.default)(this, 'from.component');
      var output = (0, _get.default)(this, 'output');
      if (from) from.removeObserver(output, this, 'update');
    }),

    update: function update() {
      var from = (0, _get.default)(this, 'from.component');
      var value = (0, _get.default)(from, (0, _get.default)(this, 'output'));
      var to = (0, _get.default)(this, 'to.component');
      (0, _set.default)(to, (0, _get.default)(this, 'input'), value);
    }
  });
});
define("graphvas/components/graph-edge/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "qjrnXmKY", "block": "{\"statements\":[[11,\"svg\",[]],[15,\"width\",\"1440\"],[15,\"height\",\"900\"],[13],[0,\"\\n  \"],[11,\"line\",[]],[16,\"x1\",[28,[\"edge\",\"fromX\"]],null],[16,\"y1\",[28,[\"edge\",\"fromY\"]],null],[16,\"x2\",[28,[\"edge\",\"toX\"]],null],[16,\"y2\",[28,[\"edge\",\"toY\"]],null],[13],[14],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "graphvas/components/graph-edge/template.hbs" } });
});
define('graphvas/components/graph-node/add/component', ['exports', 'ember-computed', 'ember-metal/get', 'graphvas/components/graph-node/node'], function (exports, _emberComputed, _get, _node) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _node.default.extend({

    name: 'Add',

    inputs: ['a', 'b'],
    outputs: ['c'],

    c: (0, _emberComputed.default)('a', 'b', function () {
      return (0, _get.default)(this, 'a') + (0, _get.default)(this, 'b');
    })

  });
});
define('graphvas/components/graph-node/canvas/component', ['exports', 'ember-computed', 'ember-metal/get', 'ember-metal/observer', 'ember-runloop', 'graphvas/components/graph-node/node', 'graphvas/components/graph-node/canvas/template'], function (exports, _emberComputed, _get, _observer, _emberRunloop, _node, _template) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _node.default.extend({

    template: _template.default,

    name: 'Canvas',

    inputs: ['drawable'],

    canvas: (0, _emberComputed.default)(function () {
      if (this.$()) {
        return this.$('canvas')[0];
      }
      (0, _emberRunloop.schedule)('afterRender', this, 'notifyPropertyChange', 'canvas');
    }),

    drawContext: (0, _emberComputed.default)('canvas', function () {
      var canvas = (0, _get.default)(this, 'canvas');
      return canvas ? canvas.getContext('2d') : canvas;
    }),

    draw: (0, _observer.default)('drawable', 'canvas', function () {
      var context = (0, _get.default)(this, 'drawContext');
      var canvas = (0, _get.default)(this, 'canvas');
      if (canvas) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        (0, _get.default)(this, 'drawable').draw(context);
      }
    })

  });
});
define("graphvas/components/graph-node/canvas/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "xq8YjrzI", "block": "{\"statements\":[[19,\"components/graph-node\"],[0,\"\\n\"],[11,\"canvas\",[]],[13],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":true}", "meta": { "moduleName": "graphvas/components/graph-node/canvas/template.hbs" } });
});
define('graphvas/components/graph-node/circle/component', ['exports', 'ember-computed', 'ember-metal/get', 'ember-metal/observer', 'graphvas/components/graph-node/node'], function (exports, _emberComputed, _get, _observer, _node) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var TWOPI = Math.PI * 2;

  exports.default = _node.default.extend({

    name: 'Circle',

    inputs: ['x', 'y', 'radius'],
    outputs: ['drawable'],

    drawable: (0, _emberComputed.default)('x', 'y', 'radius', function () {
      var x = (0, _get.default)(this, 'x');
      var y = (0, _get.default)(this, 'y');
      var radius = (0, _get.default)(this, 'radius');
      return {
        draw: function draw(context) {
          context.beginPath();
          context.arc(x, y, radius, 0, TWOPI);
          context.fill();
        }
      };
    })

  });
});
define('graphvas/components/graph-node/clock/component', ['exports', 'ember', 'ember-computed', 'ember-runloop', 'graphvas/components/graph-node/node'], function (exports, _ember, _emberComputed, _emberRunloop, _node) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Clock = _ember.default.Object.extend({
    time: (0, _emberComputed.default)(function () {
      var _this = this;

      requestAnimationFrame(function () {
        return (0, _emberRunloop.default)(function () {
          return _this.notifyPropertyChange('time');
        });
      });
      return Date.now();
    })
  });

  exports.default = _node.default.extend({

    name: 'Clock',

    outputs: ['time'],

    clock: Clock.create(),

    time: (0, _emberComputed.alias)('clock.time')

  });
});
define('graphvas/components/graph-node/cosine/component', ['exports', 'ember-computed', 'ember-metal/get', 'graphvas/components/graph-node/node'], function (exports, _emberComputed, _get, _node) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _node.default.extend({

    name: 'Cosine',

    inputs: ['x'],
    outputs: ['y'],

    y: (0, _emberComputed.default)('x', function () {
      return Math.cos((0, _get.default)(this, 'x'));
    })

  });
});
define('graphvas/components/graph-node/divide/component', ['exports', 'ember-computed', 'ember-metal/get', 'graphvas/components/graph-node/node'], function (exports, _emberComputed, _get, _node) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _node.default.extend({

    name: 'Divide',

    inputs: ['dividend', 'divisor'],
    outputs: ['quotient'],

    quotient: (0, _emberComputed.default)('dividend', 'divisor', function () {
      return (0, _get.default)(this, 'dividend') / (0, _get.default)(this, 'divisor');
    })

  });
});
define('graphvas/components/graph-node/graph/component', ['exports', 'ember-metal/get', 'ember-metal/observer', 'graphvas/components/graph-node/node'], function (exports, _get, _observer, _node) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _node.default.extend({

    name: 'Graph',

    inputs: ['x', 'y'],

    updatePosition: (0, _observer.default)('x', 'y', function () {
      if (this.$()) {
        this.$('.graph-node--graph--position').css('left', (0, _get.default)(this, 'x') * 50 + 50 + '%').css('top', (0, _get.default)(this, 'y') * 50 + 50 + '%');
      }
    })

  });
});
define("graphvas/components/graph-node/graph/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "0FpWSzMO", "block": "{\"statements\":[[19,\"components/graph-node\"],[0,\"\\n\"],[11,\"div\",[]],[15,\"class\",\"graph-node--graph--graph\"],[13],[0,\"\\n  \"],[11,\"span\",[]],[15,\"class\",\"graph-node--graph--position\"],[13],[14],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":true}", "meta": { "moduleName": "graphvas/components/graph-node/graph/template.hbs" } });
});
define('graphvas/components/graph-node/input/component', ['exports', 'ember-component', 'ember-computed', 'ember-metal/observer', 'ember-metal/get', 'ember-evented/on', 'ember-service/inject', 'ember-metal/set', 'ember-runloop', 'graphvas/models/edge', 'graphvas/components/mixins/droppable'], function (exports, _emberComponent, _emberComputed, _observer, _get, _on, _inject, _set, _emberRunloop, _edge, _droppable) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberComponent.default.extend(_droppable.default, {

    classNames: ['graph-node--input'],

    store: (0, _inject.default)(),

    edge: (0, _emberComputed.default)('node.inputs.[]', 'input', function () {
      return (0, _get.default)(this, 'node.inputs').findBy('input', (0, _get.default)(this, 'input'));
    }),

    setEdgeToPosition: (0, _on.default)('didInsertElement', (0, _observer.default)('edge', 'node.{x,y}', function () {
      var _this = this;

      (0, _emberRunloop.next)(function () {
        var edge = (0, _get.default)(_this, 'edge');
        if (edge) {
          var _$$offset = _this.$().offset(),
              top = _$$offset.top,
              left = _$$offset.left;

          (0, _set.default)(edge, 'toX', left + 10);
          (0, _set.default)(edge, 'toY', top + 13);
        }
      });
    })),

    isDropTarget: (0, _emberComputed.default)('dragCoordinator.draggedObject', function () {
      var draggedObject = (0, _get.default)(this, 'dragCoordinator.draggedObject');
      var isEdge = _edge.default.detectInstance(draggedObject);
      return isEdge && !(0, _get.default)(draggedObject, 'input');
    }),

    initializeDrag: (0, _on.default)('mouseDown', function () {
      var node = (0, _get.default)(this, 'node');
      var input = (0, _get.default)(this, 'input');
      var edge = (0, _get.default)(node, 'inputs').findBy('input', input);
      if (edge) {
        (0, _set.default)(edge, 'output', null);
        (0, _set.default)(edge, 'from', null);
      } else {
        edge = (0, _get.default)(this, 'store').createRecord('edge', {
          to: node,
          input: input,
          graph: (0, _get.default)(node, 'graph')
        });
      }
      var dragCoordinator = (0, _get.default)(this, 'dragCoordinator');
      dragCoordinator.createDrag(edge, function (x, y) {
        (0, _set.default)(edge, 'fromX', x);
        (0, _set.default)(edge, 'fromY', y);
      });
      dragCoordinator.one('dragEnd', function () {
        (0, _emberRunloop.next)(function () {
          if (!(0, _get.default)(edge, 'output')) {
            edge.destroyRecord();
          }
        });
      });
    }),

    dropped: function dropped(edge) {
      (0, _set.default)(edge, 'to', (0, _get.default)(this, 'node'));
      (0, _set.default)(edge, 'input', (0, _get.default)(this, 'input'));
      edge.save();
    }
  });
});
define("graphvas/components/graph-node/input/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "9hrmtsnd", "block": "{\"statements\":[[1,[28,[null,\"input\"]],false],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "graphvas/components/graph-node/input/template.hbs" } });
});
define('graphvas/components/graph-node/integer-divide/component', ['exports', 'ember-computed', 'ember-metal/get', 'graphvas/components/graph-node/node'], function (exports, _emberComputed, _get, _node) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _node.default.extend({

    name: 'Integer Divide',

    inputs: ['dividend', 'divisor'],
    outputs: ['quotient', 'remainder'],

    quotient: (0, _emberComputed.default)('dividend', 'divisor', function () {
      return Math.floor((0, _get.default)(this, 'dividend') / (0, _get.default)(this, 'divisor'));
    }),

    remainder: (0, _emberComputed.default)('dividend', 'divisor', function () {
      return (0, _get.default)(this, 'dividend') % (0, _get.default)(this, 'divisor');
    })

  });
});
define('graphvas/components/graph-node/mesh/component', ['exports', 'ember-computed', 'ember-metal/get', 'ember-metal/observer', 'graphvas/components/graph-node/node'], function (exports, _emberComputed, _get, _observer, _node) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _node.default.extend({

    name: 'Mesh',

    outputs: ['mesh'],

    mesh: (0, _emberComputed.default)(function () {
      var arr = new Array(100);
      for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
          arr[i * 10 + j] = { x: i * 10 + 10, y: j * 10 + 10 };
        }
      }
      return {
        draw: function draw(context) {
          arr.forEach(function (_ref) {
            var x = _ref.x,
                y = _ref.y;

            context.beginPath();
            context.arc(x, y, 0.5, 0, Math.PI * 2);
            context.fill();
          });
        }
      };
    })

  });
});
define('graphvas/components/graph-node/modulo/component', ['exports', 'ember-computed', 'ember-metal/get', 'graphvas/components/graph-node/node'], function (exports, _emberComputed, _get, _node) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _node.default.extend({

    name: 'Modulo',

    inputs: ['dividend', 'divisor'],
    outputs: ['modulo'],

    modulo: (0, _emberComputed.default)('dividend', 'divisor', function () {
      return (0, _get.default)(this, 'dividend') % (0, _get.default)(this, 'divisor');
    })

  });
});
define('graphvas/components/graph-node/multiply/component', ['exports', 'ember-computed', 'ember-metal/get', 'graphvas/components/graph-node/node'], function (exports, _emberComputed, _get, _node) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _node.default.extend({

    name: 'Multiply',

    inputs: ['multiplier', 'multiplicand'],
    outputs: ['product'],

    product: (0, _emberComputed.default)('multiplier', 'multiplicand', function () {
      return (0, _get.default)(this, 'multiplier') * (0, _get.default)(this, 'multiplicand');
    })

  });
});
define('graphvas/components/graph-node/node', ['exports', 'ember', 'ember-component', 'ember-metal/get', 'ember-metal/observer', 'ember-computed', 'ember-evented/on', 'ember-metal/set', 'ember-service/inject'], function (exports, _ember, _emberComponent, _get, _observer, _emberComputed, _on, _set, _inject) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var getProperties = _ember.default.getProperties;
  exports.default = _emberComponent.default.extend({

    classNames: ['graph-node'],
    classNameBindings: ['isDragging', 'isSelected', 'inputs.length:has-inputs', 'outputs.length:has-outputs'],

    dragCoordinator: (0, _inject.default)(),

    layoutName: 'components/graph-node',

    inputs: [],
    outputs: [],

    isSelected: (0, _emberComputed.default)('dragCoordinator.selectedObjects.[]', function () {
      var node = (0, _get.default)(this, 'node');
      return (0, _get.default)(this, 'dragCoordinator.selectedObjects').contains(node);
    }),

    setComponent: (0, _on.default)('init', function () {
      (0, _set.default)(this, 'node.component', this);
    }),

    setPosition: (0, _on.default)('didInsertElement', (0, _observer.default)('node.{x,y}', function () {
      this.element.style.left = (0, _get.default)(this, 'node.x') + 'px';
      this.element.style.top = (0, _get.default)(this, 'node.y') + 'px';
      this.sendAction('on-position', this);
    })),

    actions: {
      select: function select(_ref) {
        var shiftKey = _ref.shiftKey;

        var node = (0, _get.default)(this, 'node');
        if (!(0, _get.default)(this, 'isSelected')) {
          if (event.shiftKey) {
            (0, _get.default)(this, 'dragCoordinator.selectedObjects').addObject(node);
          } else {
            (0, _set.default)(this, 'dragCoordinator.selectedObjects', [node]);
          }
        } else if (event.shiftKey) {
          (0, _get.default)(this, 'dragCoordinator.selectedObjects').removeObject(node);
        }
      },
      startPosition: function startPosition(event) {
        (0, _set.default)(this, 'lastX', event.pageX);
        (0, _set.default)(this, 'lastY', event.pageY);
        this.send('select', event);
      },
      position: function position(_ref2) {
        var x = _ref2.pageX,
            y = _ref2.pageY;

        var lastX = (0, _get.default)(this, 'lastX');
        var lastY = (0, _get.default)(this, 'lastY');
        var selectedObjects = (0, _get.default)(this, 'dragCoordinator.selectedObjects');
        selectedObjects.invoke('incrementProperty', 'x', x - lastX);
        selectedObjects.invoke('incrementProperty', 'y', y - lastY);
        (0, _set.default)(this, 'lastX', x);
        (0, _set.default)(this, 'lastY', y);
      },
      endPosition: function endPosition() {
        (0, _set.default)(this, 'isDragging', false);
        (0, _get.default)(this, 'dragCoordinator.selectedObjects').invoke('save');
      },
      destroy: function destroy() {
        var node = (0, _get.default)(this, 'node');
        node.destroyRecord();
        (0, _get.default)(this, 'dragCoordinator.selectedObjects').removeObject(node);
      }
    }

  });
});
define('graphvas/components/graph-node/number-line/component', ['exports', 'ember-metal/get', 'ember-metal/observer', 'graphvas/components/graph-node/node', 'graphvas/components/graph-node/number-line/template'], function (exports, _get, _observer, _node, _template) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _node.default.extend({

    name: 'Number Line',

    inputs: ['value'],

    updatePosition: (0, _observer.default)('value', function () {
      if (this.$()) {
        this.$('.graph-node--number-line--position').css('left', (0, _get.default)(this, 'value') * 50 + 50 + '%');
      }
    })

  });
});
define("graphvas/components/graph-node/number-line/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "EYTu2He2", "block": "{\"statements\":[[19,\"components/graph-node\"],[0,\"\\n\"],[11,\"div\",[]],[15,\"class\",\"graph-node--number-line--line\"],[13],[0,\"\\n  \"],[11,\"span\",[]],[15,\"class\",\"graph-node--number-line--position\"],[13],[14],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":true}", "meta": { "moduleName": "graphvas/components/graph-node/number-line/template.hbs" } });
});
define('graphvas/components/graph-node/number/component', ['exports', 'ember-computed', 'ember-evented/on', 'ember-metal/observer', 'ember-metal/set', 'ember-metal/get', 'graphvas/components/graph-node/node'], function (exports, _emberComputed, _on, _observer, _set, _get, _node) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _node.default.extend({

    name: 'Number',

    outputs: ['value'],

    value: (0, _emberComputed.alias)('node.state.value'),

    updateValue: (0, _on.default)('input', function () {
      (0, _set.default)(this, 'value', parseFloat(this.$('input').val()));
    }),

    updateInput: (0, _on.default)('focusOut', 'didInsertElement', (0, _observer.default)('value', function () {
      if (this.$()) {
        var input = this.$('input');
        if (!input.is(':focus')) {
          input.val((0, _get.default)(this, 'value'));
        }
      }
    }))

  });
});
define("graphvas/components/graph-node/number/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "qqqrJujI", "block": "{\"statements\":[[19,\"components/graph-node\"],[0,\"\\n\"],[11,\"input\",[]],[15,\"class\",\"graph-node--number--input\"],[13],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":true}", "meta": { "moduleName": "graphvas/components/graph-node/number/template.hbs" } });
});
define('graphvas/components/graph-node/output/component', ['exports', 'ember-component', 'ember-computed', 'ember-metal/observer', 'ember-metal/get', 'ember-evented/on', 'ember-service/inject', 'ember-metal/set', 'ember-runloop', 'graphvas/models/edge', 'graphvas/components/mixins/droppable'], function (exports, _emberComponent, _emberComputed, _observer, _get, _on, _inject, _set, _emberRunloop, _edge, _droppable) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberComponent.default.extend(_droppable.default, {

    classNames: ['graph-node--output'],

    store: (0, _inject.default)(),

    attributeBindings: ['output:data-output'],

    edges: (0, _emberComputed.default)('node.outputs.[]', 'output', function () {
      return (0, _get.default)(this, 'node.outputs').filterBy('output', (0, _get.default)(this, 'output'));
    }),

    setEdgesFromPosition: (0, _on.default)('didInsertElement', (0, _observer.default)('node.{x,y}', 'edges.[]', function () {
      var _this = this;

      (0, _emberRunloop.next)(function () {
        var _$$offset = _this.$().offset(),
            top = _$$offset.top,
            left = _$$offset.left;

        var width = _this.$().outerWidth();
        var x = left + width - 10,
            y = top + 13;

        (0, _get.default)(_this, 'edges').forEach(function (edge) {
          (0, _set.default)(edge, 'fromX', x);
          (0, _set.default)(edge, 'fromY', y);
        });
      });
    })),

    isDropTarget: (0, _emberComputed.default)('dragCoordinator.draggedObject', function () {
      var draggedObject = (0, _get.default)(this, 'dragCoordinator.draggedObject');
      var isEdge = _edge.default.detectInstance(draggedObject);
      return isEdge && !(0, _get.default)(draggedObject, 'output');
    }),

    initializeDrag: (0, _on.default)('mouseDown', function (event) {
      var edge = (0, _get.default)(this, 'store').createRecord('edge', {
        from: (0, _get.default)(this, 'node'),
        output: (0, _get.default)(this, 'output'),
        graph: (0, _get.default)(this, 'node.graph')
      });
      var dragCoordinator = (0, _get.default)(this, 'dragCoordinator');
      dragCoordinator.createDrag(edge, function (x, y) {
        (0, _set.default)(edge, 'toX', x);
        (0, _set.default)(edge, 'toY', y);
      });
      dragCoordinator.one('dragEnd', function () {
        (0, _emberRunloop.next)(function () {
          if (!(0, _get.default)(edge, 'input')) {
            edge.destroyRecord();
          }
        });
      });
    }),

    dropped: function dropped(edge) {
      (0, _set.default)(edge, 'from', (0, _get.default)(this, 'node'));
      (0, _set.default)(edge, 'output', (0, _get.default)(this, 'output'));
      edge.save();
    }
  });
});
define("graphvas/components/graph-node/output/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ANaZzeWJ", "block": "{\"statements\":[[1,[26,[\"output\"]],false],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "graphvas/components/graph-node/output/template.hbs" } });
});
define('graphvas/components/graph-node/sine/component', ['exports', 'ember-computed', 'ember-metal/get', 'graphvas/components/graph-node/node'], function (exports, _emberComputed, _get, _node) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _node.default.extend({

    name: 'Sine',

    inputs: ['x'],
    outputs: ['y'],

    y: (0, _emberComputed.default)('x', function () {
      return Math.sin((0, _get.default)(this, 'x'));
    })

  });
});
define("graphvas/components/graph-node/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "8ifOMMnZ", "block": "{\"statements\":[[6,[\"drag-target\"],null,[[\"on-drag-start\",\"on-drag\",\"on-drag-end\",\"on-mouse-down\",\"class\"],[\"startPosition\",\"position\",\"endPosition\",\"select\",\"graph-node--header\"]],{\"statements\":[[0,\"    \"],[11,\"span\",[]],[15,\"class\",\"graph-node--header--name\"],[13],[1,[26,[\"name\"]],false],[14],[0,\"\\n    \"],[11,\"a\",[]],[15,\"href\",\"\"],[15,\"class\",\"graph-node--header--destroy\"],[5,[\"action\"],[[28,[null]],\"destroy\"]],[13],[0,\"\\n      ×\\n    \"],[14],[0,\"\\n\"]],\"locals\":[]},null],[11,\"div\",[]],[15,\"class\",\"graph-node--connections\"],[13],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"graph-node--inputs\"],[13],[0,\"\\n\"],[6,[\"each\"],[[28,[\"inputs\"]]],null,{\"statements\":[[0,\"      \"],[1,[33,[\"graph-node/input\"],null,[[\"node\",\"input\"],[[28,[\"node\"]],[28,[\"inpoot\"]]]]],false],[0,\"\\n\"]],\"locals\":[\"inpoot\"]},null],[0,\"  \"],[14],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"graph-node--outputs\"],[13],[0,\"\\n\"],[6,[\"each\"],[[28,[\"outputs\"]]],null,{\"statements\":[[0,\"      \"],[1,[33,[\"graph-node/output\"],null,[[\"node\",\"output\"],[[28,[\"node\"]],[28,[\"output\"]]]]],false],[0,\"\\n\"]],\"locals\":[\"output\"]},null],[0,\"  \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"],[18,\"default\"],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"hasPartials\":false}", "meta": { "moduleName": "graphvas/components/graph-node/template.hbs" } });
});
define('graphvas/components/mixins/droppable', ['exports', 'ember-metal/mixin', 'ember-metal/get', 'ember-evented/on', 'ember-service/inject', 'ember-metal/set'], function (exports, _mixin, _get, _on, _inject, _set) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _mixin.default.create({

    classNamesBindings: ['isDraggedOver'],

    dragCoordinator: (0, _inject.default)(),

    isDropTarget: false,

    classNameBindings: ['isDraggedOver'],

    setIsDraggedOver: (0, _on.default)('mouseEnter', function () {
      if ((0, _get.default)(this, 'isDropTarget')) {
        (0, _set.default)(this, 'isDraggedOver', true);
        (0, _get.default)(this, 'dragCoordinator').one('dragEnd', this, 'dropped');
      }
    }),

    clearIsDraggedOver: (0, _on.default)('mouseLeave', function () {
      (0, _set.default)(this, 'isDraggedOver', false);
      (0, _get.default)(this, 'dragCoordinator').off('dragEnd', this, 'dropped');
    })

  });
});
define('graphvas/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define('graphvas/controllers/application', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Controller.extend({});
});
define('graphvas/helpers/and', ['exports', 'ember', 'ember-truth-helpers/helpers/and'], function (exports, _ember, _and) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (_ember.default.Helper) {
    forExport = _ember.default.Helper.helper(_and.andHelper);
  } else if (_ember.default.HTMLBars.makeBoundHelper) {
    forExport = _ember.default.HTMLBars.makeBoundHelper(_and.andHelper);
  }

  exports.default = forExport;
});
define('graphvas/helpers/app-version', ['exports', 'ember', 'graphvas/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _ember, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  var version = _environment.default.APP.version;
  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (hash.hideSha) {
      return version.match(_regexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_regexp.shaRegExp)[0];
    }

    return version;
  }

  exports.default = _ember.default.Helper.helper(appVersion);
});
define('graphvas/helpers/eq', ['exports', 'ember', 'ember-truth-helpers/helpers/equal'], function (exports, _ember, _equal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (_ember.default.Helper) {
    forExport = _ember.default.Helper.helper(_equal.equalHelper);
  } else if (_ember.default.HTMLBars.makeBoundHelper) {
    forExport = _ember.default.HTMLBars.makeBoundHelper(_equal.equalHelper);
  }

  exports.default = forExport;
});
define('graphvas/helpers/gt', ['exports', 'ember', 'ember-truth-helpers/helpers/gt'], function (exports, _ember, _gt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (_ember.default.Helper) {
    forExport = _ember.default.Helper.helper(_gt.gtHelper);
  } else if (_ember.default.HTMLBars.makeBoundHelper) {
    forExport = _ember.default.HTMLBars.makeBoundHelper(_gt.gtHelper);
  }

  exports.default = forExport;
});
define('graphvas/helpers/gte', ['exports', 'ember', 'ember-truth-helpers/helpers/gte'], function (exports, _ember, _gte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (_ember.default.Helper) {
    forExport = _ember.default.Helper.helper(_gte.gteHelper);
  } else if (_ember.default.HTMLBars.makeBoundHelper) {
    forExport = _ember.default.HTMLBars.makeBoundHelper(_gte.gteHelper);
  }

  exports.default = forExport;
});
define('graphvas/helpers/is-after', ['exports', 'ember', 'graphvas/config/environment', 'ember-moment/helpers/is-after'], function (exports, _ember, _environment, _isAfter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _isAfter.default.extend({
    globalAllowEmpty: !!_ember.default.get(_environment.default, 'moment.allowEmpty')
  });
});
define('graphvas/helpers/is-array', ['exports', 'ember', 'ember-truth-helpers/helpers/is-array'], function (exports, _ember, _isArray) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (_ember.default.Helper) {
    forExport = _ember.default.Helper.helper(_isArray.isArrayHelper);
  } else if (_ember.default.HTMLBars.makeBoundHelper) {
    forExport = _ember.default.HTMLBars.makeBoundHelper(_isArray.isArrayHelper);
  }

  exports.default = forExport;
});
define('graphvas/helpers/is-before', ['exports', 'ember', 'graphvas/config/environment', 'ember-moment/helpers/is-before'], function (exports, _ember, _environment, _isBefore) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _isBefore.default.extend({
    globalAllowEmpty: !!_ember.default.get(_environment.default, 'moment.allowEmpty')
  });
});
define('graphvas/helpers/is-between', ['exports', 'ember', 'graphvas/config/environment', 'ember-moment/helpers/is-between'], function (exports, _ember, _environment, _isBetween) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _isBetween.default.extend({
    globalAllowEmpty: !!_ember.default.get(_environment.default, 'moment.allowEmpty')
  });
});
define('graphvas/helpers/is-equal', ['exports', 'ember-truth-helpers/helpers/is-equal'], function (exports, _isEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isEqual.default;
    }
  });
  Object.defineProperty(exports, 'isEqual', {
    enumerable: true,
    get: function () {
      return _isEqual.isEqual;
    }
  });
});
define('graphvas/helpers/is-same-or-after', ['exports', 'ember', 'graphvas/config/environment', 'ember-moment/helpers/is-same-or-after'], function (exports, _ember, _environment, _isSameOrAfter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _isSameOrAfter.default.extend({
    globalAllowEmpty: !!_ember.default.get(_environment.default, 'moment.allowEmpty')
  });
});
define('graphvas/helpers/is-same-or-before', ['exports', 'ember', 'graphvas/config/environment', 'ember-moment/helpers/is-same-or-before'], function (exports, _ember, _environment, _isSameOrBefore) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _isSameOrBefore.default.extend({
    globalAllowEmpty: !!_ember.default.get(_environment.default, 'moment.allowEmpty')
  });
});
define('graphvas/helpers/is-same', ['exports', 'ember', 'graphvas/config/environment', 'ember-moment/helpers/is-same'], function (exports, _ember, _environment, _isSame) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _isSame.default.extend({
    globalAllowEmpty: !!_ember.default.get(_environment.default, 'moment.allowEmpty')
  });
});
define('graphvas/helpers/lt', ['exports', 'ember', 'ember-truth-helpers/helpers/lt'], function (exports, _ember, _lt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (_ember.default.Helper) {
    forExport = _ember.default.Helper.helper(_lt.ltHelper);
  } else if (_ember.default.HTMLBars.makeBoundHelper) {
    forExport = _ember.default.HTMLBars.makeBoundHelper(_lt.ltHelper);
  }

  exports.default = forExport;
});
define('graphvas/helpers/lte', ['exports', 'ember', 'ember-truth-helpers/helpers/lte'], function (exports, _ember, _lte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (_ember.default.Helper) {
    forExport = _ember.default.Helper.helper(_lte.lteHelper);
  } else if (_ember.default.HTMLBars.makeBoundHelper) {
    forExport = _ember.default.HTMLBars.makeBoundHelper(_lte.lteHelper);
  }

  exports.default = forExport;
});
define('graphvas/helpers/moment-add', ['exports', 'ember', 'graphvas/config/environment', 'ember-moment/helpers/moment-add'], function (exports, _ember, _environment, _momentAdd) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _momentAdd.default.extend({
    globalAllowEmpty: !!_ember.default.get(_environment.default, 'moment.allowEmpty')
  });
});
define('graphvas/helpers/moment-calendar', ['exports', 'ember', 'graphvas/config/environment', 'ember-moment/helpers/moment-calendar'], function (exports, _ember, _environment, _momentCalendar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _momentCalendar.default.extend({
    globalAllowEmpty: !!_ember.default.get(_environment.default, 'moment.allowEmpty')
  });
});
define('graphvas/helpers/moment-diff', ['exports', 'ember', 'graphvas/config/environment', 'ember-moment/helpers/moment-diff'], function (exports, _ember, _environment, _momentDiff) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _momentDiff.default.extend({
    globalAllowEmpty: !!_ember.default.get(_environment.default, 'moment.allowEmpty')
  });
});
define('graphvas/helpers/moment-duration', ['exports', 'ember-moment/helpers/moment-duration'], function (exports, _momentDuration) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentDuration.default;
    }
  });
});
define('graphvas/helpers/moment-format', ['exports', 'ember', 'graphvas/config/environment', 'ember-moment/helpers/moment-format'], function (exports, _ember, _environment, _momentFormat) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _momentFormat.default.extend({
    globalAllowEmpty: !!_ember.default.get(_environment.default, 'moment.allowEmpty')
  });
});
define('graphvas/helpers/moment-from-now', ['exports', 'ember', 'graphvas/config/environment', 'ember-moment/helpers/moment-from-now'], function (exports, _ember, _environment, _momentFromNow) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _momentFromNow.default.extend({
    globalAllowEmpty: !!_ember.default.get(_environment.default, 'moment.allowEmpty')
  });
});
define('graphvas/helpers/moment-from', ['exports', 'ember', 'graphvas/config/environment', 'ember-moment/helpers/moment-from'], function (exports, _ember, _environment, _momentFrom) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _momentFrom.default.extend({
    globalAllowEmpty: !!_ember.default.get(_environment.default, 'moment.allowEmpty')
  });
});
define('graphvas/helpers/moment-subtract', ['exports', 'ember', 'graphvas/config/environment', 'ember-moment/helpers/moment-subtract'], function (exports, _ember, _environment, _momentSubtract) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _momentSubtract.default.extend({
    globalAllowEmpty: !!_ember.default.get(_environment.default, 'moment.allowEmpty')
  });
});
define('graphvas/helpers/moment-to-date', ['exports', 'ember', 'graphvas/config/environment', 'ember-moment/helpers/moment-to-date'], function (exports, _ember, _environment, _momentToDate) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _momentToDate.default.extend({
    globalAllowEmpty: !!_ember.default.get(_environment.default, 'moment.allowEmpty')
  });
});
define('graphvas/helpers/moment-to-now', ['exports', 'ember', 'graphvas/config/environment', 'ember-moment/helpers/moment-to-now'], function (exports, _ember, _environment, _momentToNow) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _momentToNow.default.extend({
    globalAllowEmpty: !!_ember.default.get(_environment.default, 'moment.allowEmpty')
  });
});
define('graphvas/helpers/moment-to', ['exports', 'ember', 'graphvas/config/environment', 'ember-moment/helpers/moment-to'], function (exports, _ember, _environment, _momentTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _momentTo.default.extend({
    globalAllowEmpty: !!_ember.default.get(_environment.default, 'moment.allowEmpty')
  });
});
define('graphvas/helpers/moment-unix', ['exports', 'ember-moment/helpers/unix'], function (exports, _unix) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _unix.default;
    }
  });
  Object.defineProperty(exports, 'unix', {
    enumerable: true,
    get: function () {
      return _unix.unix;
    }
  });
});
define('graphvas/helpers/moment', ['exports', 'ember-moment/helpers/moment'], function (exports, _moment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _moment.default;
    }
  });
});
define('graphvas/helpers/not-eq', ['exports', 'ember', 'ember-truth-helpers/helpers/not-equal'], function (exports, _ember, _notEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (_ember.default.Helper) {
    forExport = _ember.default.Helper.helper(_notEqual.notEqualHelper);
  } else if (_ember.default.HTMLBars.makeBoundHelper) {
    forExport = _ember.default.HTMLBars.makeBoundHelper(_notEqual.notEqualHelper);
  }

  exports.default = forExport;
});
define('graphvas/helpers/not', ['exports', 'ember', 'ember-truth-helpers/helpers/not'], function (exports, _ember, _not) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (_ember.default.Helper) {
    forExport = _ember.default.Helper.helper(_not.notHelper);
  } else if (_ember.default.HTMLBars.makeBoundHelper) {
    forExport = _ember.default.HTMLBars.makeBoundHelper(_not.notHelper);
  }

  exports.default = forExport;
});
define('graphvas/helpers/now', ['exports', 'ember-moment/helpers/now'], function (exports, _now) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _now.default;
    }
  });
});
define('graphvas/helpers/or', ['exports', 'ember', 'ember-truth-helpers/helpers/or'], function (exports, _ember, _or) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (_ember.default.Helper) {
    forExport = _ember.default.Helper.helper(_or.orHelper);
  } else if (_ember.default.HTMLBars.makeBoundHelper) {
    forExport = _ember.default.HTMLBars.makeBoundHelper(_or.orHelper);
  }

  exports.default = forExport;
});
define('graphvas/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('graphvas/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('graphvas/helpers/unix', ['exports', 'ember-moment/helpers/unix'], function (exports, _unix) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _unix.default;
    }
  });
  Object.defineProperty(exports, 'unix', {
    enumerable: true,
    get: function () {
      return _unix.unix;
    }
  });
});
define('graphvas/helpers/xor', ['exports', 'ember', 'ember-truth-helpers/helpers/xor'], function (exports, _ember, _xor) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (_ember.default.Helper) {
    forExport = _ember.default.Helper.helper(_xor.xorHelper);
  } else if (_ember.default.HTMLBars.makeBoundHelper) {
    forExport = _ember.default.HTMLBars.makeBoundHelper(_xor.xorHelper);
  }

  exports.default = forExport;
});
define('graphvas/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'graphvas/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _config$APP = _environment.default.APP,
      name = _config$APP.name,
      version = _config$APP.version;
  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('graphvas/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('graphvas/initializers/data-adapter', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('graphvas/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('graphvas/initializers/export-application-global', ['exports', 'ember', 'graphvas/config/environment'], function (exports, _ember, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember.default.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('graphvas/initializers/injectStore', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('graphvas/initializers/local-storage-adapter', ['exports', 'ember-local-storage/initializers/local-storage-adapter'], function (exports, _localStorageAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _localStorageAdapter.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _localStorageAdapter.initialize;
    }
  });
});
define('graphvas/initializers/store', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('graphvas/initializers/transforms', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('graphvas/initializers/truth-helpers', ['exports', 'ember', 'ember-truth-helpers/utils/register-helper', 'ember-truth-helpers/helpers/and', 'ember-truth-helpers/helpers/or', 'ember-truth-helpers/helpers/equal', 'ember-truth-helpers/helpers/not', 'ember-truth-helpers/helpers/is-array', 'ember-truth-helpers/helpers/not-equal', 'ember-truth-helpers/helpers/gt', 'ember-truth-helpers/helpers/gte', 'ember-truth-helpers/helpers/lt', 'ember-truth-helpers/helpers/lte'], function (exports, _ember, _registerHelper, _and, _or, _equal, _not, _isArray, _notEqual, _gt, _gte, _lt, _lte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() /* container, application */{

    // Do not register helpers from Ember 1.13 onwards, starting from 1.13 they
    // will be auto-discovered.
    if (_ember.default.Helper) {
      return;
    }

    (0, _registerHelper.registerHelper)('and', _and.andHelper);
    (0, _registerHelper.registerHelper)('or', _or.orHelper);
    (0, _registerHelper.registerHelper)('eq', _equal.equalHelper);
    (0, _registerHelper.registerHelper)('not', _not.notHelper);
    (0, _registerHelper.registerHelper)('is-array', _isArray.isArrayHelper);
    (0, _registerHelper.registerHelper)('not-eq', _notEqual.notEqualHelper);
    (0, _registerHelper.registerHelper)('gt', _gt.gtHelper);
    (0, _registerHelper.registerHelper)('gte', _gte.gteHelper);
    (0, _registerHelper.registerHelper)('lt', _lt.ltHelper);
    (0, _registerHelper.registerHelper)('lte', _lte.lteHelper);
  }

  exports.default = {
    name: 'truth-helpers',
    initialize: initialize
  };
});
define("graphvas/instance-initializers/ember-data", ["exports", "ember-data/instance-initializers/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('graphvas/models/edge', ['exports', 'ember-data/model', 'ember-data/attr', 'ember-metal/get', 'ember-metal/set', 'ember-data/relationships', 'ember-metal/utils'], function (exports, _model, _attr, _get, _set, _relationships, _utils) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _Ember = Ember,
      Binding = _Ember.Binding;
  exports.default = _model.default.extend({

    input: (0, _attr.default)('string'),
    output: (0, _attr.default)('string'),

    from: (0, _relationships.belongsTo)('node', { autoSave: true, inverse: 'outputs' }),
    to: (0, _relationships.belongsTo)('node', { autoSave: true, inverse: 'inputs' }),
    graph: (0, _relationships.belongsTo)('graph', { autoSave: true, inverse: 'edges' }),

    fromX: 0,
    fromY: 0,
    toX: 0,
    toY: 0

  });
});
define('graphvas/models/graph', ['exports', 'ember-data/model', 'ember-data/attr', 'ember-data/relationships'], function (exports, _model, _attr, _relationships) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _model.default.extend({

    name: (0, _attr.default)('string'),
    createdAt: (0, _attr.default)('date'),

    nodes: (0, _relationships.hasMany)('node', { dependent: 'destroy', inverse: 'graph' }),
    edges: (0, _relationships.hasMany)('edge', { dependent: 'destroy', inverse: 'graph' })

  });
});
define('graphvas/models/node', ['exports', 'ember-data/model', 'ember-data/attr', 'ember-data/relationships'], function (exports, _model, _attr, _relationships) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _model.default.extend({

    name: (0, _attr.default)('string'),
    x: (0, _attr.default)('number', { defaultValue: 0 }),
    y: (0, _attr.default)('number', { defaultValue: 0 }),
    state: (0, _attr.default)({ defaultValue: function defaultValue() {
        return {};
      } }),

    inputs: (0, _relationships.hasMany)('edge', { dependent: 'destroy', inverse: 'to' }),
    outputs: (0, _relationships.hasMany)('edge', { dependent: 'destroy', inverse: 'from' }),
    graph: (0, _relationships.belongsTo)('graph', { autoSave: true, inverse: 'nodes' })

  });
});
define('graphvas/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('graphvas/router', ['exports', 'ember', 'graphvas/config/environment'], function (exports, _ember, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Router = _ember.default.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('graph', { path: '/:graph_id' });
  });

  exports.default = Router;
});
define('graphvas/routes/application', ['exports', 'ember', 'ember-route', 'ember-metal/get'], function (exports, _ember, _emberRoute, _get) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var all = _ember.default.RSVP.all;
  exports.default = _emberRoute.default.extend({
    beforeModel: function beforeModel() {
      return all([(0, _get.default)(this, 'store').findAll('node'), (0, _get.default)(this, 'store').findAll('edge')]);
    }
  });
});
define('graphvas/routes/graph', ['exports', 'ember-route'], function (exports, _emberRoute) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberRoute.default.extend({});
});
define('graphvas/routes/index', ['exports', 'ember', 'ember-metal/get', 'graphvas/utils/example'], function (exports, _ember, _get, _example) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  exports.default = _ember.default.Route.extend({
    model: function model() {
      return this.store.findAll('graph');
    },


    actions: {
      create: function create() {
        var _this = this;

        var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var graph = this.store.createRecord('graph', _extends({
          createdAt: new Date()
        }, attrs));
        graph.save().then(function () {
          (0, _get.default)(graph, 'edges').invoke('save');
          (0, _get.default)(graph, 'nodes').invoke('save');
        }).then(function () {
          return _this.transitionTo('graph', (0, _get.default)(graph, 'id'));
        });
      },
      createExample: function createExample() {
        this.send('create', (0, _example.default)(this.store));
      },
      destroy: function destroy(graph) {
        graph.destroyRecord();
      }
    }

  });
});
define('graphvas/serializers/application', ['exports', 'ember-local-storage/serializers/serializer'], function (exports, _serializer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _serializer.default;
    }
  });
});
define('graphvas/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define('graphvas/services/drag-coordinator', ['exports', 'ember-evented', 'ember-service', 'ember-metal/get', 'ember-metal/observer', 'ember-evented/on', 'ember-metal/set', 'ember-computed'], function (exports, _emberEvented, _emberService, _get, _observer, _on, _set, _emberComputed) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var $ = Ember.$;
  exports.default = _emberService.default.extend(_emberEvented.default, {

    isDragging: (0, _emberComputed.bool)('draggedObject'),

    draggedObject: null,

    selectedObjects: [],

    createDrag: function createDrag(object, drag) {
      var _this = this;

      (0, _set.default)(this, 'draggedObject', object);
      $('body').addClass('is-dragging');
      this.trigger('dragStart', object);
      $(window).on('mousemove.' + this, function (event) {
        drag(event.pageX, event.pageY);
        _this.trigger('drag', event);
      });
      $(window).one('mouseup', function () {
        $(window).off('mousemove.' + _this);
        (0, _set.default)(_this, 'draggedObject', null);
        $('body').removeClass('is-dragging');
        _this.trigger('dragEnd', object);
      });
    }
  });
});
define('graphvas/services/moment', ['exports', 'ember', 'graphvas/config/environment', 'ember-moment/services/moment'], function (exports, _ember, _environment, _moment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _moment.default.extend({
    defaultFormat: _ember.default.get(_environment.default, 'moment.outputFormat')
  });
});
define("graphvas/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "qung7Qfo", "block": "{\"statements\":[[1,[26,[\"outlet\"]],false],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "graphvas/templates/application.hbs" } });
});
define("graphvas/templates/graph", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "z0MudY/Q", "block": "{\"statements\":[[6,[\"graph-board\"],null,[[\"graph\"],[[28,[\"model\"]]]],{\"statements\":[[6,[\"each\"],[[28,[\"model\",\"nodes\"]]],null,{\"statements\":[[0,\"    \"],[1,[33,[\"component\"],[[28,[\"node\",\"name\"]]],[[\"node\",\"on-position\"],[[28,[\"node\"]],[28,[\"position\"]]]]],false],[0,\"\\n\"]],\"locals\":[\"node\"]},null],[6,[\"each\"],[[28,[\"model\",\"edges\"]]],null,{\"statements\":[[0,\"    \"],[1,[33,[\"graph-edge\"],null,[[\"edge\"],[[28,[\"edge\"]]]]],false],[0,\"\\n\"]],\"locals\":[\"edge\"]},null]],\"locals\":[\"position\"]},null]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "graphvas/templates/graph.hbs" } });
});
define("graphvas/templates/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "1m79LjB4", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"graph-index\"],[13],[0,\"\\n\"],[6,[\"each\"],[[28,[\"model\"]]],null,{\"statements\":[[6,[\"link-to\"],[\"graph\",[28,[\"graph\"]]],[[\"class\"],[\"graph-index--graph\"]],{\"statements\":[[0,\"      \"],[11,\"div\",[]],[15,\"class\",\"graph-index--graph-id\"],[13],[0,\"\\n        \"],[1,[28,[\"graph\",\"id\"]],false],[0,\"\\n      \"],[14],[0,\"\\n      \"],[11,\"div\",[]],[15,\"class\",\"graph-index--graph-created-at\"],[13],[0,\"\\n        \"],[1,[33,[\"moment-from-now\"],[[28,[\"graph\",\"createdAt\"]]],null],false],[0,\"\\n      \"],[14],[0,\"\\n      \"],[11,\"button\",[]],[15,\"class\",\"graph-index--graph-destroy\"],[5,[\"action\"],[[28,[null]],\"destroy\",[28,[\"graph\"]]]],[13],[0,\"\\n        ×\\n      \"],[14],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[\"graph\"]},null],[0,\"  \"],[11,\"div\",[]],[15,\"class\",\"graph-index--actions\"],[13],[0,\"\\n    \"],[11,\"button\",[]],[15,\"class\",\"graph-index--create\"],[5,[\"action\"],[[28,[null]],\"create\"]],[13],[0,\"New\"],[14],[0,\"\\n    \"],[11,\"button\",[]],[15,\"class\",\"graph-index--create\"],[5,[\"action\"],[[28,[null]],\"createExample\"]],[13],[0,\"Example\"],[14],[0,\"\\n  \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "graphvas/templates/index.hbs" } });
});
define('graphvas/utils/array', ['exports', 'ember-metal/get'], function (exports, _get) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.toArray = toArray;
  exports.sum = sum;
  exports.max = max;
  exports.min = min;
  exports.extrema = extrema;
  exports.pairs = pairs;
  exports.average = average;
  exports.last = last;
  exports.butLast = butLast;
  exports.toSentence = toSentence;
  exports.index = index;
  exports.indexBy = indexBy;
  exports.without = without;
  exports.toObject = toObject;
  function toArray() {
    return Array.prototype.slice.call(this);
  }

  function sum() {
    var sum = 0;
    for (var i = 0; i < this.length; i++) {
      sum += this[i];
    }
    return sum;
  }

  function max() {
    return Math.max.apply(null, this);
  }

  function min() {
    return Math.min.apply(null, this);
  }

  function extrema() {
    return [min.call(this), max.call(this)];
  }

  function pairs() {
    var ret = [];
    for (var i = 0; i < this.length - 1; i++) {
      ret.push([this[i], this[i + 1]]);
    }
    return ret;
  }

  function average() {
    return sum.call(this) / this.length;
  }

  function last() {
    return this[this.length - 1];
  }

  function butLast() {
    return this.slice(0, -1);
  }

  function toSentence() {
    if (this.length < 3) {
      return this.join(' and ');
    } else {
      return butLast.call(this).join(', ') + ', and ' + last.call(this);
    }
  }

  function index(indexer) {
    return this.reduce(function (object, item) {
      object[indexer(item)] = item;
      return object;
    }, {});
  }

  function indexBy(key) {
    return index.call(this, function (item) {
      return (0, _get.default)(item, key);
    });
  }

  function without() {
    for (var _len = arguments.length, objects = Array(_len), _key = 0; _key < _len; _key++) {
      objects[_key] = arguments[_key];
    }

    return objects.reduce(function (arr, object) {
      return arr.without(object);
    }, this);
  }

  function toObject(fn) {
    var object = {};
    this.forEach(function (item) {
      return object[item] = fn(item);
    });
    return object;
  }
});
define('graphvas/utils/component', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.onWindowEvent = onWindowEvent;
  exports.oneWindowEvent = oneWindowEvent;
  exports.offWindowEvent = offWindowEvent;
  var $ = _ember.default.$;


  var $window = $(window);

  function namespaceEvents(events) {
    var _this = this;

    return events.map(function (event) {
      return event.toLowerCase() + '.' + _this;
    }).join(' ');
  }

  function onWindowEvent() {
    for (var _len = arguments.length, events = Array(_len), _key = 0; _key < _len; _key++) {
      events[_key] = arguments[_key];
    }

    var fn = events.pop();
    events = namespaceEvents.call(this, events);
    $window.on(events, fn);
  }

  function oneWindowEvent() {
    for (var _len2 = arguments.length, events = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      events[_key2] = arguments[_key2];
    }

    var fn = events.pop();
    events = namespaceEvents.call(this, events);
    $window.one(events, fn);
  }

  function offWindowEvent() {
    for (var _len3 = arguments.length, events = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      events[_key3] = arguments[_key3];
    }

    events = namespaceEvents.call(this, events);
    $window.off(events);
  }
});
define('graphvas/utils/computed', ['exports', 'ember-computed', 'ember-metal/get'], function (exports, _emberComputed, _get) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.detectInstance = detectInstance;
  exports.initsTo = initsTo;
  exports.cast = cast;
  function detectInstance(detector, key) {
    return (0, _emberComputed.default)(key, function () {
      return detector.detectInstance((0, _get.default)(this, key));
    });
  }

  function initsTo(key) {
    return (0, _emberComputed.default)(function getInitialValue() {
      return (0, _get.default)(this, key);
    });
  }

  function cast(key, caster) {
    return (0, _emberComputed.default)(key, function () {
      return caster((0, _get.default)(this, key));
    });
  }
});
define('graphvas/utils/example', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = example;
  function example(store) {
    var create = store.createRecord.bind(store);
    var edges = [];
    var clock = create('node', {
      name: 'graph-node/clock', state: { value: 1000 },
      x: 100, y: 50
    });
    var period = create('node', {
      name: 'graph-node/number', state: { value: 1000 },
      x: 50, y: 150
    });
    var modulo = create('node', {
      name: 'graph-node/modulo',
      x: 250, y: 100
    });
    var divide = create('node', {
      name: 'graph-node/divide',
      x: 250, y: 200
    });
    var twopi = create('node', {
      name: 'graph-node/number', state: { value: Math.PI * 2 },
      x: 300, y: 300
    });
    var multiply = create('node', {
      name: 'graph-node/multiply',
      x: 500, y: 250
    });
    var sine = create('node', {
      name: 'graph-node/sine',
      x: 750, y: 300
    });
    var cosine = create('node', {
      name: 'graph-node/cosine',
      x: 750, y: 200
    });
    var graph = create('node', {
      name: 'graph-node/graph',
      x: 900, y: 200
    });
    edges.push(create('edge', {
      output: 'time',
      input: 'dividend',
      from: clock,
      to: modulo
    }));
    edges.push(create('edge', {
      output: 'value',
      input: 'divisor',
      from: period,
      to: modulo
    }));
    edges.push(create('edge', {
      output: 'value',
      input: 'divisor',
      from: period,
      to: divide
    }));
    edges.push(create('edge', {
      output: 'modulo',
      input: 'dividend',
      from: modulo,
      to: divide
    }));
    edges.push(create('edge', {
      output: 'quotient',
      input: 'multiplier',
      from: divide,
      to: multiply
    }));
    edges.push(create('edge', {
      output: 'value',
      input: 'multiplicand',
      from: twopi,
      to: multiply
    }));
    edges.push(create('edge', {
      output: 'product',
      input: 'x',
      from: multiply,
      to: cosine
    }));
    edges.push(create('edge', {
      output: 'product',
      input: 'x',
      from: multiply,
      to: sine
    }));
    edges.push(create('edge', {
      output: 'y',
      input: 'x',
      from: cosine,
      to: graph
    }));
    edges.push(create('edge', {
      output: 'y',
      input: 'y',
      from: sine,
      to: graph
    }));
    return {
      nodes: [clock, period, modulo, divide, twopi, multiply, sine, cosine, graph],
      edges: edges
    };
  }
});
define('graphvas/utils/map', ['exports', 'ember', 'ember-metal/get', 'graphvas/utils/array'], function (exports, _ember, _get, _array) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.selectKeys = selectKeys;
  function selectKeys(fn) {
    var selected = [];
    this.forEach(function (value, key) {
      if (fn(value, key)) {
        selected.push(key);
      }
    });
    return selected;
  }
});
define("graphvas/utils/math", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.extrema = extrema;
  var min = Math.min,
      max = Math.max;
  function extrema() {
    return [min.apply(undefined, arguments), max.apply(undefined, arguments)];
  }
});
define('graphvas/utils/object', ['exports', 'ember', 'ember-metal/get', 'graphvas/utils/array'], function (exports, _ember, _get, _array) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.keys = keys;
  exports.map = map;
  exports.extract = extract;
  exports.filter = filter;
  exports.filterBy = filterBy;
  exports.assign = assign;
  exports.deleteProperty = deleteProperty;
  exports.fetch = fetch;
  function keys() {
    return Object.keys(this);
  }

  function map(fn) {
    var _context,
        _this = this;

    return (_context = keys.call(this), _array.toObject).call(_context, function (key) {
      return fn(_this[key]);
    });
  }

  function extract(keys) {
    var _this2 = this;

    return _array.toObject.call(keys, function (key) {
      return deleteProperty.call(_this2, key);
    });
  }

  function filter(fn) {
    var _context2,
        _this3 = this;

    return (_context2 = keys.call(this).filter(function (key) {
      return fn(key, _this3[key]);
    }), _array.toObject).call(_context2, function (key) {
      return _this3[key];
    });
  }

  function filterBy(property) {
    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    return filter.call(this, function (_, v) {
      return (0, _get.default)(v, property) === value;
    });
  }

  function assign() {
    var _this4 = this;

    for (var _len = arguments.length, updates = Array(_len), _key = 0; _key < _len; _key++) {
      updates[_key] = arguments[_key];
    }

    updates.forEach(function (update) {
      if (update) _ember.default.merge(_this4, update);
    });
    return this;
  }

  function deleteProperty(name) {
    var ret = this[name];
    delete this[name];
    return ret;
  }

  function fetch(property, fn) {
    if (this.hasOwnProperty(property)) {
      return this[property];
    }
    this[property] = fn(this, property);
    return this[property];
  }
});
define('graphvas/utils/point-sampler', ['exports', 'ember', 'ember-computed', 'ember-metal/get', 'graphvas/utils/array'], function (exports, _ember, _emberComputed, _get2, _array) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  function distance(_ref) {
    var x = _ref.x,
        y = _ref.y;

    var dx = this.x - x;
    var dy = this.y - y;
    return Math.sqrt(dx * dx + dy * dy);
  }

  var SAMPLES = 20;
  var NET_DISTANCE = 150;
  var TOTAL_DISTANCE = 250;
  var MAJOR_AXIS = 100;
  var MINOR_AXIS = 50;

  exports.default = _ember.default.Object.extend({

    points: (0, _emberComputed.default)(function () {
      return [];
    }),

    push: function push(x, y) {
      var points = (0, _get2.default)(this, 'points');
      points.unshiftObject({ x: x, y: y });
      if (points.length > SAMPLES) {
        points.popObject();
      }
    },


    shakeAxis: (0, _emberComputed.default)('points.[]', function () {
      if ((0, _get2.default)(this, 'netDistance') < NET_DISTANCE && (0, _get2.default)(this, 'totalDistance') > TOTAL_DISTANCE) {
        var _get = (0, _get2.default)(this, 'boundingBox'),
            width = _get.width,
            height = _get.height;

        if (width > MAJOR_AXIS && height < MINOR_AXIS) return 'y';
        if (height > MAJOR_AXIS && width < MINOR_AXIS) return 'x';
      }
    }),

    boundingBox: (0, _emberComputed.default)('points.[]', function () {
      var _context;

      var _ref2 = (_context = (0, _get2.default)(this, 'points').mapBy('x'), _array.extrema).call(_context),
          _ref3 = _slicedToArray(_ref2, 2),
          minX = _ref3[0],
          maxX = _ref3[1];

      var _ref4 = (_context = (0, _get2.default)(this, 'points').mapBy('y'), _array.extrema).call(_context),
          _ref5 = _slicedToArray(_ref4, 2),
          minY = _ref5[0],
          maxY = _ref5[1];

      return { width: maxX - minX, height: maxY - minY };
    }),

    netDistance: (0, _emberComputed.default)('points.[]', function () {
      var _context2;

      var points = (0, _get2.default)(this, 'points');
      return (_context2 = points.slice(1).map(function (p) {
        var _context3;

        return (_context3 = points[0], distance).call(_context3, p);
      }), _array.max).call(_context2);
    }),

    totalDistance: (0, _emberComputed.default)('points.[]', function () {
      var _context4;

      var points = (0, _get2.default)(this, 'points');
      return (_context4 = _array.pairs.call(points).map(function (_ref6) {
        var _ref7 = _slicedToArray(_ref6, 2),
            p1 = _ref7[0],
            p2 = _ref7[1];

        return distance.call(p1, p2);
      }), _array.sum).call(_context4);
    })

  });
});


define('graphvas/config/environment', ['ember'], function(Ember) {
  var prefix = 'graphvas';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("graphvas/app")["default"].create({"name":"graphvas","version":"0.0.0+706208d9"});
}
//# sourceMappingURL=graphvas.map
