module.exports = {
  normalizeEntityName: function() {
  },

  afterInstall: function () {
    return this.addBowerPackageToProject('jQuery-Storage-API', '~1.7.3');
  }
};
