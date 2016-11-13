"use strict";

// var unirest = require('unirest');

// babel --presets react,es2015 js/source -d js/build

$(document).ready(function () {
  // **************** Edamam API failed ****************
  // ?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=gte%20591,%20lte%20722&health=alcohol-free"
  // const queryPath = "https://api.edamam.com/search";
  // const appID = "1dc94253";
  // const appKey = "af96bbcd8d74e9eb4069c8ef0c6d20d1";
  // const queryString = queryPath + "?q=chicken&app_id=" + appID + "&app_key=" + appKey + "&jsoncallback=?";
  //
  // let request = $.ajax({
  //   dataType: "html",
  //   url: queryString
  // });
  //
  // request.done(function( data, status ) {
  //   console.log("success");
  // });
  //
  // request.fail(function( jqXHR, textStatus ) {
  //   alert( "Request failed: " + textStatus );
  // });
  // **************** End of Edamam API ****************

  // **************** Bigoven API Have to Pay, Give up ****************
  // var apiKey = "your-api-key-here";
  // var RecipeID = 196149;
  // var url = "http://api2.bigoven.com/recipe/" + RecipeID + "?api_key="+apiKey;
  // $.ajax({
  //   type: "GET",
  //   dataType: 'json',
  //   cache: false,
  //   url: url,
  //   success: function (data) {
  //     alert('success');
  //     //console.log(data);
  //     }
  // });
  // **************** End of Bigoven API failed ****************


  // unirest.get(queryString)
  // .header("X-Mashape-Key", "VHBbGtDG49mshh8rS3djPq9o71vap1N3AaljsnBulO0bafbffr")
  // .header("Accept", "application/json")
  // .end(function (result) {
  //   console.log(result.status, result.headers, result.body);
  // });

  // ?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=gte%20591,%20lte%20722&health=alcohol-free"
  // const queryPath = "https://api.edamam.com/search";
  // const appID = "1dc94253";
  // const appKey = "af96bbcd8d74e9eb4069c8ef0c6d20d1";
  // const queryString = queryPath + "?q=chicken&app_id=" + appID + "&app_key=" + appKey;
  //
  // // These code snippets use an open-source library. http://unirest.io/nodejs
  // unirest.get(queryString)
  // .end(function (result) {
  //   console.log(result.status, result.headers, result.body);
  // });

});

// function successFunction(data, status) {
//   console.log(data);
//   console.log("status: " + status);
//   // ReactDOM.render(
//   //   <App tableData={data}/>,
//   //   document.getElementById('table-container')
//   // );
// }