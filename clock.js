const long = 300
const short = 100
const between = 100

const hours = document.querySelector("#hours")
const minutes = document.querySelector("#minutes")
const seconds = document.querySelector("#seconds")
const vibrate= document.querySelector("#vibrate")
let now = new Date()

window.onload = () => {
    setInterval(() => {
        now = new Date()
        hours.value = now.getHours().toString()
        minutes.value = now.getMinutes().toString()
        seconds.value = now.getSeconds().toString()
    }, 1000)
}

function divmod(x, y) {
    return [Math.floor(x / y), x % y]
}

function numberToBeeps(number) {
    let res = []
    let [tens, units] = divmod(number, 10)
    for (let i = 0; i < tens; i++) {
        res.push(long)
        if (i != (tens - 1)) {
            res.push(between)
        }
    }
    if (tens) {
        res.push(between * 2)
    }
    for (let i = 0; i < units; i++) {
        res.push(short)
        if (i != (units - 1)) {
            res.push(between)
        }
    }
    return res
}

hours.onclick = () => {
    navigator.vibrate(numberToBeeps(now.getHours()))
}

minutes.onclick = () => {
    navigator.vibrate(numberToBeeps(now.getMinutes()))
}

seconds.onclick = () => {
    navigator.vibrate(numberToBeeps(now.getSeconds()))
}

vibrate.onclick = () => {
    let hourBeeps = numberToBeeps(now.getHours())
    let minuteBeeps = numberToBeeps(now.getMinutes())
    hourBeeps.push(between + 2)
    let beeps = hourBeeps.concat(minuteBeeps)
    navigator.vibrate(beeps)
}
