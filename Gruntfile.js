module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    crox: {
        options: {
            a: 11,
            b: 21
        },
        test: {
            src: ['./test/**/*.tpl']
        }
    },
    watch: {
        crox: {
            files: ['<%= crox.test.src %>'],
            tasks: ['crox']
        }
    }
  });

  grunt.loadTasks('tasks');
  
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);
};