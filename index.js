
var fs = require('fs');


fs.readdir('./', 'utf-8', function(err, files){

    fs.writeFile('dirContent.txt', files, 'utf-8', function(err){
        if (err) throw err;
    });
});



