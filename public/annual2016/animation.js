/**
 * Created by Clovin on 05/01/2018.
 */

function Animation () {
  this.status = false // 当前的状态（播放或未播放）
}

//    初始化ppt动画
Animation.prototype.pptInit = function () {
  var nowPage = $('.page')

  //   为每一个page绑定事件，使得动画能够连续进行，并将上一个page隐藏
  nowPage.on('animationEnd webkitAnimationEnd oAnimationEnd', function (event) {
    console.log('yes')
    var now = $(event.target)
    var nextPage = now.next()

    if (nextPage.hasClass('page')) {
      now.fadeOut(900)
      nextPage.css('animation-play-state', 'running').addClass('active')
    }
  })
}

//    开始ppt动画，该函数与loading.js一个事件关联，进行完这个会到tip2的页面，再由tip2唤醒ppt动画的播放
Animation.prototype.pptStart = function () {
  this.status = true
  $('#tip').fadeOut(1000)   //  确保tip页面是隐藏的，如果存在就将其隐藏

  setTimeout(function () {
    $('#loading').hide()
    $('#tip2').fadeIn()
  }, 1000)
}
