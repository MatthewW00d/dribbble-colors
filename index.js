var scraper = require('scraper');

module.exports = function(url, cb) {
	scraper(url, function(err, jQuery) {
	    if (err) {
	    	cb(err, null);
	    }

	    var colors = [];
	    jQuery('li.color a').each(function() {
	        colors.push(jQuery(this).text());
	    });
	    cb(null, colors);
	});
};