let Collection = DS.Model.extend({
  name: DS.attr('string'),
  photos: DS.hasMany('photo')
});

Collection.reopenClass({ FIXTURES: [] });

export default Collection
