var xkcd = require("../index.js");
var assert = require("assert");

xkcd.img((err, res) => {
  if(!err) {
    assert.deepEqual(Object.keys(res),['url','title'], "Must have the url and title in the result");
  } else {
    assert.ok(err);
  }
});
