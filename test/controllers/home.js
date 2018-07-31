//var assert = require('assert'); //default assertion library.
var app = require('../../server');
var request = require('supertest')(app);


describe('Home Controller', function(){
  it('should load the signup page by default', function(done) {
        request
            .get('/')
            .expect(200)
            .expect(/<title>VolunteerCheck/)
            .expect(/Learn More/)
            .expect(/Signup/)
            .end(done);
  });
  it('should load the privacy page', function(done) {
        request
            .get('/privacy')
            .expect(/<h2>Privacy Policy/)
            .expect(/<title>Volunteer with/)
            .expect(200, done);
  });
  before('login', function(){
    //TODO create user, login user
    console.log("create user, login user");
    it('should load the org new page for logged in users without one', function(done) {

          request
              .get('/')
              .expect(200, done);
              //TODO interrogate content
    });
    before('create org', function(){
      //create org
      console.log("create org");
      it('should load the applications page for logged in users', function(done) {
            request
                .get('/')
                .expect(200, done);
          //TODO interrogate content
      });
    });
  });
});