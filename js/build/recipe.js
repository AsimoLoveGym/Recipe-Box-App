"use strict";

var unirest = require('unirest');

var recipes = null;

// These code snippets use an open-source library.
unirest.get("https://edamam-recipe-search-and-diet-v1.p.mashape.com/search?_app_id=1dc94253&_app_key=af96bbcd8d74e9eb4069c8ef0c6d20d1&q=chicken").header("X-Mashape-Key", "VHBbGtDG49mshh8rS3djPq9o71vap1N3AaljsnBulO0bafbffr").header("Accept", "application/json").end(function (result) {
  // console.log(result.status, result.headers, result.body);
  // console.log("Status: ", result.status);
  // console.log("Headers: ", result.headers);
  // console.log("Body: ", result.body);
  // console.log("Body[hits]: ", result.body.hits);
  recipes = result.body.hits;
});

exports.getRecipes = function () {
  return recipes;
};