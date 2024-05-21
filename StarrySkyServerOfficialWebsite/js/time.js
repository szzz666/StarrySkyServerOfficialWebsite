function updateTime() {
    var daysOfWeek = ['Sun', 'Mo', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var now = new Date();
    var time = now.getHours().toString().padStart(2, '0') + ":" + now.getMinutes().toString().padStart(2, '0') + ":" + now.getSeconds().toString().padStart(2, '0') +
        " " + daysOfWeek[now.getDay()] + "\n" + now.getFullYear() + "/" + (now.getMonth() + 1).toString().padStart(2, '0') + "/" + now.getDate().toString().padStart(2, '0');

    $('#time').text(time);
}

// 当文档加载完成后初始化时间
$(document).ready(function () {
    updateTime();

    // 每秒钟更新一次时间
    setInterval(updateTime, 1000);
});