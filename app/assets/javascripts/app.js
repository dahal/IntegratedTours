//= require_self
//= require_tree ../templates
//= require_tree ./models
//= require_tree ./collections
//= require_tree ./views
//= require_tree ./routers
//= require_tree ./components

window.App = {
  Models      : {},
  Collections : {},
  Views       : {},
  Routers     : {},
  Flights     : {},
  Components  : {}
};

$(function() {
  console.log('app loaded');
});
