# query-permalink.js
creates query string permalinks of the form: `[protocol]``[server]``[resource]`?`[queryVariable]`=`[queryString]`

## Usage
Add jQuery (2.x), `qd.js`, and `query-permalink.js` to your html page.

#### Pull query string data from a URL
```js
var queryString = QP.getQueryString();
var queryObject = JSON.parse(queryString);
```

#### Create a permalink
```js
// Create a QueryPermalink object
var queryVariable = "terms";
var QP = new QueryPermalink(queryVariable);

// Create the object that will be parametrized into a query string
var obj = {};
obj.key1 = "val1";
obj.key2 = "val2";

// Stringify the query string object
var queryString = JSON.stringify(obj);

// Update the permalink and reload the page
QP.loadPage(queryString);
```

## Examples
- `test\test.html`
- http://laminesissoko.com/capitolwords/
- http://laminesissoko.com/music-timeline/
