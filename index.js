
var fs = require('fs');


fs.readdir('C:/Users/Adrian Ostapkiewicz/Desktop/godzilla/fsNode/', 'utf-8', function(err, files){
    console.log(files);

    fs.writeFile('dirContent.txt', files, 'utf-8', function(err){
        if (err) throw err;
    });
});



