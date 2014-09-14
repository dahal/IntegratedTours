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
  var assessmentId = '3448fbdc-0dcd-4040-a137-d0b85a85f3f4';
  Traitify.ui.slideDeck(assessmentId, ".assessment", function(data) {
    Traitify.ui.resultsProp(assessmentId, ".assessment", {showTraits: true});
  });


// fef5867a-a4a6-43e0-aa4e-94711ae71c51  - complete

// 9c848797-25bd-4b4a-b5cb-b81052a52eb1 - complete

// f46c70ef-8b36-49c9-bf1e-6b3fcba2f0ad - complete

// 311d902f-24a9-4944-91da-dc3066e12b28 - complete

// 3448fbdc-0dcd-4040-a137-d0b85a85f3f4 - complete

// 195c1416-362a-4f88-9641-d9494b92e086 - complete (all yes, 100 on all)