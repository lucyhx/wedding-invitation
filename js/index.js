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
