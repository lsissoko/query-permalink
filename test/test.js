$(document).ready(function() {
  "use strict";

  var QP = new QueryPermalink("terms");

  function pullFromUrl(queryString) {
    // Parse the query string into an Object
    var queryObject = JSON.parse(queryString);

    // Build an unordered list of the object's key/value pairs
    var results = "<h4>key:value pairs from URL</h4><ul>";
    Object.keys(queryObject).forEach(function(key) {
      var val = queryObject[key];
      results += "<li>" + key + " : " + queryObject[key] + "</li>";
    });
    results += "</ul>";

    // Add the list to the page
    $("#results").html(results);
  }

  function updateUrl() {
    // Create an object from the form values
    var obj = {};
    obj.key1 = $(":input[name=key1]").val();
    obj.key2 = $(":input[name=key2]").val();

    // Stringify the object, update the permalink, and reload the page
    var queryString = JSON.stringify(obj);
    QP.loadPage(queryString);
  }

  $("#enter").click(function(e) {
    e.preventDefault();
    updateUrl();
  });

  function main() {
    // Get the query string
    var qs = QP.getQueryString();

    // Populate the fields if the query string exists and has the right keys
    var obj = JSON.parse(qs);
    if (QP.squish(obj.key1) !== "") {
      $(":input[name=key1]").val(obj.key1);
    }
    if (QP.squish(obj.key2) !== "") {
      $(":input[name=key2]").val(obj.key2);
    }

    // Add the query string data to the page
    pullFromUrl(qs);
  }

  ///////////////////////////////////////////////////////////////////////////
  // MAIN
  ///////////////////////////////////////////////////////////////////////////
  main();
});
