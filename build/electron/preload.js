"use strict";
window.addEventListener('DOMContentLoaded', function () {
    var replaceText = function (selector, text) {
        var element = document.getElementById(selector);
        if (element)
            element.innerText = text;
    };
    for (var _i = 0, _a = ['chrome', 'node', 'electron']; _i < _a.length; _i++) {
        var type = _a[_i];
        replaceText("".concat(type, "-version"), process.versions[type]);
    }
});
//# sourceMappingURL=preload.js.map