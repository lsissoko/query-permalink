/**
 * Function to create query string permalinks of the form:
 *
 *    [protocol][server][resource]/?[queryVariable]=[queryString]
 *
 * The [queryString] portion should be the result of calling JSON.stringify()
 * on an Object variable.
 *
 * @param {string} queryVariable      the query string's key name
 * @param {string} defaultQueryString the default query string (optional)
 */
function QueryPermalink(queryVariable, defaultQueryString) {

  /**
   * Removes leading and trailing whitespace and trims remaining whitespace.
   *
   * example:
   * - in:  '   Hello. My     name is Inigo        Montoya.  You killed        my father. Prepare to die.        '
   * - out: 'Hello. My name is Inigo Montoya. You killed my father. Prepare to die.'
   *
   * @param {string} string the string to 'squish'
   */
  this.squish = function(string) {
    return string.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g, '').replace(/\s+/g, ' ');
  };

  /**
   * Serialize an object for use in a URL query string or Ajax request (similar to jQuery.param()).
   *
   * @param {Object} source the object to serialize
   * @return {string} the serialized object
   */
  this.param = function(source) {
    var array = [];
    for (var key in source) {
      array.push(encodeURIComponent(key) + '=' + encodeURIComponent(source[key]));
    }
    return array.join('&');
  }

  /**
   * Returns the result of appending a given string to the current path.
   *
   * @param {string} fullQueryString the full query string
   *                                 (e.g. '?key01=val01' instead of 'val01')
   * @return {string} the resulting URL
   */
  this.buildUrl = function(fullQueryString) {
    return window.location.href.split('?')[0] + fullQueryString;
  };

  /**
   * Appends the given query string to the current path and navigates to the new URL.
   *
   * @param {string} queryString the query string
   */
  this.loadPage = function(queryString) {
    if (queryString.length > 0) {
      var obj = {};
      obj[queryVariable] = this.squish(queryString);
      location.assign(this.buildUrl('?' + this.param(obj)));
    }
  };

  /**
   * Returns the query string from the current URL.
   * If no query string is present, use the default value and reload the page.
   *
   * @return {string} the query string
   */
  this.getQueryString = function() {
    var qs = '';
    var vars = (new QueryData())[queryVariable];
    if (vars !== undefined) {
      qs = this.squish(vars);
    } else if (defaultQueryString !== undefined && this.squish(defaultQueryString) !== '') {
      qs = defaultQueryString;
      this.loadPage(qs);
    }
    return qs;
  };

}

/*

QueryData.js

A function to parse data from a query string

Created by Stephen Morley - http://code.stephenmorley.org/ - and released under
the terms of the CC0 1.0 Universal legal code:

http://creativecommons.org/publicdomain/zero/1.0/legalcode

*/
function QueryData(_1,_2){if(_1==undefined){_1=location.search?location.search:"";}if(_1.charAt(0)=="?"){_1=_1.substring(1);}if(_1.length>0){_1=_1.replace(/\+/g," ");var _3=_1.split(/[&;]/g);for(var _4=0;_4<_3.length;_4++){var _5=_3[_4].split("=");var _6=decodeURIComponent(_5[0]);var _7=_5.length>1?decodeURIComponent(_5[1]):"";if(_2){if(!(_6 in this)){this[_6]=[];}this[_6].push(_7);}else{this[_6]=_7;}}}};
