
	
	var fs = require('fs');
	var buf;

	function callback (error, data) {
		if (error) {
			console.log(error);
		} else {
			console.log(data);
	}

	fs.readFile(process.argv[2], callback);

	

