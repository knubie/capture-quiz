let Collection = DS.Model.extend({
  name: DS.attr('string'),
  photos: DS.hasMany('photo')
});

Collection.reopenClass({
  FIXTURES: [
    { id: 1, name: 'collection 1' },
    { id: 2, name: 'collection 2' }
  ]
});

export default Collection
