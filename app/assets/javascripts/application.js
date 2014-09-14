//= require jquery
//= require jquery_ujs
//= require underscore
//= require backbone
//= require app
//= require ./dashboard
//= require_tree .
//= require traitify_api_1.0.0.js
//= require traitify_widget_2.0.0.js
//= require traitify_results_1.0.0.js

console.log('loads last')
Traitify.setPublicKey("8kvtmdpdp6b2n2nep5a60oc1f9");
  Traitify.setHost("https://api-sandbox.traitify.com");
  Traitify.setVersion("v1");
  var assessmentId = '4094248c-7eca-404a-886d-23e9ad8aa030';
  Traitify.ui.slideDeck(assessmentId, ".assessment", function(data) {
    Traitify.ui.resultsProp(assessmentId, ".assessment", {showTraits: true});
  });
