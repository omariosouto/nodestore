const debug   = require('debug')('livro_nodejs:controller');
const Promise = require('bluebird');

class StormtrooperController {
  constructor(StormtrooperModel) {
    this.model = Promise.promisifyAll(StormtrooperModel);
  }

  getAll (request, response, next) {
    this.model.findAsync({})
      .then(this._handleNotFound)
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

    if(JSON.stringify(body) !== '{}') {
      this.model.createAsync(body)
        .then((data) => {
          response.json(data);
        })
        .catch(next);
    } else {
      response.json({err: 'Nenhum dado informado'});
    }
  }

  update (request, response, next) {
    const _id = request.params._id,
          body = request.body;
    this.model.updateAsync(_id, body)
      .then(function(data) {
        response.json(data);
      })
    .catch(next);
  }

  remove (request, response, next) {
    const _id = request.params._id;
    this.model.removeAsync(_id)
      .then(this._handleNotFound)
      .then((data) => {
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

  _handleEmpty (data) {
    if(!data) {
      var err = new Error('Nenhum dado informado.');
      err.status = 404;
      throw err;
    }
    return data;
  }

}

module.exports = (StormtrooperModel) => {
  return new StormtrooperController(StormtrooperModel);
};
