/**
 * User: Robert Kehoe
 * Date: 02/Aug/13 16:37
 */

var namespace = {};

$(document).ready(function () {

  // When page loads send Ajax query to get menu
  $.ajax({
    url     : "js/menu.json",
    success : function (data) {
      namespace.menu = data;
      namespace.buildMenu(); // dynamically insert the menu
    }
  });
});

$(document).on("pageshow", function () {
  namespace.buildMenu();
});


namespace.buildMenu = function () {

  // Select and cache all "empty" menus. Each page contains an empty menu
  // jqm Ajax preloading of pages will cause multiple pages to be present in the DOM, in order to have page transitions,
  // but only one page visible
  var ul = $(".mainMenu:empty");


  // Handle initial case, where Ajax query not yet sent
  if (namespace.menu != undefined) {

    // Add a readonly header item
    var items = '<li data-role="list-divider" role="heading" class="ui-li ui-li-divider ui-bar-d ui-first-child">Navigation</li>';
    var parts = [];

    for (var i = 0; i < namespace.menu.length; i++) {

      // Handle header/section pages differently
      if (namespace.menu[i].header) {
        items += '<li data-role="list-divider" role="heading" class="ui-li ui-li-divider ui-bar-d ui-first-child">' + namespace.menu[i].title + '</li>';
      } else {

        // Get current location (to be able to highlight the correct item)
        parts = window.location.pathname.split('/');

        // You will almost certainly have to rework this if() statement to suit your folder / site structure
        if (namespace.menu[i].url == parts[parts.length - 1]) {
          // Highlight current page
          items += '<li data-theme="e"><a href="' + namespace.menu[i].url + '">&nbsp; ' + namespace.menu[i].title + '</a></li>'
        } else {
          items += '<li><a href="' + namespace.menu[i].url + '">' + namespace.menu[i].title + '</a></li>'
        }
      }
    }

    ul.append(items);
    ul.listview('refresh'); // Tell JQM to restyle the menu now it has been updated.
  }

};