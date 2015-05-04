let Photo = DS.Model.extend({
  path: DS.attr('string'),
  collections: DS.hasMany('collections')
});

Photo.reopenClass({
  FIXTURES: [
    { id: 2, path: 'https://placekitten.com/201/201' },
    { id: 3, path: 'https://placekitten.com/202/202' },
    { id: 5, path: 'https://placekitten.com/221/221' },
    { id: 6, path: 'https://placekitten.com/205/205' },
    { id: 7, path: 'https://placekitten.com/206/206' },
    { id: 8, path: 'https://placekitten.com/207/207' },
    { id: 10, path: 'https://placekitten.com/209/209' },
    { id: 11, path: 'https://placekitten.com/210/210' },
    { id: 12, path: 'https://placekitten.com/211/211' },
    { id: 15, path: 'https://placekitten.com/214/214' },
    { id: 17, path: 'https://placekitten.com/216/216' },
    { id: 20, path: 'https://placekitten.com/222/222' }
  ]
});

export default Photo
