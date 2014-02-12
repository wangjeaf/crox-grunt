/*
 * grunt-contrib-crox
 * https://github.com/wangjeaf/grunt-contrib-crox
 *
 * Copyright (c) 2014 wangjeaf <wangjeaf@gmail.com>
 * Licensed under the MIT license.
 */
module.exports = function(grunt) {

  grunt.registerMultiTask('crox', 'compile crox templates.', function() {
    console.log(this.args);
    var options = this.options({
      a: grunt.option('a'),
      b: grunt.option('b'),
    });

    var a = options.a;
    var b = options.b;

    this.filesSrc.forEach(function(f) {
      console.log(f);
    });

    grunt.log.ok(111, a, b);
  });

};