let word = document.querySelector("#word");
let style = document.querySelector('#style')
console.log(word)
let string = `
/*Who an i ?
I am MaQingyun。
大家好，我是一名前端新人：马青云。
我想通过练习题锻炼和展示我的前端技能。
接下来，我将通过做一个太极图来体现。
首先，我要添加颜色了。*/
body {
    color:red;
}
/*接下来，我需要添加一个div，并设定一些基本的样式。*/
#div1 {
    border: 1px solid red;
    height : 400px;
    width : 400px;
}
/*div开始基本变身了！*/
#div1 {
    border-radius: 50%;
    box-shadow : 0 0 3px grey;
    border-style : none;
}
/*如何添加黑白颜色效果？我采用了CSS Gradient来实现的。看过来~*/
#div1 {
    background: linear-gradient(90deg, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*太极有两个“八卦眼”,猜我如何实现它？*/
#div1::before {
    content: '';
    border-radius: 50%;
    position: absolute;
    height: 200px;
    width: 200px;
    top: 0;
    left: 50%;
    transform:translate(-50%);
    display: block;
}
#div1::after {
    content: '';
    border-radius: 50%;
    position: absolute;
    height: 200px;
    width: 200px;
    bottom: 0;
    left: 50%;
    transform:translate(-50%);
    display: block;
}
/*对两个伪元素进行变身，同样的，我使用了CSS Gradient。*/
#div1::before {
    background: radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 27%);
}
#div1::after {
    background: radial-gradient(circle, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);  
}
`
let n = 0
let string2 = []

let steap = () => {
    setTimeout(() => {
        if (n < string.length) {
            if (string[n] === '\n') {
                string2 = string2 + '</br>'
            } else if (string[n] == ' ') {
                string2 = string2 + '&nbsp;'
            } else {
                string2 = string2 + string[n]
            }
            word.innerHTML = string2
            style.innerHTML = string.substring(0, n)
            n = n + 1
            window.scrollTo(0, document.body.scrollHeight);
            word.scrollTo(0, document.body.scrollHeight);
            steap()
        }

    }, 50)

}
steap()
