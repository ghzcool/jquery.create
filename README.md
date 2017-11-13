# jquery.create
Create HTML element using jQuery

## Installation

```
npm install jquery-create
```

Check dist directory for compiled and minified js files. Samle of usage is in demo directory. Add script after jQuery script. Required jQuery version is 3.2.1 but may work with older version.

## Usage

```
var instance = $().create(props);
```

returns jQuery instance of created HTML element.

```
$(selector).create(props);
```

appends jQuery instance of created HTML element.


## Properties

-  `tag` tagName "div" by default
-  `cls` className that will be set to created HTML element
-  `items` array of properties for child elements

## jQuery functions as properties

all jQuery functions can be used as properties. f.e. `css` , `text`, `click`

## Example

```
$('body').create({cls: 'my-class', css: {color: '#c0c0c0'}, text: 'some text', click: function(){}});
```