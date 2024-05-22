
function tipsmessage(mag) {
    $(".tips").css("display", "block");
    // 创建一个新的<div>元素并添加class属性
    var message = $('<div/>', {
        'class': 'message shadow',
        text: mag
    });
    $(message).css("color", subjectcolor);

    if (thememode == 1) {
        $(message).css("background-color", maxlightbackground);
    } else {
        $(message).css("background-color", maxdarkbackground);

    }

    // 将新创建的元素添加到class为"tips"的<div>中
    $(".tips").append(message);
    $(message).fadeIn(1000);


    setTimeout(function () {
        $(message).css("margin-top", "-36px");
        $(message).fadeOut(1000);
    }, 2000);
    setTimeout(function () {
        message.remove();
    }, 3000);
}


