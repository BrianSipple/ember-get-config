/* jshint node: true */
'use strict';

const fs = require('fs');
const path = require('path');
const inspect = require('util').inspect;


module.exports = {
  name: 'ember-get-config',

  included(app) {
    this._super.included.apply(this, arguments);

    const appConfig = app.project.config(app.env) || {};
    const ourName = this.pkg.name;

    const addonPath = this
      .addonDiscovery
      .discoverProjectAddons(this.project)
      .find(addon => addon.name === ourName)
      .path;

    fs.writeFileSync(
      path.join(addonPath, 'addon', 'config.js'),
      `export default ${JSON.stringify(appConfig, null, 2)}`,
      'utf-8'
    );
  }
};
