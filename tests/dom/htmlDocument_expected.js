'use strict';

var DomRe          = require("../../src/dom/domRe");
var ReasonJs       = require("../../src/reasonJs");
var DocumentRe     = require("../../src/dom/documentRe");
var TestHelpers    = require("../testHelpers");
var HtmlDocumentRe = require("../../src/dom/htmlDocumentRe");

var el = document.createElement("strong");

var htmlDocument = TestHelpers.unsafelyUnwrapOption(DocumentRe.asHtmlDocument(document));

HtmlDocumentRe.activeElement(htmlDocument);

HtmlDocumentRe.body(htmlDocument);

htmlDocument.body = el;

htmlDocument.cookie;

htmlDocument.cookie = "foo=bar;reason=ml";

htmlDocument.defaultView;

HtmlDocumentRe.designMode(htmlDocument);

HtmlDocumentRe.setDesignMode(htmlDocument, /* On */0);

HtmlDocumentRe.dir(htmlDocument);

HtmlDocumentRe.setDir(htmlDocument, /* Ltr */0);

HtmlDocumentRe.domain(htmlDocument);

htmlDocument.domain = "reason.ml";

htmlDocument.embeds;

htmlDocument.forms;

htmlDocument.head;

htmlDocument.images;

htmlDocument.lastModified;

htmlDocument.links;

htmlDocument.location;

htmlDocument.location = "http://reason.ml";

htmlDocument.plugins;

HtmlDocumentRe.readyState(htmlDocument);

htmlDocument.referrer;

htmlDocument.scripts;

htmlDocument.title;

htmlDocument.title = "Reason: Rapid Expressive Systems Programming.";

htmlDocument.URL;

htmlDocument.close();

HtmlDocumentRe.execCommand("copy", /* false */0, /* None */0, htmlDocument);

htmlDocument.getElementsByName("angry-joe");

htmlDocument.getSelection();

HtmlDocumentRe.hasFocus(htmlDocument);

htmlDocument.open();

HtmlDocumentRe.queryCommandEnabled("copy", htmlDocument);

HtmlDocumentRe.queryCommandIndeterm("cut", htmlDocument);

HtmlDocumentRe.queryCommandSupported("paste", htmlDocument);

htmlDocument.queryCommandValue("fontName");

htmlDocument.write("Hello World!");

htmlDocument.writeln("Hello Newline!");

exports.el           = el;
exports.htmlDocument = htmlDocument;
/* el Not a pure module */
