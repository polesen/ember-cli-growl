/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-growl',
  included: function(app) {
    this._super.included(app);

    app.import('app/styles/components/growl-manager.css');
  }
};
