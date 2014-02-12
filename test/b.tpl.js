module.exports = function(root) {
    var $s = '';
    $s += myHtmlEncode(root.b);
    $s += "\n\n" +
        require('./a.tpl.js')(root) +
        "\n\n\nfdafdsafdafdsafdafdsafdafdsa";
    return $s;
};