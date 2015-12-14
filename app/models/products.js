import DS from 'ember-data';

export default DS.Model.extend({
    AvangateId: DS.attr(),
    ProductCode: DS.attr(),
    ProductName: DS.attr()
});
