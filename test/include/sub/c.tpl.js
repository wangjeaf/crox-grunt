module.exports = function(root
    /**/
) {
    var _t, _s = '';
    _t = root.d;
    if (_t != null) _s += myHtmlEncode(_t);
    _s += "\n\n";
    _t = root.e;
    if (_t != null) _s += myHtmlEncode(_t);
    return _s;
};