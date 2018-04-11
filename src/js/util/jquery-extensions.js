
!(() => {
  "use strict"


  // ----------------------------------------------------------------------
  // Insert At
  // ----------------------------------------------------------------------

  $.fn.insertAt = function(index, $parent) {
    return this.each(function() {
      index === 0
        ? $parent.prepend(this)
        : $parent.children().eq(index - 1).after(this)
    })
  }


  // ----------------------------------------------------------------------
  // Selector Cache
  // ----------------------------------------------------------------------

  var SelectorCache = {}

  window.$cache = function(selector, context, reset) {
    if (typeof context === "boolean") {
      reset   = context
      context = false
    }
    var cacheKey = context
      ? `${context.selector} ${selector}`
      : selector

    if (undefined === SelectorCache[cacheKey] || reset) {
      SelectorCache[cacheKey] = context
        ? context.find(selector)
        : jQuery(selector)
    }

    return SelectorCache[cacheKey]
  }


})()
