export default Ember.Controller.extend({
  needs: "application",
  actions: {
    remove: function(photoId) {
      console.log('photoId: ' + photoId);
      console.log(this.get('model').get('id'));
      var store = this.store
        , collection = this.get('model');
      store.find('photo', photoId).then(function(photo) {
        photo.get('collections').removeObject(collection);
        collection.get('photos').removeObject(photo);
        photo.save();
        collection.save();
      });
    },
    deleteCollection: function() {
      var collection = this.get('model');
      if (confirm('Do you really want to delete this collection?')) {
        collection.destroyRecord();
        this.transitionTo('index');
      }
    }
  }
});
