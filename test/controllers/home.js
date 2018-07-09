//var assert = require('assert'); //default assertion library.
var app = require('../../server');
var request = require('supertest')(app);


describe('Home Controller', function(){
  it('should load the login page by default', function(done) {
        request
            .get('/')
            .expect(200, done)
            //TODO interrogate content
  })
  it('should load the org new page for logged in users without one', function(done) {
        //TODO create user, login user
        request
            .get('/')
            .expect(200, done);
            //TODO interrogate content
  })
  it('should load the applications page for logged in users', function(done) {
  	    //TODO create user, login user, create org
        request
            .get('/')
            .expect(200, done);
			//TODO interrogate content
  })
  it('should load the privacy page', function(done) {
        request
            .get('/privacy')
            .expect(200, done);
  })
})

// /privacy