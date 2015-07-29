var firstmodule = require('./firstmodule');

	var dirName = process.argv[2];
	var extension = process.argv[3];

	firstmodule(dirName, extension, function(err, data) {
		if (err) {
			return console.log(err);
		} else {
			data.forEach(function (file) {console.log(file);})
		}
	})