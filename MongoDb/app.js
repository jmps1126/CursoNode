var MongoClient = require('mongodb').MongoClient;

// Connection URL
var url = 'mongodb://localhost:27017/cursoNode';

// Use connect method to connect to the server
MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
    if(err){
        return console.log("Error");
    }
    console.log("Connected successfully to server");

    db.close();
});