module.exports = function(grunt) {

  var pkg = require('./package.json');

  // Project configuration.
  grunt.initConfig({
    s3: {
      bucket: 'bv-bootstrap',
      access: 'public-read',
      key: 'AKIAJELIMDKJZBLWWEGA',
      secret: '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',

      upload: [
        {
          src: 'bootstrap/js/*.js',
          dest: 'v' + pkg.version + '/js',
          gzip: true,
          headers: {
            'Content-Encoding': 'gzip'
          }
        },
        {
          src: 'bootstrap/css/*.css',
          dest: 'v' + pkg.version + '/css',
          gzip: true,
          headers: {
            'Content-Encoding': 'gzip'
          }
        },
        {
          src: 'bootstrap/font/*',
          dest: 'v' + pkg.version + '/font',
          gzip: true,
          headers: {
            'Content-Encoding': 'gzip'
          }
        }
      ]
    } 
  });

  grunt.loadNpmTasks('grunt-s3');
};