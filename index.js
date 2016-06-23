/* jshint node: true */
'use strict';

const fs = require('fs');
const path = require('path');
const inspect = require('util').inspect;

module.exports = {
  name: 'ember-get-config',

  isDevelopingAddon: () => true,

  included(app) {
    this._super.included.apply(this, arguments);

    const appConfig = app.project.config(app.env) || {};

    fs.writeFileSync(
      path.resolve('node_modules', 'ember-get-config', 'addon', 'config.js'),
      `export default ${JSON.stringify(appConfig, null, 2)}`,
      'utf-8'
    );
  }
};
