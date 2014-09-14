//= require_self
//= require_tree ../templates
//= require_tree ./models
//= require_tree ./collections
//= require_tree ./views
//= require_tree ./routers
//= require_tree ./components
//= require app_init

window.App = {
  Models      : {},
  Collections : {},
  Views       : {},
  Routers     : {},
  Flights     : {},
  Components  : {},
}

Traitify.setPublicKey("8kvtmdpdp6b2n2nep5a60oc1f9");
Traitify.setHost("https://api-sandbox.traitify.com");
Traitify.setVersion("v1");
