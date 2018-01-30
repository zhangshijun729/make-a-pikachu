!function () {
    var duration = 5

    function writeCode(prefix, code, fn) {
        let container = document.querySelector('#code')
        let styleTag = $('#styleTag')
        let n = 0
        setTimeout(function run() {
            n += 1
            container.innerHTML=code.substring(0, n)
            styleTag.html(code.substring(0, n))
            container.scrollTop=container.scrollHeight
            if (n < code.length) {
                setTimeout(run, duration)
            } else {
                fn && fn.call()
            }
        }, duration)
    }

    let code = `.preview{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fee433;
}

.wrapper {
    width: 100%;
    height: 165px;
    position: relative;
}
.nose{
    height: 0;
    width: 0;
    position: absolute;
    top: 28px;
    left: 50%;
    transform: translateX(-50%);
    border: 11px solid;
    border-radius: 50%;
    border-color: black transparent transparent;
}
.eye{
    height: 49px;
    width: 49px;
    position: absolute;
    border: 2px solid black;
    border-radius: 50%;
    background: #2e2e2e;
}
.eye.left{
    right: 50%;
    margin-right: 90px;
}
.eye.right{
    left: 50%;
    margin-left: 90px;
}
.eye::before{
    content: '';
    display: block;
    height: 24px;
    width: 24px;
    position: absolute;
    left: 5px;
    border: 2px solid black;
    border-radius: 50%;
    background: white;
}
.face{
    width: 68px;
    height: 68px;
    position: absolute;
    top: 85px;
    border: 2px solid black;
    border-radius: 50%;
    background: #fc0d1c;
}
.face.left{
    right: 50%;
    margin-right: 116px;
}
.face.right{
    left: 50%;
    margin-left: 116px;
}
.upperLip{
    height: 25px;
    width: 80px;
    border: 2px solid black;
    position: absolute;
    top: 50px;
    background: #FDE348;
}
.upperLip.left{
    right: 50%;
    border-bottom-left-radius: 40px 25px;
    border-top: none;
    border-right: none;
    transform: rotate(-20deg);
}
.upperLip.right{
    left: 50%;
    border-bottom-right-radius: 40px 25px;
    border-top: none;
    border-left: none;
    transform: rotate(20deg);
}
.lowerLip-wrapper{
    bottom: -35px;
    position: absolute;
    left: 50%;
    margin-left: -150px;
    height: 140px;
    overflow: hidden;
    width: 300px;
}
.lowerLip{
    height: 3500px;
    width: 300px;
    background: #990513;
    border-radius: 200px/2000px;
    border: 2px solid black;
    position: absolute;
    bottom: 0;
    overflow: hidden;
}
.lowerLip::after{
    content: '';
    display: block;
    width: 120px;
    height: 120px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -60px;
    border-radius: 50%;
    background: #fc4a62;
}`
    writeCode('', code)
    $('.actions').on('click', 'button', function (e) {
        let $button = $(e.currentTarget)
        let speed = $button.attr('data-speed')
        console.log(speed)
        $button.addClass('active').siblings('.active').removeClass('active')
        switch (speed){
            case 'slow':
                duration = 100
                break
            case 'normal':
                duration = 50
                break
            case 'fast':
                duration = 10
                break
        }
    })
}.call()