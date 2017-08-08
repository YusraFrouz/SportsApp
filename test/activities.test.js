const request = require('supertest');
const express = require('express');
const app = require('../server.js')
 
request(app)
  .get('/activity/4')
  .expect(200)
  .end(function(err, res) {
    if (err) throw err;
  });