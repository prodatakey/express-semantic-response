This module extends express' response object with semantic syntactic sugar that makes responding to API requests less error-prone.

To use this module, simply `require` it and then use the `extend` function on your `app` instance.

```
var express = require('express'),
	semanticResponse = require('express-semantic-response');

var app = express();

semanticResponse.extend(app);
```

The response object on all requests made to your app will now have all of the helpers defined in this module.

##Response Handlers

###res.sendDeleted()
When deleting an entity we send a 204 'No Content' status with no body

###res.sendCreated(location, body)
When creating an entity we send:
- A location header pointing to the created entity
- The newly created entity as the body
- Status 201 'Created'
 
####Parameters
 * **location** - The location of the created entity to set in the `Location` header.
 * **body** - The object that was created to send back to the client. This serializes the content using the same semantics as [send](http://expressjs.com/api.html#res.send).
