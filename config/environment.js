/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    contentSecurityPolicyHeader: 'Content-Security-Policy',
    contentSecurityPolicy: {
      'default-src': "'self' http://mocksvc.mulesoft.com http://localhost:4200 http://localhost:8080 ",
      'style-src': "'self' 'unsafe-inline' 'unsafe-eval' http://localhost:4200 http://localhost:8080 https://db.tt https://dl.dropboxusercontent.com",
      'script-src': "'self' 'unsafe-inline' 'unsafe-eval' http://localhost:4200 http://localhost:8080 https://db.tt https://dl.dropboxusercontent.com",
      'connect-src': "'self' http://mocksvc.mulesoft.com http://localhost:4200 http://localhost:8080 "
    },
    modulePrefix: 'project',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      remoteHost: 'http://localhost:8080/http://mocksvc.mulesoft.com/mocks/544e979e-bca0-4a3e-9889-6e44585ba38b/mocks/09d76e54-7a15-45f0-97d7-5e554911a61e/mocks/f26459fc-9fb2-4946-9457-42392deae00a'
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
