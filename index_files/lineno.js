//Line�ͷ�����
var lineUrlArr = ["https://line.me/ti/p/llvHpldG32"];
//var lineUrlArr = ["https://line.me/ti/p/@482auzry"];
//Line�ٷ�̖����
//var lineUrlArr2 = ["https://line.me/ti/p/@482auzry"];

//��Ҫ��
var index = Math.floor((Math.random() * lineUrlArr.length));
//var index2 = Math.floor((Math.random() * lineUrlArr2.length));
var lineUrl = lineUrlArr[index];
//var lineUrl2 = lineUrlArr2[index2];

function showline() {
    clickCaculate();
    window.open(lineUrl);
    // fbq('track', 'Contact');
}

function showline2() {
    clickCaculate();
    window.open(lineUrl2);
    // fbq('track', 'Contact');
}

function clickCaculate() {
    submitBlock();
}

var newtime = 0;
function submitBlock() {
    var Today = new Date();
    var Hour = Today.getHours();
    var Minute = Today.getMinutes();
    var Second = Today.getSeconds();
    var nowtime = (Hour * 3600) + (Minute * 60) + Second;
    if ((nowtime - newtime) > 10) {
        clickCaculateImpl();
        console.log("success");
        newtime = nowtime;
    } else {
        console.log("blocked");
        return;
    }
}

function clickCaculateImpl() {
	console.log("ִ�е��ͳ��");
}