jquery.computed-style.js
========================

This is a simple jQuery plugin that allows you to access the computedStyle property of any CSS element in a jQuery, cross-browser way. It also contains a couple of helper methods that allow you to access some common properties in a more consistent way.

Usage is simple. Include the file in your page:

```html
<script type="text/javascript" src="/javascripts/jquery.computed-style.js"></script>
```
	
And then call the `.computedStyle()` method to access the entire computed CSS object. Pass through the property name `.computedStyle('background-color')` to access a specific property.

```html
<style type="text/css">
  #parent { width: 400px; height: 800px; }
  #parent #child { height: 400px; }
  #parent #child h2 { color: #BADA55 !important; }
</style>

<div id="parent">
  <div id="child" style="width:100%; height:300px;">
    <h2 style="color:#000">A Heading</h2>
  </div>
</div>
```

```javascript
console.log( "Parent Width: " + $('#parent').computedWidth() ); // 400px
console.log( "Parent Height: " + $('#parent').computedHeight() ); // 800px
console.log( "Child Width: " + $('#child').computedWidth() ); // 400px
console.log( "Child Height: " + $('#parent').computedHeight() ); // 300px
console.log( "H2 Colour: " + $('#child h2').computedStyle('color') ); // #BADA55
```

This plugin is [licensed under the MIT license](http://www.opensource.org/licenses/MIT), which means you can do absolutely anything you want with it, assuming you keep the copyright notices intact. Enjoy!