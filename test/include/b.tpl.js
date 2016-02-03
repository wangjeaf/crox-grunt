module.exports = function(root
    /**/
) {
    var _t, _s = '';
    _t = root.b;
    if (_t != null) _s += myHtmlEncode(_t);
    _s += " - ";
    _t = root.c;
    if (_t != null) _s += myHtmlEncode(_t);
    return _s;
};