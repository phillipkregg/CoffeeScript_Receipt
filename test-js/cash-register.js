(function() {
  var Dish;
  window.Dish = Dish = (function() {
    function Dish(rawDescription) {
      var _ref, _ref2;
      if (rawDescription == null) {
        rawDescription = "";
      }
      this.title = (_ref = rawDescription.match(/([^$]+)/)) != null ? (_ref2 = _ref[1]) != null ? _ref2.trim() : void 0 : void 0;
    }
    return Dish;
  })();
}).call(this);
