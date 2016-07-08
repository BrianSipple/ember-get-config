/*jshint node:true*/
const path = require('path');
const inspect = require('util').inspect;
const fs = require('fs');

module.exports = {
  description: '',

  /**
   * Simply implementing this as a no-op prevents an error
   * when the entityName is not specified
   */
  normalizeEntityName() {},

  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  // afterInstall: function(options) {
  //   // Perform extra work here.
  // }
};
