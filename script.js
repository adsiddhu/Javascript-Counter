const dec = document.getElementById("dec")
const inc = document.getElementById("inc")
const count = document.getElementById("counter")

let result = 0
count.innerText = result
function clickType(value) {
    if (value === "dec" && result === 0) {
        alert(`number can't updated now`)
        return
    }
    value === "inc" ? ++result : --result
    count.innerText = result
}

inc.addEventListener("click", () => {
    clickType("inc")
})

dec.addEventListener("click", () => {
    clickType("dec")
})