var fetchColors = require('./index.js');

fetchColors('http://dribbble.com/shots/1142625-Twitter-Redesign-2013', function(err, colors) {
	if(err) {
		throw err;
	}
	console.log(colors);
});