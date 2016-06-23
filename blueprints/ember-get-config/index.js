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

  // afterInstall(options) {
  //   const config = this.project.config();
  //
  //   fs.writeFileSync(
  //     path.resolve('node_modules', 'ember-get-config', 'addon', 'config.js'),
  //     `export default ${JSON.stringify(config, null, 2)}`,
  //     'utf-8'
  //   );
  // }

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
