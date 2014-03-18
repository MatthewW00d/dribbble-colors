var fetchColors = require('./index.js');
//var fetchColors = require('dribbble-colors');

fetchColors('http://dribbble.com/shots/1142625-Twitter-Redesign-2013', function(err, colors) {
	if(err) {
		throw err;
	}
	console.log(colors);
	// => ['#FBFCFC', '#1F272D', '#ADB6BD', '#3B90C9', '#4B4A51', '#897E6B', '#4895CD', '#6E8E95']
});