var Films = require('../client/src/models/films')

var FilmApi = function(app) {

  var films = new Films;

  app.get('/films', function(req, res) {
    res.json({ data: films });
  });



  app.post('/films', function(req, res) {
    films.push(req.body.film); //now has a body object cos we installed body parser.
    res.json({ data: films });
  });



  app.get('/films/:id', function(req, res) {
    var foundFilm = req.params.id;  //req and params are objects which has a property of id
    res.json({ data: films[foundFilm] }); 
  });


  app.delete('/films/:id', function(req, res) {
    films.splice(req.params.id, 2);
    res.json({ data: films });
  });


  app.put('/films/:id', function(req, res) {  //update
    films[req.params.id] = req.body.film;
    res.json({ data: films });
  });

  app.post('/api/films', function(req, res) {
    var newFilm = (req.body.film);
    films.push(newFilm);
    res.json({data: films});

  })


}

module.exports = FilmApi;