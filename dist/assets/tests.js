define('project/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('app.js should pass jshint', function (assert) {
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('project/tests/controllers/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers');
  QUnit.test('controllers/index.js should pass jshint', function (assert) {
    assert.ok(true, 'controllers/index.js should pass jshint.');
  });
});
define('project/tests/controllers/payment.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers');
  QUnit.test('controllers/payment.js should pass jshint', function (assert) {
    assert.ok(true, 'controllers/payment.js should pass jshint.');
  });
});
define('project/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('project/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/destroy-app.js should pass jshint', function (assert) {
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('project/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'project/tests/helpers/start-app', 'project/tests/helpers/destroy-app'], function (exports, _qunit, _projectTestsHelpersStartApp, _projectTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _projectTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        (0, _projectTestsHelpersDestroyApp['default'])(this.application);

        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }
      }
    });
  };
});
define('project/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/module-for-acceptance.js should pass jshint', function (assert) {
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('project/tests/helpers/resolver', ['exports', 'ember/resolver', 'project/config/environment'], function (exports, _emberResolver, _projectConfigEnvironment) {

  var resolver = _emberResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _projectConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _projectConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('project/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/resolver.js should pass jshint', function (assert) {
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('project/tests/helpers/start-app', ['exports', 'ember', 'project/app', 'project/config/environment'], function (exports, _ember, _projectApp, _projectConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _projectConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _projectApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('project/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/start-app.js should pass jshint', function (assert) {
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('project/tests/models/menu-item.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/menu-item.js should pass jshint', function (assert) {
    assert.ok(true, 'models/menu-item.js should pass jshint.');
  });
});
define('project/tests/models/products.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/products.js should pass jshint', function (assert) {
    assert.ok(true, 'models/products.js should pass jshint.');
  });
});
define('project/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('router.js should pass jshint', function (assert) {
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('project/tests/routes/cart.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/cart.js should pass jshint', function (assert) {
    assert.ok(true, 'routes/cart.js should pass jshint.');
  });
});
define('project/tests/routes/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/index.js should pass jshint', function (assert) {
    assert.ok(true, 'routes/index.js should pass jshint.');
  });
});
define('project/tests/routes/payment.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/payment.js should pass jshint', function (assert) {
    assert.ok(true, 'routes/payment.js should pass jshint.');
  });
});
define('project/tests/routes/products.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/products.js should pass jshint', function (assert) {
    assert.ok(true, 'routes/products.js should pass jshint.');
  });
});
define('project/tests/serializers/products.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - serializers');
  QUnit.test('serializers/products.js should pass jshint', function (assert) {
    assert.ok(true, 'serializers/products.js should pass jshint.');
  });
});
define('project/tests/test-helper', ['exports', 'project/tests/helpers/resolver', 'ember-qunit'], function (exports, _projectTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_projectTestsHelpersResolver['default']);
});
define('project/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('test-helper.js should pass jshint', function (assert) {
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('project/tests/unit/adapters/product-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('adapter:product', 'Unit | Adapter | product', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('project/tests/unit/adapters/product-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/adapters');
  QUnit.test('unit/adapters/product-test.js should pass jshint', function (assert) {
    assert.ok(true, 'unit/adapters/product-test.js should pass jshint.');
  });
});
define('project/tests/unit/controllers/index-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:index', 'Unit | Controller | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('project/tests/unit/controllers/index-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/controllers');
  QUnit.test('unit/controllers/index-test.js should pass jshint', function (assert) {
    assert.ok(true, 'unit/controllers/index-test.js should pass jshint.');
  });
});
define('project/tests/unit/controllers/product-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:product', 'Unit | Controller | product', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('project/tests/unit/controllers/product-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/controllers');
  QUnit.test('unit/controllers/product-test.js should pass jshint', function (assert) {
    assert.ok(true, 'unit/controllers/product-test.js should pass jshint.');
  });
});
define('project/tests/unit/models/menu-item-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('menu-item', 'Unit | Model | menu item', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('project/tests/unit/models/menu-item-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/menu-item-test.js should pass jshint', function (assert) {
    assert.ok(true, 'unit/models/menu-item-test.js should pass jshint.');
  });
});
define('project/tests/unit/models/product-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('product', 'Unit | Model | product', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('project/tests/unit/models/product-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/product-test.js should pass jshint', function (assert) {
    assert.ok(true, 'unit/models/product-test.js should pass jshint.');
  });
});
define('project/tests/unit/routes/cart-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:cart', 'Unit | Route | cart', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('project/tests/unit/routes/cart-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/cart-test.js should pass jshint', function (assert) {
    assert.ok(true, 'unit/routes/cart-test.js should pass jshint.');
  });
});
define('project/tests/unit/routes/index-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:index', 'Unit | Route | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('project/tests/unit/routes/index-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/index-test.js should pass jshint', function (assert) {
    assert.ok(true, 'unit/routes/index-test.js should pass jshint.');
  });
});
define('project/tests/unit/routes/payment-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:payment', 'Unit | Route | payment', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('project/tests/unit/routes/payment-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/payment-test.js should pass jshint', function (assert) {
    assert.ok(true, 'unit/routes/payment-test.js should pass jshint.');
  });
});
define('project/tests/unit/routes/products-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:products', 'Unit | Route | products', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('project/tests/unit/routes/products-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/products-test.js should pass jshint', function (assert) {
    assert.ok(true, 'unit/routes/products-test.js should pass jshint.');
  });
});
define('project/tests/unit/serializers/products-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('products', 'Unit | Serializer | products', {
    // Specify the other units that are required for this test.
    needs: ['serializer:products']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('project/tests/unit/serializers/products-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/serializers');
  QUnit.test('unit/serializers/products-test.js should pass jshint', function (assert) {
    assert.ok(true, 'unit/serializers/products-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('project/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map