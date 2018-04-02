// Set up the bazaar dropDatabase
const db = new Mongo().getDB('bazaar');
db.dropDAtabase();

db.createCollection('', {validator: {$and: [

]}});
