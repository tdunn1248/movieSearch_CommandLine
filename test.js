const chai = require('chai')
const expect = chai.expect
const movieSearch = require('./movie-search.js')


describe('movieSearch', function() {
  it('should be a function that returns an array of movies', function(done) {
    expect(movieSearch).to.be.a('function')
    movieSearch('findingnemo', function(error, results) {
      expect(results).to.be.an('array')
      expect(results).to.equal(['Finding Nemo (2003)',
       'Finding Nemo (2003) (Video Game)',
       'Finding Neverland (2004)',
       'Finding Nemo (2012) (TV Episode)  - Season 1 | Episode 5  - James\'s Daily Movie Reviews (2012) (TV Series)',
       'Finding Nemo (2001) (TV Episode) - Project Playtime (2001) (TV Mini-Series)',
       'Finding Nemo (2016) (TV Episode)  - Season 1 | Episode 2  - Ludicrous Summary (2016) (TV Series)',
       'Finding Nemo (2013) (TV Episode)  - Season 3 | Episode 12  - A Movie Review (2012) (TV Series)',
       'Finding Nemo (2016) (TV Episode)  - Season 5 | Episode 23  - Honest Trailers (2012) (TV Series)'])
    })
    done()
  })
})
