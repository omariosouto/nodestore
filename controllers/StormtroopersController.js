const debug = require('debug')('livro_nodejs:controller');

class StormtrooperController {
  constructor(StormtrooperModel) {
    this.model = StormtrooperModel;
  }

  getAll(request, response, next) {
    this.model.find({}, (err, data) => {
      if(err) {
        return next(err);
      }
      response.json(data);
    });
  }

  getById(request, response, next) {
    const _id = request.params._id;
    this.model.findOne(_id, (err, data) => {
      if(err) {
        return next(err);
      }
      response.json(data);
    });
  }

  create(request, response, next) {
    const body = request.body;
    this.model.create(body, (err, data) => {
      if(err) {
        return next(err);
      }
      response.json(data);
    });
  }

  update(request, response, next) {
    const _id = request.params._id,
          body = request.body;
    this.model.update(_id, body, (err, data) => {
      if(err) {
        return next(err);
      }
      response.json(data);
    });
  }

  remove(request, response, next) {
    const _id = request.params._id;
    this.model.remove(_id, (err, data) => {
      if(err) {
        return next(err);
      }
      response.json(data);
    });
  }

}

module.exports = (StormtrooperModel) => {
  return new StormtrooperController(StormtrooperModel);
};
