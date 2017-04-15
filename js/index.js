var target = document.querySelector('#page-1-footer')
Transform(target, true)

new AlloyTouch({
  touch: '#page-1-footer',
  vertical: false,
  target: target,
  property: 'rotateY',
  touchStart: function (evt) {
    evt.stopPropagation()
  },
  bindSelf: true,
  touchMove: function (evt) {
    evt.stopPropagation()
  }

})

var pb
var fp = new AlloyTouch.FullPage('#fullpage', {
  animationEnd: function () {
  },
  leavePage: function (index) {
  },
  beginToPage: function (index) {
    pb.to(index / (this.length - 1))
  }
})
pb = new ProgressBar('#progress', fp.length - 1)

document.addEventListener('WeixinJSBridgeReady', function () {
  document.getElementById('audio-music').play()
}, false)

function insertCSS (selector, rule) {
  if (document.styleSheets && document.styleSheets.length) {
    try {
      addCSSRule(document.styleSheets[document.styleSheets.length - 1],
        selector, rule, 0)
    } catch (ex) {
      console.error(ex.message, rule)
    }
    function addCSSRule (sheet, selector, rules, index) {
      if ('insertRule' in sheet) {
        sheet.insertRule(selector + '{' + rules + '}', index)
      } else if ('addRule' in sheet) {
        sheet.addRule(selector, rules, index)
      }
    }
  } else {
    var style = document.createElement('style')
    style.innerHTML = rule
    document.head.appendChild(style)
  }
  return
}

if (window.innerHeight > 0 && window.innerWidth / window.innerHeight > 1.5 / 2) {
  try {
    insertCSS('#full-page', 'width: '
      + (100 * 1.5 * window.innerHeight) / (2 * window.innerWidth)
      + '%;')
  } catch (e) {
    console.error(e)
  }
  try {
    insertCSS('.invitations h1', 'line-height: 36px; font-size: 1.2em;')
    insertCSS('.invitations p', 'line-height: 27px; font-size: 0.9em;')
  } catch (e) {
    console.error(e)
  }
}
