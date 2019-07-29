
var fs = require('fs');
var colors = require('colors');

fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
    console.log('Dane przed zapisem!' .blue);
    console.log(data);

    fs.appendFile('./tekst.txt', 'Mordolencja!', function(err) {
        if (err) throw err;
        console.log('Zapisano!' .blue);

        fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
            console.log('Dane po zapisie' .blue)
            console.log(data);
        });
    });
});



