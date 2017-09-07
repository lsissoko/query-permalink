# QueryPermalink
JavaScript function that creates query string permalinks of the form: `[protocol][server][resource]?[queryVariable]=[queryString]`

## Usage
#### Setup
Download the contents of `/src` and add them to your page:
```html
<body>
    ...
    <!-- scripts -->
    ...
    <script src="qd.js"></script>
    <script src="query-permalink.js"></script>
    ...
</body>
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

// The updated permalink URL is:
// [protocol][server][resource]/?terms=%7B"key1"%3A"val1"%2C"key2"%3A"val2"%7D

```

#### Pull query string data from the URL
```js
var queryString = QP.getQueryString();
var queryObject = JSON.parse(queryString); // { key1: "val1", key2: "val2" }
```

## Examples
See the `/test` directory
