import Ember from 'ember'; // default export package.
//Since most modules will use something from Ember, you will see this important statement as the first line in our modules over and over again.

var Song = Ember.Object.extend({
  /* Song extends Ember.Object which is the base call of most Ember
  classes. When we write Ember.Object.extend we create a subclass
  of Ember.Object so that our new class will inherit all the
  functionality Ember.Object defines, such as getting and setting
  properties. The body of the new class defines its instance
  properties and methods.

  Instances of the class can be created through its create method, which is what we do inside the model
  function, creating three instances of Song. If you'd like a like a deep(er) dive on class and instance
  properties, hit up the relevant section in the Encoure */
  title: '',
  band: '',
  rating: 0
});

export default Ember.Route.extend({
  model: function() {

    var blackDog = Song.create({
    title: 'Black Dog',
    band: 'Led Zeppelin',
    rating: 3
    });

    var yellowLedbetter = Song.create({
    title: 'Yellow Ledbetter',
    band: 'Pearl Jam',
    rating: 4
    });

    var pretender = Song.create({
    title: 'The Pretender',
    band: 'Foo Fighters',
    rating: 2
    });

    return [blackDog, yellowLedbetter, pretender];
  }
});
