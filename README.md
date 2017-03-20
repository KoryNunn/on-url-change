# on-url-change

Listen to url change events

# Why

There is no API for this, sadly.

Emits 'change' event on pushState or hash-change.

## Usage

```javascript

var onUrlChange = require('../');

var emitter = onUrlChange(/* Optional interval, default 50ms */);

emitter.on('change', function(url){
    console.log('URL changed to: ', url);
});

```

## Tests

More like an example.

You need to run the page in a static server, due to file-system security issues.

