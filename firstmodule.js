
	var fs = require('fs');
	var path = require('path');
	var data = [];


module.exports = function (dirName, extension, callback) {
	fs.readdir(dirName, function (err, list) {
		if (err) {return callback(err);
		}
	
		list.forEach(printmatches);

		function printmatches (file) {
			if (path.extname(file) === "." + extension) {
				data.push(file);
			} 
		}

		callback(null, data);

	});
}

