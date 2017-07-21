const http = require('http')
const cheerio = require('cheerio')

function movieSearch(query) {
  http.get(
    `http://www.imdb.com/find?ref_=nv_sr_fn&q=${query}&s=all`,
    (res) => {
    var html = ''
    res.on('data', (chunk) => { html += chunk})
    res.on('end', () => {
      const $ = cheerio.load(html)
      const movieTitles = $('.findSection').first().find('.result_text')
        .map((i, elm) =>
        $(elm).text())
        .toArray()
      console.log(movieTitles.join('\n'))
      return movieTitles
    })
  })
}

movieSearch(process.argv[2])

module.exports = movieSearch
