# dribbble-colors
A simple scraper that returns the colors used in a [Dribbble](http://dribbble.com) shot, since Dribbble API does not provide the colors used.

## Install

```bash
$ npm install dribbble-colors
```

## Usage

```js
var fetchColors = require('./index.js');

fetchColors('http://dribbble.com/shots/1142625-Twitter-Redesign-2013', function(err, colors) {
	if(err) {
		throw err;
	}
	console.log(colors);
	// => ['#FBFCFC', '#1F272D', '#ADB6BD', '#3B90C9', '#4B4A51', '#897E6B', '#4895CD', '#6E8E95']
});
```