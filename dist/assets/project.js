"use strict";
/* jshint ignore:start */

/* jshint ignore:end */

define('project/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'project/config/environment'], function (exports, _ember, _emberResolver, _emberLoadInitializers, _projectConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _projectConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _projectConfigEnvironment['default'].podModulePrefix,
    Resolver: _emberResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _projectConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('project/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'project/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _projectConfigEnvironment) {

  var name = _projectConfigEnvironment['default'].APP.name;
  var version = _projectConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('project/controllers/array', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('project/controllers/object', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('project/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'project/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _projectConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_projectConfigEnvironment['default'].APP.name, _projectConfigEnvironment['default'].APP.version)
  };
});
define('project/initializers/export-application-global', ['exports', 'ember', 'project/config/environment'], function (exports, _ember, _projectConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_projectConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _projectConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_projectConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('project/router', ['exports', 'ember', 'project/config/environment'], function (exports, _ember, _projectConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _projectConfigEnvironment['default'].locationType
  });

  Router.map(function () {});

  exports['default'] = Router;
});
define("project/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 0
          }
        },
        "moduleName": "project/templates/application.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h2");
        dom.setAttribute(el1, "id", "title");
        var el2 = dom.createTextNode("Welcome to Ember");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [3, 0], [3, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('project/config/environment', ['ember'], function(Ember) {
  var prefix = 'project';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (!runningTests) {
  require("project/app")["default"].create({"name":"project","version":"0.0.0+c0d17d44"});
}

/* jshint ignore:end */
//# sourceMappingURL=project.map