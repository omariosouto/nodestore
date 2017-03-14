class StormtrooperDAO {
  constructor(model) {
    this.model = model;
  }

  create (data, callback) {
    const model = new this.model(data);
    model.save((err, result) => {
      callback(err, result);
    });
  }

  find (query, callback) {
    this.model.find(query).exec(callback);
  }

  findOne (_id, callback) {
    const query = { _id: _id };
    this.model.findOne(query).exec(callback);
  }

  update (_id, data,callback) {
    const query = { _id: _id };
    this.model.update(query, data).exec((err, result) => {
      callback(err, result);
    });
  }

  remove (_id, callback) {
    const query = { _id: _id };
    this.model.remove(query).exec(() => {
      callback(err, result);
    });
  }

}


module.exports = (mongoose) => {
  const Stormtrooper = mongoose.model('Stormtrooper', {
    name: String,
    nickname: String,
    divisions: [String],
    patent: String
  });
  return new StormtrooperDAO(Stormtrooper);
}
