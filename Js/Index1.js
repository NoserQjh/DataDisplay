/*
 * @Author: NoserQJH
 * @LastEditors: NoserQJH
 * @Date: 2019-06-26 20:10:27
 * @LastEditTime: 2019-08-28 19:15:31
 * @Description:
 */


ButtonName2ScrollNum = {
    "IndexButtonImage1": 0,
    "IndexButtonImage2": 750,
    "IndexButtonImage3&4": 1500,
    "IndexButtonImage5": 2250,
    "IndexButtonImage6": 3000,
    "IndexButtonImage7": 3750,
}
ScrollNum2ButtonName = {
    0: "IndexButtonImage1",
    750: "IndexButtonImage2",
    1500: "IndexButtonImage3&4",
    2250: "IndexButtonImage5",
    3000: "IndexButtonImage6",
    3750: "IndexButtonImage7",
}
var indexButtons = document.getElementsByClassName("IndexButton")
for (i = 0, len = indexButtons.length; i < len; i++) {
    indexButtons[i].onclick = function () {
        var indexButtons = document.getElementsByClassName("IndexButton")
        for (i = 0, len = indexButtons.length; i < len; i++) {
            indexButtons[i].style.color = 'rgb(68,68,68)';
            indexButtons[i].style.fontWeight = 'normal';
            indexButtons[i].style.fontSize = '20px';
        }
        this.style.color = 'rgb(0,0,0)';
        this.style.fontWeight = 'bold';
        this.style.fontSize = '20px';
        window.scrollTo(0, ButtonName2ScrollNum[this.id]);
    };
}
window.addEventListener("scroll", function (e) {
    var nowButton = ""
    var indexButtons = document.getElementsByClassName("IndexButton")
    for (var key in ScrollNum2ButtonName) {
        if ((key - 375 < window.pageYOffset) & (key + 375 > window.pageYOffset)) {
            nowButton = ScrollNum2ButtonName[key]
        }
    }
    for (i = 0, len = indexButtons.length; i < len; i++) {
        if (indexButtons[i].id == nowButton) {
            indexButtons[i].style.color = 'rgb(0,0,0)';
            indexButtons[i].style.fontWeight = 'bold';
            indexButtons[i].style.fontSize = '20px';
        } else {
            indexButtons[i].style.color = 'rgb(68,68,68)';
            indexButtons[i].style.fontWeight = 'normal';
            indexButtons[i].style.fontSize = '20px';
        }
    }

})
