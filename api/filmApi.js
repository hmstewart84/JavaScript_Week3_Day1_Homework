var Films = require('../client/src/models/films')

var FilmApi = function(app) {

  var films = new Films;

  app.get('/api/films', function(req, res) {
    res.json({ data: films });
  });


  //app comes from express (an object that express returns to us)
  app.post('/api/films', function(req, res) {
    films.push(req.body.film); //now has a body object cos we installed body parser.
    res.json({ data: films });
  });



  app.get('/api/films/:id', function(req, res) {
    var foundFilm = req.params.id;  //req and params are objects which has a property of id
    res.json({ data: films[foundFilm] }); //params is stuff that we put in the url
  });                                     //not using params to get new stuff


  app.delete('/api/films/:id', function(req, res) {
    films.splice(req.params.id, 2);
    res.json({ data: films });
  });


  app.put('/api/films/:id', function(req, res) {  //update
    films[req.params.id] = req.body.film;  //body object is a delivery of new stuff unlike params.
    res.json({ data: films });
  });

  app.post('/api/films', function(req, res) {
    var newFilm = (req.body.film);
    films.push(newFilm);
    res.json({data: films});

  })


}

module.exports = FilmApi;