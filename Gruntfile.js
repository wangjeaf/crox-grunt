module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    crox: {
        options: {
            target: 'nodejs',
            htmlEncode: 'myHtmlEncode'
        },
        go: {
            src: ['./test/**/*.tpl']
        }
    },
    watch: {
        crox: {
            files: ['<%= crox.go.src %>'],
            tasks: ['newer:crox:go']
        }
    }
  });

  grunt.loadTasks('tasks');
  
  grunt.loadNpmTasks('grunt-contrib-watch'); 
  grunt.loadNpmTasks('grunt-newer');
  grunt.registerTask('default', ['watch']);
};