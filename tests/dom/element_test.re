open ReasonJs.Dom;

let el = document |> Document.createElement "strong";
let el2 = document |> Document.createElement "small";
let event = document |> Document.createEvent "my-event";

let _ = Element.assignedSlot el;
let _ = Element.attributes el;
let _ = Element.classList el;
let _ = Element.className el;
let _ = Element.setClassName el "my-class-name";
let _ = Element.clientHeight el;
let _ = Element.clientLeft el;
let _ = Element.clientTop el;
let _ = Element.clientWidth el;
let _ = Element.id el;
let _ = Element.setId el "my-id";
let _ = Element.innerHTML el;
let _ = Element.setInnerHTML el "<strong>stuff</strong>";
let _ = Element.localName el;
let _ = Element.namespaceURI el;
let _ = Element.nextElementSibling el;
let _ = Element.outerHTML el;
let _ = Element.setOuterHTML el "<strong>stuff</strong>";
let _ = Element.prefix el;
let _ = Element.previousElementSibling el;
let _ = Element.scrollHeight el;
let _ = Element.scrollLeft el;
let _ = Element.setScrollLeft el 0;
let _ = Element.scrollTop el;
let _ = Element.setScrollTop el 0;
let _ = Element.scrollWidth el;
let _ = Element.shadowRoot el;
let _ = Element.slot el;
let _ = Element.setSlot el "<strong>stuff</strong>";
let _ = Element.tagName el;

let _ = Element.attachShadow { "mode": "open" } el;
let _ = Element.animate { "transform": "translateT(0px)" } { "duration": 1000 } el;
let _ = Element.closest "input" el;
let _ = Element.createShadowRoot el;
let _ = Element.getAttribute "href" el;
let _ = Element.getAttributeNS "http://..." "foo" el;
let _ = Element.getBoundingClientRect el;
let _ = Element.getClientRects el;
let _ = Element.getElementsByClassName "some-class-name" el;
let _ = Element.getElementsByTagName "pre" el;
let _ = Element.getElementsByTagNameNS "http://..." "td" el;
let _ = Element.hasAttribute "data-my-value" el;
let _ = Element.hasAttributeNS "http://..." "foo" el;
let _ = Element.hasAttributes el;
let _ = Element.insertAdjacentElement Element.BeforeBegin el2 el;
let _ = Element.insertAdjacentHTML  Element.AfterBegin "<strong>text</strong>" el;
let _ = Element.insertAdjacentText  Element.AfterEnd "text" el;
let _ = Element.matches "input" el;
let _ = Element.querySelector "input" el;
let _ = Element.querySelectorAll "input" el;
let _ = Element.releasePointerCapture (Event.pointerId event) el;
let _ = Element.remove el;
let _ = Element.removeAttribute "href" el;
let _ = Element.removeAttributeNS "http://..." "foo" el;
let _ = Element.requestFullscreen el;
let _ = Element.requestPointerLock el;
let _ = Element.scrollIntoView el;
let _ = Element.scrollIntoViewNoAlignToTop el;
let _ = Element.scrollIntoViewWithOptions { "block": "end", "behvaior": "smooth" } el;
let _ = Element.setAttribute "href" "http://..." el;
let _ = Element.setAttributeNS "http://..." "foo" "bar" el;
let _ = Element.setPointerCapture (Event.pointerId event) el;
