import DS from 'ember-data';

let App;

App.MenuItem = DS.Model.extend({
    route: DS.attr('string'),
    title: DS.attr('string')
});

App.MenuItem.reopenClass({
    FIXTURES: [
        {route: 'products', title: 'Products'},
        {route: 'cart', title: 'Cart'},
        {route: 'payment', title: 'Payment'}
    ]
});

export default App.MenuItem;
