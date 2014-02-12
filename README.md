grunt-contrib-crox
==================

Crox 的 Grunt插件

## 参数说明

- target: 翻译的目标语言，支持： `php` `vm` `nodejs`(`commonjs`) `cmd`(`seajs`) `amd`(`requirejs`) `kissy` `kissyfn`

- htmlEncode: 翻译的js代码中的html特殊字符转义方法

## Gruntfile.js Demo

```js
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
```
