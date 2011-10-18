/**
 * jquery.computed-styles.js
 *
 * A simple jQuery plugin to fetch the computed CSS styles
 * for any element. Includes some helper wrapper methods
 *
 * Usage:
 *    $('some_element_selector').computedCSS('css_property');
 *    $('some_element_selector').computedWidth();
 *    $('some_element_selector').computedHeight();
 *
 * by Jamie Rumbelow <jamie@jamierumbelow.net>
 * http://jamieonsoftware.com
 * Copyright (c)2011 Jamie Rumbelow
 *
 * Licensed under the MIT license (http://www.opensource.org/licenses/MIT)
 */

(function($){
  
  /**
   * Fetch the computed CSS value for the current element
   */
  $.fn.computedStyle = function(property){
    // Make sure this selector has elements in it
    if (!this.length > 0) { return false; }
    if (property == null) { property = false; }
    
    var first_element = this.first(),
        computed_style;
    
    // Calculate the computed style property. First, try to call the getComputedStyle.
    // If we're using I.E. (surprise surprise) we need to access the proprietary .currentStyle.
    if (typeof document.defaultView != 'undefined' && typeof document.defaultView['getComputedStyle'] != 'undefined') { 
      // We need to pass getComputedStyle() the DOM element, so use get(0)
      computed_style = document.defaultView.getComputedStyle(first_element.get(0), null);
    } else {
      computed_style = first_element.currentStyle;
    }
    
    // Now we have the computed style, we can figure out what to return
    if (property === false) {
      return computed_style;
    } else {
      return computed_style[property];
    }
  };
  
  /**
   * Also, we'll define a few wrapper functions to make it slightly easier to
   * access some common properties
   */
  $.fn.computedWidth = function() { return parseInt(this.computedStyle('width')); };
  $.fn.computedHeight = function() { return parseInt(this.computedStyle('height')); };
  
})(jQuery);