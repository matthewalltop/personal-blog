const assert = require('Chai').assert;
const postController = require('../controllers/postController');
const http_mocks = require('node-mocks-http');

function buildResponse() {
    return http_mocks.createResponse({eventEmitter: require('events').EventEmitter})
  }

describe('PostController', () => {

    /// GET Posts Index
    it('Should return not implemented for the index', (done) => {
        var response = buildResponse();
        var request = http_mocks.createRequest({
            method: 'GET',
            url: '/',
        });

        response.on('end', () => {
            assert(response._getData() === 'NOT IMPLEMENTED: Posts index');
            done();
        });
        postController.handle(request, response);
    });

    /// GET Post Detail 
    it('Should return not implemented on the id', (done) => {
        var response = buildResponse();
        var request = http_mocks.createRequest({
            method: 'GET',
            url: '/1',
        });

        response.on('end', () => {
            assert(response._getData() === 'NOT IMPLEMENTED: Post detail');
            done();
          });
          postController.handle(request, response);
    });
});