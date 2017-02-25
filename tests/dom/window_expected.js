'use strict';

var DomRe    = require("../../src/dom/domRe");
var ReasonJs = require("../../src/reasonJs");
var WindowRe = require("../../src/dom/windowRe");

var el = document.createElement("strong");

var $$event = document.createEvent("my-event");

function handleClick() {
  console.log("asd");
  return /* () */0;
}

window.document;

WindowRe.fullScreen(window);

window.history;

window.innerWidth;

window.innerHeight;

window.location;

window.location = "http://reason.ml";

window.parent;

window.top;

window.alert("hello!");

WindowRe.confirm("is ok?", window);

window.getComputedStyle(el);

window.getComputedStyle(el, "hover");

window.prompt("type you password, please?");

window.prompt("type password or use this?", "password");

window.scroll(0, 0);

window.onload = function () {
  console.log("load");
  return /* () */0;
};

exports.el          = el;
exports.$$event     = $$event;
exports.handleClick = handleClick;
/* el Not a pure module */
