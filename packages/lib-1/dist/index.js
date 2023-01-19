require("react");
var $f4RmD$reactjsxruntime = require("react/jsx-runtime");

function $parcel$exportWildcard(dest, source) {
  Object.keys(source).forEach(function(key) {
    if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function get() {
        return source[key];
      }
    });
  });

  return dest;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

var $b267e50e0de447b8$exports = {};

$parcel$export($b267e50e0de447b8$exports, "Button", () => $b267e50e0de447b8$export$353f5b6fc5456de1);


const $b267e50e0de447b8$export$353f5b6fc5456de1 = ()=>{
    return /*#__PURE__*/ (0, $f4RmD$reactjsxruntime.jsx)("button", {
        children: "Boop"
    });
};


$parcel$exportWildcard(module.exports, $b267e50e0de447b8$exports);


//# sourceMappingURL=index.js.map
