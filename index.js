var scraperjs = require('scraperjs');

module.exports = function(url, cb) {

  scraperjs.StaticScraper.create(url)
    .scrape(function($) {
      return $("li.color a").map(function() {
        return $(this).text();
      }).get();
    })
    .then((colors)=> cb(null, colors))
    .catch((err)=> cb(err));

};
