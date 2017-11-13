# jquery.create
Create HTML element using jQuery

```
var instance = $().create(props);
```

returns jQuery instance of created HTML element.

```
$(selector).create(props);
```

appends jQuery instance of created HTML element.


## Properties

-  `cls` className that will be set to created HTML element
-  `items` array of properties for child elements

## jQuery functions as properties

all jQuery functions can be used as properties. f.e. `css` , `text`, `click`

## Example

```
$('body').create({cls: 'my-class', css: {color: '#c0c0c0'}, text: 'some text', click: function(){}});
```