jquery.computed-style.js
========================

This is a simple jQuery plugin that allows you to access the computedStyle property of any CSS element in a jQuery, cross-browser way. It also contains a couple of helper methods that allow you to access some common properties in a more consistent way.

## Usage

Usage is simple. Include the file in your page:

```html
<script type="text/javascript" src="/javascripts/jquery.computed-style.js"></script>
```
	
And then call the `.computedStyle()` method to access the entire computed CSS object. Pass through the property name `.computedStyle('background-color')` to access a specific property.

## Example

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
console.log( "Parent Width: " + $('#parent').computedWidth() ); // 400
console.log( "Parent Height: " + $('#parent').computedHeight() ); // 800
console.log( "Child Width: " + $('#child').computedWidth() ); // 400
console.log( "Child Height: " + $('#parent').computedHeight() ); // 300
console.log( "H2 Colour: " + $('#child h2').computedStyle('color') ); // #BADA55
```

In the example above, the parent's width and height are exact how they're set in the `<style>` tag, `400` and `800` respectively. The child's width is set to `100%`, so its calculated width is its parent's width, so `400`. In the `<style>` tag, we've set the height to be 400px but that's overruled in the inline `style=""` property, so its calculated height is `300`.
  
Finally, the colour of the `<h2>` here is set to be `#000` inline, but using the `!important` declaration, it is overruled by the contents of the `<style>` tag and thus becomes `#BADA55`.

## License

This plugin is [licensed under the MIT license](http://www.opensource.org/licenses/MIT), which means you can do absolutely anything you want with it, assuming you keep the copyright notices intact. Enjoy!