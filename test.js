var expect  = require('chai').expect;
var request = require('request');

describe('Status of http server', function() {
    it('status', function(){
        request('http://localhost:8082/', function(error, response, body) {
            expect(response.statusCode).to.equal(200);
        });
    });

	it('Nonexistent page status', function() {
	    request('http://localhost:8082/abc' , function(error, response, body) {
	        expect(response.statusCode).to.equal(404);
	    });
	});
});
