'use strict';
/** @external Response */

/**
 * @lends external:Response.prototype
 */
var extensions = {
    /**
     * When deleting an entity we send a 204 No Content response
     */
    sendDeleted: function deleted() {
      return this.status(204).end(); // No content
    },

    /**
     * When creating an entity we send:
     *  - A location header pointing to the created entity
     *  - Status 201 Created
     *  - The newly created entity as the body
     *
     * @param {String} location - The location of the created entity to set in the `Location` header
     * @param {Object} body - The object that was created to send back to the client
     */
    sendCreated: function created(location, body) {
      return this
        .location(location)
        .status(201) // Created
        .send(body);
    }
};

exports.extend = function(app) {
  // Create property descriptors for each of the extension methods
  var props = { };
  Object.getOwnPropertyNames(extensions).forEach(function(name) {
    props[name] = { value: extensions[name] };
  });

  // Swap out the express response proto for ours
  var res = app.response = Object.create(app.response, props);
};
