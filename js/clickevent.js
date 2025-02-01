$(document).ready(function () {
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
    var concise = 1;
    if (isMobile) {
        $(".concise").click(function () {
            if (concise == 1) {
                $(".box1").css({
                    "background-color": "rgba(255, 255, 255, 0)",
                    "border-color": "rgba(255, 255, 255, 0)",
                    "backdrop-filter": "blur(0px)"
                });
                $(".box1 img, #players_num").css("opacity", "0");
                $(".box1_1").css("visibility", "visible");
                concise++;
            } else {
                $(".box1").css({
                    "background-color": "rgba(255, 255, 255, 0.5)",
                    "border-color": "rgba(255, 255, 255, 0.18)",
                    "backdrop-filter": "blur(5px)"
                });
                changetheme();
                $(".box1 img, #players_num").css("opacity", "1");
                concise = 1;
            }
        });
    } else {
        $(".concise").click(function () {
            if (concise == 1) {
                $('.box2, .box3').fadeOut(1000);
                setTimeout(function () {
                    $(".mian").css("width", "300px");
                }, 1000)
                concise++;
            }
            else if (concise == 2) {
                $(".mian").css({
                    "background-color": "rgba(255, 255, 255, 0)",
                    "border-color": "rgba(255, 255, 255, 0)",
                    "backdrop-filter": "blur(0px)"
                });
                $(".box1 img, #players_num").css("opacity", "0");
                $(".box1_1").css("visibility", "visible");
                concise++;
            } else {
                $(".mian").css({
                    "border-color": "rgba(255, 255, 255, 0.18)",
                    "backdrop-filter": "blur(5px)"
                });
                changetheme();
                $(".box1 img, #players_num").css("opacity", "1");
                $(".mian").css("width", "1500px");
                setTimeout(function () {
                    $('.box2, .box3').fadeIn(1000);
                }, 1000)
                concise = 1;
            }
        });
    }

    //音乐
    $(".music").click(function () {
        if (audio.paused) {
            audio.play();
            $('.music').css('border', '2px solid #1afa29');
            $('.music').find('svg').attr('width', 26);
            $('.music').find('svg').attr('height', 31);
        } else {
            audio.pause();
            $('.music').css('border', 'none');
            $('.music').find('svg').attr('width', 30);
            $('.music').find('svg').attr('height', 35);
        }
    });

    //加入游戏
    $(".jiaruyouxi").click(function () {
        tipsmessage("正在添加服务器到你的游戏服务器列表内");
        window.open("minecraft://?addExternalServer=§l§5星空服|mc.szzz666.top:19132");
    });
    //关闭窗口
    $(".popup  svg, .masking").click(function () {
        $("#fwqcx, .zzb, .useiframe").fadeOut(250);
        shutwin();
    });
    $(".popup").click(function (event) {
        event.stopPropagation();
    });
    //服务器状态
    $(".zhuangtai").click(function () {
        tipsmessage("下载星空服App，查看服务器状态");
        // openwin()
        // $("#fwqcx").fadeIn(250);
    });
    //赞助
    $(".zangzhu").click(function () {
        openwin()
        $(".zzb").fadeIn(250);
    });
    //打开窗口
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
        $(".useiframe iframe").attr("src", "https://qm.qq.com/q/EPKQQs7k0E");
    });
    //分享
    $(".xieguan").click(function () {
        window.open("http://mc.szzz666.top:28668/");
    });
    //聊天
    $(".liaotian").click(function () {
        window.open("http://mc.szzz666.top:23400/public/StarrySkyLink");
    });
    //app
    $(".xzapp").click(function () {
        window.open("https://github.com/szzz666/StarrySkyServerOfficialWebsite/releases/download/%E6%98%9F%E7%A9%BA%E6%9C%8Dapp/StarrySkyServer_v1.8.5.apk");
    });
});