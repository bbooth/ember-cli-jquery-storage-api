/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-jquery-storage-api',
  included: function (app) {
    app.import(app.bowerDirectory + "/jQuery-Storage-API/jquery.storageapi.js");
  }
};
