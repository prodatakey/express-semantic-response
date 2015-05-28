module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
      jsdoc : {
          dist : {
              src: ['src/*.js'],
              options: {
                  destination: 'doc',
                  configure: 'jsdoc.conf.json'
              }
          }
      }
  });

  grunt.registerTask('default', ['jsdoc']);
};
