(function () {
  /**
   * 添加CSS样式
   * @param {String} css 要添加的CSS样式
   */
  function addcss(css) {
    var head = document.getElementsByTagName('head')[0];
    var s = document.createElement('style');
    s.setAttribute('type', 'text/css');
    if (s.styleSheet) {   // IE
      s.styleSheet.cssText = css;
    } else {                // the world
      s.appendChild(document.createTextNode(css));
    }
    head.appendChild(s);
  }

  /**
   * 添加懒加载的样式
   */
  function setStyle() {
    addcss(`
      .lazyload {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      
      .lazyload img {
        width: 100%;
      }
      
      .loading {
        padding: 25px;
        box-sizing: border-box;
        width: 100px !important;
        display: block;
      }      
    `)
  }

  /**
   * 检查图片状态，如果图片进入视口再挂载图片的真实地址，加载图片
   */
  var aLazyloadBox = document.getElementsByClassName('lazyload');
  function checkImgStatus() {
    for (let i = 0; i < aLazyloadBox.length; i++) {
      let oLazyloadBox = aLazyloadBox[i];
      let oImg = oLazyloadBox.querySelector('img');
      let dataOriginal = oImg.getAttribute('data-original')
      if (oLazyloadBox.getBoundingClientRect().top - window.innerHeight < 0 && dataOriginal != "") {
        oImg.setAttribute("src", dataOriginal);
        oImg.setAttribute("data-original", "");
        oImg.onload = function () {
          oImg.classList.remove("loading");
          if (oImg.clientHeight < oLazyloadBox.clientHeight) {
            oImg.style.height = "100%";
            oImg.style.width = "auto";
          }
        }
      }
    }
  }


  window.lazyLoadInit = function () {
    setStyle();
    window.addEventListener('scroll', checkImgStatus);
    checkImgStatus();
  };
})()