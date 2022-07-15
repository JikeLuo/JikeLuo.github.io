export default function creatBlock(blockPosition, position, speed, bpm) {
    const count = 900
    const bpmSpeed = 60 / bpm
    const block = document.createElement('div')
    block.classList.add('block')
    block.style.transitionDuration = `${(position + 1.25) * speed * bpmSpeed}s` // 1s =
    block.style.bottom = `${count * (position + 1) * speed * bpmSpeed}px` // 900 * 2 /
    blockPosition.appendChild(block)
}

// 231 60
// 0.26



// if (blockType === 'long') {
// block.classList.add('block')
// const blockMain = document.createElement('div')
// const long = document.createElement('div')
// blockMain.classList.add('block')
// long.classList.add('long')
// long.style.height = `${count  * longHeight * speed}px`
// long.style.transitionDuration = `${longHeight * speed / bpmSpeed}s`
// block.appendChild(long)
// block.appendChild(blockMain)
// } else {