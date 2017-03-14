const debug   = require('debug')('livro_nodejs:controller');
const Promise = require('bluebird');

class StormtrooperController {
  constructor(StormtrooperModel) {
    this.model = Promise.promisifyAll(StormtrooperModel);
  }

  getAll (request, response, next) {
    this.model.findAsync({})
      .then((data) => {
        response.json(data);
      })
      .catch(next);
  }

  getById (request, response, next) {
    const _id = request.params._id;
    this.model.findOneAsync(_id)
      .then(this._handleNotFound)
      .then((data) => {
        response.json(data);
      })
      .catch(next);
  }

  create (request, response, next) {
    const body = request.body;
    this.model.createAsync(body)
      .then((err, data) => {
        response.json(data);
      })
    .catch(next);
  }

  update (request, response, next) {
    const _id = request.params._id,
          body = request.body;
    this.model.updateAsync(_id, body)
      .then(function(err, data) {
        response.json(data);
      })
    .catch(next);
  }

  remove (request, response, next) {
    const _id = request.params._id;
    this.model.removeAsync(_id)
      .then((err, data) => {
        response.json(data);
      })
    .catch(next);
  }

  _handleNotFound (data) {
    if(!data) {
      var err = new Error('Não encontrado.');
      err.status = 404;
      throw err;
    }
    return data;
  }

}

module.exports = (StormtrooperModel) => {
  return new StormtrooperController(StormtrooperModel);
};
