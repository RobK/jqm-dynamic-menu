/**
 * User: Robert Kehoe
 * Date: 02/Aug/13 16:37
 */

var menu = [
  {
    title : "Page A (Cats)",
    url   : "simple-page-a.html"
  },
  {
    title : "Page A (Dogs)",
    url   : "simple-page-a.html"
  },
  {
    title : "Page A (Elephants)",
    url   : "simple-page-c.html"
  }
];

$(document).on("pageshow", function (event) {


  var ul = $(".mainMenu:empty");  // cache the "new" ul menu element that has been proloaded by jqm

  if (ul.length > 0) { // only operate on pages where menu not already added

    var items = '<li data-role="list-divider">Navigation</li>';

    for (var i = 0; i < menu.length; i++) {
      items += '<li><a href="' + menu[i].url + '">' + menu[i].title + '</a></li>';
    }

    ul.append(items);
    ul.listview('refresh'); // use cache, as ".mainMenu:empty" will no longer work (append called!)

  }


});