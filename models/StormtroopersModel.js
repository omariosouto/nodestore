class StormtrooperModel {
  constructor(mongo) {
    this.mongo = mongo;
  }

  find (query, callback) {
    this.mongo.collection('stormtroopers').find(query, callback);
  }

  findOne (_id, callback) {
    const query = { _id: this.mongo.ObjectId(_id) };
    this.mongo.collection('stormtroopers').findOne(query, callback);
  }

  create (data, callback) {
    this.mongo.collection('stormtroopers').insert(data, callback);
  }

  update (_id, data,callback) {
    const query = { _id: this.mongo.ObjectId(_id) };
    this.mongo.collection('stormtroopers').update(query, data, callback);
  }

  remove (_id, callback) {
    const query = { _id: this.mongo.ObjectId(_id) };
    this.mongo.collection('stormtroopers').remove(query, callback);
  }

}


module.exports = function(mongo) {
  return new StormtrooperModel(mongo);
}