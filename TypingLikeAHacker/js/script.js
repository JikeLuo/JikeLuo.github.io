import {text} from './code.js';


const win = document.querySelector('.text')
const start = document.getElementById('btn')
const main = document.querySelector('.main')


let count = 0
let count1 = 0
let flag = false

start.onclick = function () {
    this.parentNode.style.display = 'none'
    flag = true
}


window.addEventListener('keydown', () => {
        if (flag) {
            let split1 = textSplit(text, count)
            if (split1.length > count1) {
                main.scrollTop = main.scrollHeight
                win.innerHTML += split1[count1]
                count1++
                if (split1[count1] == undefined) return
                win.innerHTML += split1[count1]
                count1++
                if (split1[count1] == undefined) return
                win.innerHTML += split1[count1]
                count1++
                if (split1[count1] == undefined) return
                win.innerHTML += split1[count1]
                count1++
                if (split1[count1] == undefined) return
            } else if (split1.length <= count1) {
                count1 = 0
                count++;
            }
        }
    }
)

function type(text, count, count1) {

}


function textSplit(text, count) {
    if (text.length > count) {
        if (text[count].length > 2) {
            return text[count].split('')
        }
    }
    return text[count]
}


