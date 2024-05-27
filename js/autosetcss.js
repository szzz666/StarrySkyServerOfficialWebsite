// const darkbackground = "rgb(55, 55, 55)";
// const lightbackground = "rgb(200, 200, 200)";
// const darkcolor = "#rgb(200, 200, 200)";
// const lightcolor = "rgb(55, 55, 55)";

// const maxdarkbackground = "rgb(10, 10, 10)";
// const maxlightbackground = "rgb(245, 245, 245)";
// const maxdarkcolor = "rgb(245, 245, 245)";
// const maxlightcolor = "rgb(10, 10, 10)";

// const subjectcolor = "rgb(100, 149, 237)";
// const lightsubjectcolor = "rgb(65, 114, 202)";
// const darksubjectcolor = "rgb(135, 184, 272)";

const darkbackground = "#505050";
const lightbackground = "#c8c8c8";
const darkcolor = "#c8c8c8";
const lightcolor = "#505050";

const maxdarkbackground = "#373737";
const maxlightbackground = "#f5f5f5";
const maxdarkcolor = "#f5f5f5";
const maxlightcolor = "#373737";

const subjectcolor = "#6495ed";
const lightsubjectcolor = "#4172ca";
const darksubjectcolor = "#87b8f2";

// setTimeout(function () {
//     $(".bj").fadeIn(1000);
// }, 1200);


checkXValue();
function checkXValue() {
    if (x001) {
        $(".bj").fadeIn(1000);
    } else {
        setTimeout(() => {
            checkXValue(); // 再次检查并执行代码
        }, 100);
    }
}

$(".button1, .button2").css("background-color", subjectcolor);
function setdark() {
    $("svg").find('path').attr('fill', darkcolor);
    $("#timeshow, .button3, .theme, .theme div, .box1 img, #players_num, .box1_1, .scroll_bar, .popup, #showip, .message").css("background-color", maxdarkbackground);
    $("*").not(".title_bar .logo div, #showip, .zzb ol li span, .zzb h2, .motd").css("color", darkcolor);
    $(".title_bar .logo div").css("color", maxdarkbackground);
    $("#showip").css("color", subjectcolor);
    $(".mian, .title_bar, #darkbg").css("background-color", "rgba(0, 0, 0, 0.5)");
    if (isMobile) {
        $(".box1, .box2").css("background-color", "rgba(0, 0, 0, 0.5)");
        $(".mian").css("background-color", "rgba(255, 255, 255, 0)");
    }

}
function setlight() {
    $("svg").find('path').attr('fill', lightcolor);
    $("#timeshow, .button3, .theme, .theme div, .box1 img, #players_num, .box1_1, .scroll_bar, .popup, #showip, .message").css("background-color", maxlightbackground);
    $("*").not(".title_bar .logo div, #showip, .zzb ol li span, .zzb h2, .motd").css("color", lightcolor);
    $(".title_bar .logo div").css("color", maxlightbackground);
    $("#showip").css("color", subjectcolor);
    $(".title_bar").css("background-color", "rgba(255, 255, 255, 0.5)");
    if (!isMobile)
        $(".mian").css("background-color", "rgba(255, 255, 255, 0.5)");
    if (isMobile) {
        $(".box1, .box2").css("background-color", "rgba(255, 255, 255, 0.5)");
    }
    // $("#darkbg").css("background-color", "rgba(0, 0, 0, 0)");
}
var thememode = localStorage.getItem("thememode");

function changetheme() {
    var now = new Date();
    thememode = localStorage.getItem("thememode") || 0;
    if (thememode == 0) {
        if (20 <= now.getHours() || now.getHours() <= 6)
            thememode = 2;
        else
            thememode = 1;
    }
    if (thememode == 1) {
        setlight();
    } else {
        setdark();
    }
}

//这里开始运行
changetheme();


//弹窗
function openwin() {
    $(".masking").fadeIn(1000);
    console.log(isMobile);
    if (isMobile) {
        $(".popup").css({
            "width": "100%",
            "height": "650px",
            "bottom": "0px"
        });
        $(".useiframe iframe").attr({
            "width": "100%",
            "height": "600px"
        });
    } else {
        $(".popup").css({
            "width": "1156px",
            "height": "650px",
            "bottom": "0px"
        });
    }

}
function shutwin() {
    $(".useiframe iframe").attr("src", "loading.html");
    $(".masking").fadeOut(1000);
    $(".popup").css({
        "width": "115px",
        "height": "65px",
        "bottom": "600px"
    });
    setTimeout(function () {
        $(".popup").css("bottom", "-1200px");
    }, 200);
}





if (thememode == 1) {
    //svg图变色
    $(".popup svg").hover(function () {
        $(this).find('path').attr('fill', "red");
    }, function () {
        $(this).find('path').attr('fill', lightcolor);
    });
    $(".box1_1 svg, #showip svg").hover(function () {
        $(this).find('path').attr('fill', subjectcolor);
    }, function () {
        $(this).find('path').attr('fill', lightcolor);
    });
    $(".button3").hover(function () {
        $(this).find('svg').find('path').attr('fill', subjectcolor);
    }, function () {
        $(this).find('svg').find('path').attr('fill', lightcolor);
    });

    $(".button3, #timeshow").hover(function () {
        $(this).css("background-color", lightbackground);
    }, function () {
        $(this).css("background-color", maxlightbackground);
    });

    //按钮变色效果
    $(".button1, .button2").hover(function () {
        $(this).css("background-color", lightsubjectcolor);
    }, function () {
        $(this).css("background-color", subjectcolor);
    });
    $(".button1, .button2").hover(function () {
        $(this).css("color", maxlightcolor);
    }, function () {
        $(this).css("color", lightcolor);
    });
    $("#timeshow").hover(function () {
        $(this).find('div').css("color", subjectcolor);
    }, function () {
        $(this).find('div').css("color", lightcolor);
    });

    $("#darkbg").css("background-color", "rgba(0, 0, 0, 0)");

} else if (thememode == 2) {
    //svg图变色
    $(".popup svg").hover(function () {
        $(this).find('path').attr('fill', "red");
    }, function () {
        $(this).find('path').attr('fill', darkcolor);
    });
    $(".box1_1 svg, #showip svg").hover(function () {
        $(this).find('path').attr('fill', subjectcolor);
    }, function () {
        $(this).find('path').attr('fill', darkcolor);
    });
    $(".button3").hover(function () {
        $(this).find('svg').find('path').attr('fill', subjectcolor);
    }, function () {
        $(this).find('svg').find('path').attr('fill', darkcolor);
    });

    $(".button3, #timeshow").hover(function () {
        $(this).css("background-color", darkbackground);
    }, function () {
        $(this).css("background-color", maxdarkbackground);
    });

    //按钮变色效果
    $(".button1, .button2").hover(function () {
        $(this).css("background-color", darksubjectcolor);
    }, function () {
        $(this).css("background-color", subjectcolor);
    });
    $(".button1, .button2").hover(function () {
        $(this).css("color", maxdarkcolor);
    }, function () {
        $(this).css("color", darkcolor);
    });
    $("#timeshow").hover(function () {
        $(this).find('div').css("color", subjectcolor);
    }, function () {
        $(this).find('div').css("color", darkcolor);
    });
}

if (localStorage.getItem("thememode") == 0) {
    $(".t0").css("color", subjectcolor);
} else if (localStorage.getItem("thememode") == 1) {
    $(".t1").css("color", subjectcolor);
} else {
    $(".t2").css("color", subjectcolor);
}



