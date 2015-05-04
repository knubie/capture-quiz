export default Ember.Component.extend({
  click: function(e) {
    if ($(e.target).text() == 'Add to collection') {
      var collectionId = $('select.select-collection option:selected').val();
      var collectionName = $('input.new-collection').val();
      var photoId = parseInt($('#add-to-collection-modal').attr('data-photo-id'));
      if ($('input.new-collection').val() !== '') {
        this.get('controller').send('createAndAddToCollection', collectionName, photoId);

      } else if ($('select.select-collection').val() !== 'default') {
        this.send('addToCollection', collectionId, photoId);
      }
    }
  },
  actions: {
    addToCollection: function(collectionId, photoId) {
      var store = this.get('targetObject.store');
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
      var store = this.get('targetObject.store');
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
