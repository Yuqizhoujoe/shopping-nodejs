const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callBack) => {
    MongoClient.connect('mongodb+srv://yuqizhou:Whan5201314!@cluster0.wfb8v.mongodb.net/shop?retryWrites=true&w=majority')
    .then(client => {
        console.log('Connected!');
        _db = client.db();
        callBack();
    })
    .catch(err => {
        console.log(err);
    });
};

const getDb = () => {
    if (_db) {
        return _db;
    }

    throw 'No DB found!';
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
