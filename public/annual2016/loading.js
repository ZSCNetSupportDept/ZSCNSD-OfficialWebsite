var img = [
    "", "camera_m", "train_m", "film_m", "film_m", "film_m", "film2_m", "map_m", "sky_m", "stair_m", "fengxiang_m", "cat_m", "xiangshan_m",
    "qitou_m", "baoxiudan_m", "film_m", "film_m", "film_m", "film_m", "film_m", "bridge_m", "metting1_m", "metting2_m", "metting3_m", "metting4_m",
    "film_m", "film_m", "film_m", "film3_m", "film3_m", "film3_m", "film3_m", "film3_m", "film3_m", "film3_m", "tree_m", "lake_m", "words_m"
];

var loaded = 0,   // 当前已加载的资源数
    loadSum = 38, //  需要加载的资源的总数
    isIOS = false;  //  判断是否是ios系统

//  将img的src属性添加
function add(imgages) {
    var i = 1;
    imgages.each(function () {
        $(this).prop('src', '/public/annual2016/images/' + img[i] + '.png');
        i++;
    });
}

//  绑定加载函数
function bindLoad(images, music, animation) {

    // 对IOS系统不能自动加载音乐的修复
    if (isIOS == true) {
        loadSum = 37;
    }

    //  为每一个img标签绑定加载事件
    images.each(function () {
        $(this).on('load', function () {
            loaded++;

            //   当加载的资源足够时进入ppt
            if (loaded >= loadSum) {
                if (animation.status == false) {
                    animation.pptStart();
                }
            }
        });
    });

    //  为音乐绑定加载事件
    music.on('canplay', function () {
        loaded++;

        //   当加载的资源足够时进入ppt
        if (loaded >= loadSum) {
            if (animation.status == false) {
                animation.pptStart();
            }
        }
    });
}

$(document).ready(function () {
    //   判断是否是ios系统
    if (/iPhone|iPod|/i.test(navigator.userAgent)) {
        isIOS = true;
    }

    //   判断是不是手机端，不是就不给访问
    if (/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        var images = $('.page img');
        var animation = new Animation();
        var music = $('#music');

        //   初始化页面，初始化完开始加载资源
        animation.pptInit();
        bindLoad(images, music, animation);
        add(images);

        //   tip2页面点击事件：使得音乐开始播放，ppt正式开始（增加tip2的目的是为了解决ios系统没法自动播放音乐的问题）
        $('#tip2').one('click', function (e) {
            music[0].loop = true;
            music[0].play();
            $('#tip2').fadeOut();
            $("#console").fadeIn();
            $('#page1').css('animation-play-state', 'running').addClass('active');
        });

        var playflage = 1;  // 音乐控件的需要
        //  音乐控件的点击事件
        $("#console").click(function () {
            if (playflage === 1) {
                music[0].pause();
                $('#console>button>img').attr('src', '/public/annual2016/images/play.png')
            }
            else {
                music[0].play();
                $('#console>button>img').attr('src', '/public/annual2016/images/pause.png')
            }
            playflage = ~playflage;
        });

        //  当资源加载超过20s的时候，就显示提示资源未加载完全可能影响观看的tip，然后进入ppt
        setTimeout(function () {
            if (animation.status == false) {
                $("#loading").hide();
                $('#tip').fadeIn();
                setTimeout(function () {
                    animation.pptStart();
                }, 2000);
            }
        }, 20000);

    } else {
        $("#loading").hide();
        $('#tip1').fadeIn();
    }
});
