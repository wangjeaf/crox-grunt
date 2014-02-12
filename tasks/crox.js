/*
 * grunt-contrib-crox
 * https://github.com/wangjeaf/grunt-contrib-crox
 *
 * Copyright (c) 2014 wangjeaf <wangjeaf@gmail.com>
 * Licensed under the MIT license.
 */
module.exports = function(grunt) {
  var crox = require('crox');
  var helper = require('crox/bin/helper');
  var jsBeautify = require('js-beautify').js_beautify;

  function doJsBeautify(str) {
    var opts = {
          "indent_size": 4,
          "indent_char": " ",
          "indent_level": 0,
          "indent_with_tabs": false,
          "preserve_newlines": true,
          "max_preserve_newlines": 10,
          "jslint_happy": false,
          "brace_style": "collapse",
          "keep_array_indentation": false,
          "keep_function_indentation": false,
          "space_before_conditional": true,
          "break_chained_methods": false,
          "eval_code": false,
          "unescape_strings": false
      };
      return jsBeautify(str, opts);
  }

  var compilers = {
    vm: crox.compileToVM,
    php: crox.compileToPhp,
    js: function(tpl) {
      return crox.compile(tpl, {htmlEncode: outHtmlEncode}).toString();
    },
    kissy: function(tpl) {return helper.compileToKissy(tpl, {htmlEncode: outHtmlEncode})},
    kissyfn: function(tpl) {return helper.compileToKissyFn(tpl, {htmlEncode: outHtmlEncode})},
    cmd: function(tpl) {return helper.compileToCMD(tpl, {htmlEncode: outHtmlEncode})},
    amd: function(tpl) {return helper.compileToAMD(tpl, {htmlEncode: outHtmlEncode})},
    nodejs: function(tpl) {return helper.compileToCommonJS(tpl, {htmlEncode: outHtmlEncode})}
  };
  
  compilers.commonjs = compilers.nodejs;
  compilers.seajs = compilers.cmd;
  compilers.requirejs = compilers.amd;

  var outHtmlEncode = '';

  grunt.registerMultiTask('crox', 'compile crox templates.', function() {
    
    var options = this.options({
      target: grunt.option('target') || 'js',
      htmlEncode: grunt.option('htmlEncode') || ''
    });

    var target = options.target;
    outHtmlEncode = options.htmlEncode || '';

    this.filesSrc.forEach(function(f) {
      var content = grunt.file.read(f);
      var compiler = compilers[target];
      var isJs = target != 'vm' && target != 'php';
      var compiled;
      if (isJs && target != 'js') {
        compiled = compiler(f);
      } else {
        compiled = compiler(content);
      }
      if (isJs) {
        compiled = doJsBeautify(compiled);
      }
      var targetFile = isJs ? (f + '.js') : f.replace(/\.[\w\d]+$/, '.' + target);
      grunt.log.writeln();
      grunt.log.ok('[Crox Compiling]', f, '-->', targetFile);
      grunt.file.write(targetFile, compiled);
    });
  });

};