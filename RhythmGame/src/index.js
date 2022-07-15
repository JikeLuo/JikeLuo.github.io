import creatBlock from "./componenet/CreateBlock.js";
import {tempestissimo as song} from "./componenet/Music.Sheet/tempestissimo.js";

const btn = document.querySelector('.btn')
const oneDetect = document.querySelector('.One .detect')
const twoDetect = document.querySelector('.Two .detect')
const threeDetect = document.querySelector('.Three .detect')
const fourDetect = document.querySelector('.Four .detect')
const spaceDetect = document.querySelector('.space .detect')
const oneBlock = document.querySelector('.One .blocks')
const twoBlock = document.querySelector('.Two .blocks')
const threeBlock = document.querySelector('.Three .blocks')
const fourBlock = document.querySelector('.Four .blocks')
const spaceBlock = document.querySelector('.space .blocks')

const comboPlace = document.querySelector('.combo')


const perfect = document.querySelector('.perfect span')
const good = document.querySelector('.good span')
const bad = document.querySelector('.bad span')

let perfectNum = 0
let goodNum = 0
let badNum = 0
let combo = 0

console.log(typeof bad.innerHTML)

/* 直接控制block的css */
// console.log(Object.values(block.children))
// Object.values(block.children)[1].style.display = 'none'

song.map((item, index) => {
    switch (item.block) {
        case "1":
            creatBlock(oneBlock, item.position, song[0].speed, song[0].bpm)
            break
        case "2":
            creatBlock(twoBlock, item.position, song[0].speed, song[0].bpm)
            break
        case "3":
            creatBlock(threeBlock, item.position,  song[0].speed, song[0].bpm)
            break
        case "4":
            creatBlock(fourBlock, item.position, song[0].speed, song[0].bpm)
            break
        case "space":
            creatBlock(spaceBlock, item.position, song[0].speed, song[0].bpm)
            break
    }
})


window.addEventListener('keydown', (e) => {
    // e.preventDefault()
    if (e.code === "Space") DetectScore(spaceBlock, spaceDetect, e)
    if (e.code === "KeyD") DetectScore(oneBlock, oneDetect, e)
    if (e.code === "KeyF") DetectScore(twoBlock, twoDetect, e)
    if (e.code === "KeyJ") DetectScore(threeBlock, threeDetect, e)
    if (e.code === "KeyK") DetectScore(fourBlock, fourDetect, e)

})

/* 偵測分數的方法 */
function DetectScore(blocks, detectBlock, event) {
    TapEffect(detectBlock)

    Object.values(blocks.children).map(item => {
        const position = detectBlock.getBoundingClientRect().top - item.getBoundingClientRect().top
        const left = Math.floor(detectBlock.getBoundingClientRect().left - item.getBoundingClientRect().left)
        switch (true) {
            case (-30 < position && position < 30 && left === 0) :
                perfect.innerHTML = perfectNum++
                combo++
                comboPlace.innerHTML = combo
                console.log(combo)

                ClearBlock(item)
                break
            case (30 < position && position < 50 && left === 0) :
                good.innerHTML = goodNum++
                combo++
                comboPlace.innerHTML = combo
                ClearBlock(item)
                break
            case (50 < position && position < 70 && left === 0) :
                bad.innerHTML = badNum++
                combo++
                comboPlace.innerHTML = combo
                ClearBlock(item)
                break
            default:
                if(70 < position && position < 100 && left === 0 && left === 0) {
                    console.log('check')
                }

        }

    })
}

// function ClearLongBlock(item, event, detectBlock) {
//     item.style.transitionDuration = ''
//     item.style.bottom = '50px'
//     item.children[0].style.height = '0'
//     console.log('ss')
//     window.addEventListener('keyup', (e) => {
//         if (item.children[0].className === 'long' && event.code === e.code && (item.getBoundingClientRect().top - item.children[0].getBoundingClientRect().top) > 10) {
//             item.style.backgroundColor = 'transparent'
//             item.children[0].style.backgroundColor = 'transparent'
//         } else if (item.children[0].className === 'long' && event.code === e.code) {
//             item.style.display = 'none'
//             item.children[0].style.display = 'none'
//         }
//     })
//     if ((item.getBoundingClientRect().top - item.children[0].getBoundingClientRect().top) < 0) {
//         item.style.display = 'none'
//         item.children[0].style.display = 'none'
//     }
// }

function ClearBlock(item) {
    item.remove()
}

function TapEffect(father) {
    let div = document.createElement('div')
    div.classList.add('tapEffect')
    father.appendChild(div)
    setTimeout(() => {
        father.removeChild(father.children[0])
    }, 1000)
}

/* 按下開始後 方塊落下 */
btn.addEventListener('click', (e) => {
    e.preventDefault()
    let num = 3
    setInterval(function timeOut() {
        btn.children[0].innerHTML = num
        num--
        return timeOut;
    }(), 1000);
    if (num === -1) clearInterval(timeOut)

    setTimeout(() => {
        btn.style.display = "none"
        const music = document.querySelector('audio')
        music.play()
        blockFall(oneBlock)
        blockFall(twoBlock)
        blockFall(threeBlock)
        blockFall(fourBlock)
        blockFall(spaceBlock)
    }, 3000)
})

/* 開始讓Tap落下 */
function blockFall(block) {
    Object.values(block.children).map(item => {
        item.style.bottom = '-50px'
    })

}

