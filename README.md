This module extends express' response object with semantic syntactic sugar that makes responding to API requests less error-prone.

To use this module, simply `require` it and then use the `extend` function on your `app` instance.

```
var express = require('express'),
	semanticResponse = require('express-semantic-response');

var app = express();

semanticResponse.extend(app);
```

The response object on all requests made to your app will now have all of the helpers defined in this module.
