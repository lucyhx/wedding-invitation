var target = document.querySelector('#page-1-footer')
//给element注入transform属性
Transform(target, true)

new AlloyTouch({
  touch: '#page-1-footer',//反馈触摸的dom
  vertical: false,//不必需，默认是true代表监听竖直方向touch
  target: target, //运动的对象
  property: 'rotateY',  //被滚动的属性
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
    console.log('leave' + index)
  },
  beginToPage: function (index) {
    console.log('to' + index)
    pb.to(index / (this.length - 1))
  }
})
pb = new ProgressBar('#progress', fp.length - 1)
