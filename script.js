document.getElementById("calcbtn").addEventListener("click", () => {
    document.getElementById("calculator").classList.toggle("visible");
})

const buttons = document.querySelectorAll(".btn")
buttons.forEach( (elem) => {
    elem.addEventListener("click", () => {
        press(elem.id)
    })
} )

//TODO: keydown handling
window.addEventListener("onKeyDown", (key) => {
    e.preventDefaults
    press(key)
})

let base = ""
let current = ""

function press(btn) {
    console.log(btn)
    if(!isNaN(btn)) {
        current += btn
        console.log("isnan")
        document.getElementById("currentnumber").textContent = current
    } else if(btn == "clear"){
        base = ""
        current = ""
        document.getElementById("currentnumber").textContent = 0
    }
    console.log(current)
}