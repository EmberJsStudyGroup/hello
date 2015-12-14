import DS from 'ember-data';
import config from './../config/environment';

var ApplicationAdapter = DS.RESTAdapter.extend({
    namespace: '3.0',
    host: config.APP.remoteHost,
    headers: {
        'Access-Control-Allow-Origin': '*'
    },
    corsWithCredentials: true
});

export default ApplicationAdapter;