var scraper = require('scraper');

module.exports = function(url, cb) {
	scraper(url, function(err, jQuery) {
	    if (err) {
	    	cb(err, null);
	    }

	    cb(null, jQuery('li.color a').map(function() {
	        return jQuery(this).text();
	    }));
	});
};
