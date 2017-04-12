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

function showInvitation () {
  document.getElementById('invitation-text-1').innerHTML =
    '邀请您参加我们的婚礼'
  document.getElementById('invitation-text-2').innerHTML =
    '在这个重要的时刻<br>有您的参与我们倍感幸福'
  document.getElementById('invitation-text-3').innerHTML =
    '20xx年xx月xx日<br>周六 晚上18点<br>XX市XXX<br>XXX<br>XXX'
}

showInvitation()

document.addEventListener('WeixinJSBridgeReady', function () {
  document.getElementById('audio-music').play()
}, false)