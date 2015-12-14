import Ember from 'ember';

export default Ember.Controller.extend({
    menuItems: [
        {id: 'products', route: 'products', title: 'Products'},
        {id: 'cart', route: 'cart', title: 'Cart'},
        {id: 'payment', route: 'payment', title: 'Payment'}
    ],
    defaultViewRoute: 'payment'
});
