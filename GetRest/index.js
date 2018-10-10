var express = require('express');
var assert= require('assert');
var chai = require('chai');
var chaiHttp = require('chai-http');
var should = require('should');





describe('Response', function() {

    it('should list items on GET', function (done) {
        chai.request(app)
            .get('https://jsonplaceholder.typicode.com/posts/1')
            .end(function (err, res) {
                should.equal(err, null);
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('array');
                res.body[0].should.be.a('object');
                res.body[0].should.have.property('userId');
                res.body[0].should.have.property('title');
                res.body[0].userId.should.be.a('1');
                res.body[0].title.should.equal('sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
                done();
            });
    });




});




