 module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
   
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded'
        },
        files: {                         // Dictionary of files
          '/dist/css/twitter.css': '/src/scss/twitter.scss'       // 'destination': 'source'
        }
      }
  },
    watch: {
      files: ['/src/scss/twitter.scss','/package.json'],
      tasks: ['sass']
         }
  });


    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks( 'grunt-contrib-sass');

    grunt.registerTask('default', ['sass','watch']);

};
 