export default Ember.Route.extend({
  model: function() {
    return this.store.find('photo');
  },
  setupController: function(controller, model) {
    controller.set('photos', model);
  }
});
