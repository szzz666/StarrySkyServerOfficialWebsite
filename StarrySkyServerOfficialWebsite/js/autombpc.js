// 获取浏览器的User-Agent标识
var userAgent = navigator.userAgent.toLowerCase();

// 判断是否为移动设备
var isMobile = /mobile|android|iphone|ipad|phone/i.test(userAgent);


if (isMobile) {
    $('link[href^="css/index.css"]').attr('href', 'css/index_mb.css');
}
// function convertPxToVh() {
//     // 获取所有的样式表
//     const stylesheets = Array.from(document.styleSheets);

//     stylesheets.forEach(stylesheet => {
//         try {
//             // 尝试获取CSSRules，注意这里可能因为跨域问题抛出错误
//             const cssRules = stylesheet.cssRules;
//             if (cssRules) {
//                 cssRules.forEach(rule => {
//                     if (rule.style) {
//                         // 遍历每个规则的样式属性
//                         for (let prop of rule.style) {
//                             let value = rule.style.getPropertyValue(prop);
//                             if (value.includes('px')) {
//                                 // 将px值转换为vh
//                                 let pxValue = parseFloat(value);
//                                 let vhValue = pxValue / window.innerHeight * 100 + 'vh';
//                                 rule.style.setProperty(prop, vhValue);
//                             }
//                         }
//                     }
//                 });
//             }
//         } catch (e) {
//             // 忽略跨域等安全限制导致的错误
//             console.warn('无法访问某些样式表:', e);
//         }
//     });
// }