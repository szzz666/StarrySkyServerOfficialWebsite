// 创建 audio 元素
var audio = document.createElement('audio');
audio.src = 'data/c.mp3'; // 替换为你的音频文件路径
audio.loop = true; // 循环播放
audio.volume = 0.5; // 设置音量为 50%
// 隐藏 audio 元素
audio.style.display = 'none';

// 将 audio 元素添加到页面中
document.body.appendChild(audio);

// 页面加载完成后自动播放音乐
audio.play();

if (audio.paused) {
    $('.music').css('border', 'none');
    $('.music').find('svg').attr('width', 30);
    $('.music').find('svg').attr('height', 35);
} else {
    $('.music').css('border', '2px solid #1afa29');
    $('.music').find('svg').attr('width', 26);
    $('.music').find('svg').attr('height', 31);
}
