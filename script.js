document.getElementById("calcbtn").addEventListener("click", () => {
    document.getElementById("calculator").classList.add("visible");
})

let currentoperation = ""
let base = ""
let current = ""
const currentnumberelement = document.getElementById("currentnumber")
const prevnumberelement = document.getElementById("prevnumber")


document.getElementById("closebtn").addEventListener("click", () => {
    document.getElementById("calculator").classList.remove("visible");
    currentoperation = ""
    base = ""
    current = ""
    currentnumberelement.textContent = 0;
    prevnumberelement.textContent = "";
})

const buttons = document.querySelectorAll(".btn")
buttons.forEach( (elem) => {
    elem.addEventListener("click", () => {
        press(elem.id)
    })
} )

//TODO: keydown handling
window.addEventListener("keydown", (e) => {
    press(e.key)
})




function press(btn) {
    
    console.log(btn)
    if (!isNaN(btn)) {
        current += btn;
        currentnumberelement.textContent = current;
    } else {
        switch (btn) {
            case "Delete":
                base = current = currentoperation = "";
                currentnumberelement.textContent = 0;
                prevnumberelement.textContent = `${base} ${currentoperation}`;
                break;
            case "Backspace":
                current = "";
                currentnumberelement.textContent = 0;
                break;
            case "+":
            case "-":
            case "*":
            case "/":
                currentoperation = btn;
                base = current;
                current = "";
                currentnumberelement.textContent = 0;
                prevnumberelement.textContent = `${base} ${currentoperation}`;
                break;
            case "pm":
                if(current.includes("-")) {
                    current = current.replace("-", "");
                } else {
                    current = "-" + current;
                }
                currentnumberelement.textContent = current;
                break;
            case "square":
                current = Math.pow(current, 2);
                currentnumberelement.textContent = current;
                break;
            case "=":
            case "Enter":
                current = eval(base + currentoperation + current);
                currentnumberelement.textContent = current;
                base = "";
                break;
            case ".":
            case ",":
                if (!current.includes(".")) {
                    current += ".";
                    currentnumberelement.textContent = current;
                }
                break;
            default: 
                return;
        }
        
    }
    document.getElementById(btn).classList.add("clicked");
    setTimeout(() => {
        document.getElementById(btn).classList.remove("clicked");
    }, 300)
    console.log(current)
}
