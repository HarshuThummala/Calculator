const body = document.getElementById("body")
const buttons = document.getElementsByTagName("button")

// Text
const equation = document.getElementById("equation")
const answer = document.getElementById("answer")

// Buttons
const multiply = document.getElementById("multiply")
const divide = document.getElementById("divide")
const subtract = document.getElementById("subtract")
const add = document.getElementById("add")

const numbers_obj = document.getElementsByClassName("num")
const numbers = Array.from(numbers_obj)
numbers.unshift(numbers.pop())

const clear = document.getElementById("clear")
const del = document.getElementById("del")
const equals = document.getElementById("equals")

const period = document.getElementById("period")

// Functions
function last_is_operand() {
    console.log(equation.innerHTML)
    console.log(equation.innerHTML.length)
    if (equation.innerHTML.length == 0) {
        console.log("a")
        return true
    } else if (equation.innerHTML[equation.innerHTML.length - 1] == " ") {
        console.log("b")
        return true
    } else {
        console.log("c")
        return false
    }
}

for (const num of numbers) {
    num.addEventListener("click", () => {
        equation.innerHTML += num.innerHTML
    })
}

function operand_to_equation(e) {
    return function () {
        if (last_is_operand()) {
        } else {
            equation.innerHTML += " "
            equation.innerHTML += e
            equation.innerHTML += " "
        }
    }
}


multiply.addEventListener("click", operand_to_equation("*"))
divide.addEventListener("click", operand_to_equation("/"))
subtract.addEventListener("click", operand_to_equation("-"))
add.addEventListener("click", operand_to_equation("+"))

clear.addEventListener("click", () => {
    equation.innerHTML = ""
    answer.innerHTML = ""
})

equals.addEventListener("click", () => {
    answer.innerHTML = Math.round(eval(equation.innerHTML) * 100) / 100
})

del.addEventListener("click", () => {
    if (last_is_operand()) {
        equation.innerHTML = equation.innerHTML.slice(0, -3)
    } else {
        equation.innerHTML = equation.innerHTML.slice(0, -1)
    }
})

period.addEventListener("click", () => {
    if (!last_is_operand()) {
        equation.innerHTML += "."
    }
})