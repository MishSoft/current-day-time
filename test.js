
const daytext = document.querySelector(".day")
const hourstext = document.querySelector(".hours")
const some = document.querySelector('.some')

let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]


setInterval(checkTime, 500)



function checkTime() {
    let date =  new Date()
    let day = date.getDay()
    let year = date.getFullYear()
    let month = months[date.getMonth()]
    let number = date.getDate()

    
    daytext.innerText = `${weekdays[day]}`
    some.innerText = `${month} / ${number} / ${year}`
    
    let hours = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()
    let en;

    if(hours > 12) {
        en = 'AM'
    } else {
        en = "PM"
    }

    if (hours == 0) {
        hours = 12
    }

    if(hours < 10) {
        hours = '0' + hours
    }

    if(minute < 10) {
        minute = "0" + minute
    }

    if(second < 10) {
        second = '0' + second
    }

    hourstext.innerHTML = `${hours} : ${minute} : ${second} ${en}`
}
