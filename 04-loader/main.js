require("!style-loader!css-loader!./main.css") // 载入 main.css
//require("./main.css") // 载入 main.css
document.write('这里是入口<br/><br/>');
document.write(require('./module.js'));