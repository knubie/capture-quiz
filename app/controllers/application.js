export default Ember.Controller.extend({
  actions: {
    openModal: function(photoId) {
    },
    addToCollection: function(collectionId, photoId) {
      console.log('collectionId: ' + collectionId);
      console.log('photoId: ' + photoId);
      console.log(this.get('photos'));
      var store = this.store;
      store.find('collection', collectionId).then(function(collection) {
        store.find('photo', photoId).then(function(photo) {
          photo.get('collections').pushObject(collection);
          collection.get('photos').pushObject(photo);
          photo.save();
          collection.save();
        });
      });
    },
    createAndAddToCollection: function(collectionName, photoId) {
      var store = this.store;
      var collection = store.createRecord('collection', {
        name: collectionName
      });
      store.find('photo', photoId).then(function(photo) {
        photo.get('collections').pushObject(collection);
        collection.get('photos').pushObject(photo);
        photo.save();
        collection.save();
      });
    }
  }
});
