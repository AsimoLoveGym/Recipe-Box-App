'use strict';

// app.js file
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var hbs = require('hbs');
// load data block
var recipeEngine = require('./recipe');
app.set('view engine', 'html');
app.engine('html', hbs.__express);
app.use(bodyParser.json());
app.get('/', function (req, res) {
  res.render('index', {
    // title:"最近文章",
    recipes: recipeEngine.getRecipes()
  });
});

app.listen(3000);