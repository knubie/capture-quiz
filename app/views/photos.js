export default Ember.View.extend({
  click: function(e) {
    if ($(e.target).hasClass('add-to-collection-link')) {
      $('#add-to-collection-modal').modal('show');
      $('#add-to-collection-modal').attr('data-photo-id', $(e.target.parentNode).attr('data-photo-id'));
    } else if ($(e.target).hasClass('remove-from-collection-link')) {
      console.log(this);
      var photoId = $(e.target.parentNode).attr('data-photo-id');
      this.get('controller').send('remove', photoId);

    }
  }
});

