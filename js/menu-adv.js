
var menu = [
  {
    title : "Fs Radar",
    url   : "../fs-radar/"
  },
  {
    title : "Lokki",
    url   : "../lokki/"
  },
  {
    title : "F-Secure Key",
    url   : "../fs-key/"
  },
  {
    title : "Content Anywhere",
    url   : "../fip-can/"
  },
  {
    title : "Mobile Security",
    url   : "../mobile-security/"
  },
  {
    title : "Internet Security",
    url   : "../safe-anywhere/"
  }

];


// Has to be on "pageshow" rather than init, in order to update the current menu highlighting properly
$(document).on("pageshow", function (event) {


  var ul = $(".mainMenu:empty");  // cache the "new" ul menu element

  if (ul.length > 0) { // only operate on pages where menu not already addded

    var items = '<li data-role="list-divider" role="heading" class="ui-li ui-li-divider ui-bar-d ui-first-child">Navigation</li>';
    var parts = [];

    for (var i = 0; i < menu.length; i++) {

      parts = window.location.pathname.split('/');
      if (parts[parts.length-2] == menu[i].url.split("/")[menu[i].url.split("/").length-2]) {
        // Highlight current page
        items += '<li data-theme="e"><a href="' + menu[i].url + '">&nbsp; ' + menu[i].title + '</a></li>'
      } else {
        items += '<li><a href="' + menu[i].url + '">' + menu[i].title + '</a></li>'
      }
    }

    ul.append(items);
    ul.listview('refresh'); // use cache, as .mainMenu:empty will no longer work (append called!)

  }


});