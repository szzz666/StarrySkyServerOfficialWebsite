//复制
function copy(textToCopy) {
    navigator.clipboard.writeText(textToCopy)
        .then(function () {
            tipsmessage("已经复制");
        }, function (err) {
            tipsmessage("复制失败，请检查浏览器是否支持该功能");
        });
}

$("#showip svg").click(function () {
    copy("IP：mc.szzz666.top 端口：19132");
});

function roud() {
    // 移除原有的script标签
    $('script.autosetcss').remove();

    // 动态创建新的script标签并添加到DOM中
    var newScript = $('<script>', {
        src: 'js/autosetcss.js',
        class: 'autosetcss'
    });
    // 假设你想将新脚本添加到body末尾
    $('body').append(newScript);
}
//主题切换
$(".t2").click(function () {
    localStorage.setItem("thememode", 2);
    // location.reload();
    roud();
    $(this).css("color", subjectcolor);
});
$(".t1").click(function () {
    localStorage.setItem("thememode", 1);
    roud();
    // location.reload();
    $(this).css("color", subjectcolor);
});
$(".t0").click(function () {
    localStorage.setItem("thememode", 0);
    roud();
    // location.reload();
    $(this).css("color", subjectcolor);
});

//主题按钮动画
$(".themeset").click(function () {
    $(this).find('div').fadeToggle(200, 'swing');
});
//隐藏显示按钮
var concise = true;
$(".concise").click(function () {
    if (concise) {
        $(".mian").css("width", "300px");
        $('.box2, .box3').fadeOut(250);
        concise = !concise;
    } else {
        $(".mian").css("width", "1500px");
        $('.box2, .box3').fadeIn(1500);
        concise = !concise;
    }
});
$(".popup  svg").click(function () {
    $("#fwqcx, .zzb, .useiframe").fadeOut(250);
    shutwin();
});
//服务器状态
$(".zhuangtai").click(function () {
    openwin()
    $("#fwqcx").fadeIn(250);
});
//赞助
$(".zangzhu").click(function () {
    openwin()
    $(".zzb").fadeIn(250);
});
//useiframe
$(".download, .fankui, .pindao, .qqqun").click(function () {
    openwin()
    $(".useiframe").fadeIn(250);
});
//下载
$(".download").click(function () {
    $(".useiframe iframe").attr("src", "https://mc.minebbs.com/#/");
});
//反馈
$(".fankui").click(function () {
    $(".useiframe iframe").attr("src", "https://www.wenjuan.com/s/UZBZJvqQRqb/");
});
//频道
$(".pindao").click(function () {
    $(".useiframe iframe").attr("src", "https://pd.qq.com/s/d88deyhxs");
    // window.open("https://pd.qq.com/s/d88deyhxs");
});
//QQ群
$(".qqqun").click(function () {
    $(".useiframe iframe").attr("src", "http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=ksasgw0qoukuK_Z71a6raIFSbLwUZvPF&authKey=k66FPcTylwarK9TyBdMflk3Ftgi6kmBvV6DZpyyc%2Fyql5%2Fx1z0OAlZvnXDVcPvUd&noverify=0&group_code=279669759");
});
//分享
$(".fenxiang").click(function () {
    tipsmessage("等待开发，敬请期待");
});
//聊天
$(".liaotian").click(function () {
    tipsmessage("等待开发，敬请期待");
});