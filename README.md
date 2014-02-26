grunt-contrib-crox
==================

Crox 的 Grunt插件

## Crox任务的options说明

- `target` 翻译的目标语言，可同时翻译成多个，用 `,` 隔开。目前支持： `php` | `vm` | `nodejs`(`commonjs`) | `cmd`(`seajs`) | `amd`(`requirejs`) | `kissy` | `kissyfn`

- `modulePrefix` 根模块前缀指定，例如 `app/sub/module/b` 的 `app`（主要用于js模块的翻译）

- `htmlEncode` 翻译的js代码中的html特殊字符转义方法（主要用于js相关翻译）

## Gruntfile.js Demo

*由于使用了grunt-newer插件，请注意newer:crox:go*

```js
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    crox: {
        options: {
            target: 'vm,nodejs',
            modulePrefix: 'app',
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

## 使用

- `grunt watch` 开启 `watch`，实时检测Crox模板文件改动

- `grunt crox` 执行所有匹配文件的翻译

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
