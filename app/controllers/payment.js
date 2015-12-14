import Ember from 'ember';

export default Ember.Controller.extend({
  product: {
    name: 'Broadforest',
    version: 'v4.0.1',
    code: 'broadforest-v4',
    price: {
      text: '$10.50',
      amount: 10.50,
      currency: 'USD'
    }
  }
});
