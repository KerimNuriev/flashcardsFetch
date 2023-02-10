const express = require('express');
const path = require('path');
const ssr = require('../middleware/ssr');

const config = (app) => {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(express.static('public'));
  app.use(ssr);
};

module.exports = config;
