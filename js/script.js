'use strict'

let hours = document.querySelector('.hours'),
 minutes = document.querySelector('.minutes'),
 h = document.querySelector('.h'),
 m = document.querySelector('.m'),
 s = document.querySelector('.s')
 
// console.log(new Date().getSeconds());

// let i = 0
// let x

// function rec() {
//     console.log(i);

//     x = setTimeout(() => {
//         i++
//         rec()
//         if (i == 5) {
//             clearTimeout(x)
//         }

//     }, 200);
// }
// rec()

function clock() {
    let time = new Date()
    let hour = time.getHours()
    let min = time.getMinutes()
    let sec = time.getSeconds()


    if (hour < 10) {
        hours.innerHTML = "0" + hour
    } else {
        hours.innerHTML = hour
    }
    if (min < 10) {
        minutes.innerHTML = "0" + min
    } else {
        minutes.innerHTML = min
    }

    h.style.transform = `rotate(${hour * 30}deg)`
    m.style.transform = `rotate(${min * 6}deg)`
    s.style.transform = `rotate(${sec * 6}deg)`

    setTimeout(() => {
        clock()
    }, 1000);
}

clock()


// HomeWork ------>

let tabs = document.querySelectorAll('.tabsItem'),
tabsContents = document.querySelectorAll('.tabsContentItem'),
tabsSpan = document.querySelector('.tabsLink__span'),
swH  = document.querySelector(".stopwatch__hours"),
swM  = document.querySelector(".stopwatch__minutes"),
swS  = document.querySelector(".stopwatch__seconds"),
stBt = document.querySelector(".stopwatch__btn")


tabs.forEach((tab, id) => {
    tab.addEventListener("click", function () {
        tabs.forEach((element, idx) => {
            element.classList.remove('active')
            tabsContents[idx].classList.remove('active')
        });
        this.classList.add('active')
        tabsContents[id].classList.add('active')
    })

    // console.log(tabsContents[id]);
});



stBt.addEventListener("click", function () {
    if (stBt.innerHTML == "start") {
        stBt.innerHTML = "stop"
        tabsSpan.classList.add("active")
        runSecond()    
    } else if (stBt.innerHTML == "stop"){
        stBt.innerHTML = "clear"
        tabsSpan.classList.add("active_clear")
        clearTimeout(stopRun)
    } else if (stBt.innerHTML == "clear"){
        stBt.innerHTML = "start"
        tabsSpan.classList.remove("active_clear")
        tabsSpan.classList.remove("active")
        swH.innerHTML = 0
        swM.innerHTML = 0
        swS.innerHTML = 0
    }
})
 
let stopRun = null

function runSecond() {
    swS.innerHTML++
    if (swS.innerHTML > 59) {
        swM.innerHTML++
        swS.innerHTML = 0
    } else if ( swM.innerHTML > 59) {
        swH.innerHTML++
        swM.innerHTML = 0
    }

    stopRun = setTimeout(() => {
        runSecond()
    }, 10);
}




