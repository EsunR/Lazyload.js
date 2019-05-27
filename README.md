## Lazyload.js: 

A lazyload plugin based on native Javascript

Svg From: https://github.com/SamHerbert/SVG-Loaders

## How to use: 

Demo:

```html
<head>
  ... ...
  <script src="./js/lazyLoad.js"></script>
  <script src="./js/index.js"></script>
</head>

<body>
  <div class="lazyload">
    <img class="loading" src="./img/bars.svg" data-original="http://img.cdn.esunr.xyz/74866762_p0_master1200.jpg">
  </div>
</body>

```

```js
// index.js
window.onload = function(){
  ... ...
  lazyLoadInit();
  ... ...
}
```

Please define the width and height of `.lazyload` and its **background** in the css file on the page

```css
.lazyload{
  width: 500px;
  height: 500px;
  margin: 20px auto;
  background-color: #1abc9c;
}
```

> Note: If the width and height of the external container `.lazyload` are specified, the real image will automatically be stretched according to the original scale after loading.