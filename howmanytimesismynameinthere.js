
	
	var fs = require('fs');
	var buf;

	function callback (error, data) {
		if (error) {
			console.log(error);
		} else {
			console.log(data.match(/Jon/g).length);
		}
	}

	fs.readFile(process.argv[2], 'utf8', callback);

	

