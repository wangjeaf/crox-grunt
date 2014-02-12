grunt-contrib-crox
==================

Crox 的 Grunt插件

## 参数说明

- target: 翻译的目标语言，支持： `php` `vm` `nodejs`(`commonjs`) `cmd`(`seajs`) `amd`(`requirejs`) `kissy` `kissyfn`

- htmlEncode: 翻译的js代码中的html特殊字符转义方法

## Gruntfile.js Demo

*由于使用了grunt-newer插件，请注意new:crox:go*

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

  grunt.loadNpmTasks('grunt-contrib-watch'); 
  grunt.loadNpmTasks('grunt-contrib-crox'); 
  grunt.loadNpmTasks('grunt-newer');
  grunt.registerTask('default', ['watch']);
};
```

## package.json Demo

```js
{
  "name": "test-grunt-contrib-crox",
  "dependencies": {
    "crox": "*",
    "grunt": "~0.4.2",
    "grunt-contrib-watch": "*",
    "grunt-contrib-crox": "*"
  }
}
```
