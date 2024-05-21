
var imgs = new Array();
var imgnum = 0;
var x = 0;
function downloadFile(url, fileName) {
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    link.target = "_blank"; // 可选，如果希望在新窗口中下载文件，请取消注释此行
    link.click();
}
function DownloadImg(url, mimeType, fileName) {
    // 创建新的图像元素
    const img = new Image();
    img.crossOrigin = 'anonymous'; // 设置跨域属性，尝试请求图片资源

    // 图像加载完成的回调
    img.onload = function () {
        // 创建画布，并设置尺寸与图像相同
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');

        // 在画布上绘制图像
        ctx.drawImage(img, 0, 0, img.width, img.height);

        // 将画布内容转换为指定格式的 Data URL
        const convertedUrl = canvas.toDataURL(mimeType);

        // 创建下载链接
        const link = document.createElement('a');
        link.href = convertedUrl;

        // 根据 MIME 类型设置下载文件名
        // let fileName = 'StarrySky';
        if (mimeType === 'image/png') {
            fileName += '.png';
        } else if (mimeType === 'image/jpeg') {
            fileName += '.jpg';
        }
        link.download = fileName;

        // 将下载链接添加到页面并触发点击以下载
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link); // 下载后移除元素
    };

    // 设置图像元素的源为提供的URL
    img.src = url;

    // 检查图片加载是否失败（例如由于跨域问题）
    img.onerror = function () {
        console.error('Failed to load image from the provided URL.');
    };
}


function getimg() {
    if (isMobile) {
        axios.get("https://www.loliapi.com/acg/pe/?type=url")
            .then(result => {
                imgs.push(result.data);
            })
            .catch(error => {
                console.log("背景图片加载失败");
            });
    } else {
        axios.get("https://www.loliapi.com/acg/pc/?type=url")
            .then(result => {
                imgs.push(result.data);
            })
            .catch(error => {
                console.log("背景图片加载失败");
            });
    }

}

getimg();
setbackground();
function setbackground() {
    if (imgs[imgnum] != undefined) {

        if (isMobile) {
            $(".bj").css({
                "background": "url('" + imgs[imgnum] + "')",
                "background-position": "center center",
                /* 背景图不平铺 */
                // "background-repeat": "no-repeat",
                /* 当内容高度大于图片高度时，背景图像的位置相对于viewport固定 */
                "background-attachment": "fixed",
                /* 让背景图基于容器大小伸缩 */
                "background-size": "100% auto",
                /* 设置背景颜色，背景图加载过程中会显示背景色 */
                "width": "100%",
                "height": "100vh",
                "position": "fixed",
                "overflow-y": "auto"
            });
        } else {
            $(".bj").css({
                "background": "url('" + imgs[imgnum] + "')",
                "background-position": "center center",
                /* 背景图不平铺 */
                "background-repeat": "no-repeat",
                /* 当内容高度大于图片高度时，背景图像的位置相对于viewport固定 */
                "background-attachment": "fixed",
                /* 让背景图基于容器大小伸缩 */
                "background-size": "100% auto",
                /* 设置背景颜色，背景图加载过程中会显示背景色 */
                "width": "100%",
                "height": "100vh",
                "position": "fixed",
                "overflow-y": "auto"
            });
        }

        x++;
    } else {
        setTimeout(setbackground, 100);
    }

}

$(".qyz").click(function () {
    if (imgnum > 0) {
        imgnum--;
        setbackground();
    }
});

$(".xz").click(function () {
    if (imgs[imgnum] != undefined) {
        DownloadImg(imgs[imgnum], "image/png", "StarrySkyServer");
    } else {
        setTimeout(setbackground, 100);
    }
});

$(".hyz").click(function () {
    getimg();
    if (imgnum <= x) {
        imgnum++;
        setbackground();
    }

});

