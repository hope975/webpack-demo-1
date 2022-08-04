import png from './x.js'

console.log('hello')
const div = document.querySelector('#app1')
div.innerHTML = `
 <img src="${png}">
`
const button = document.createElement('button')
button.innerHTML = '懒加载'
button.onclick = () => {
    const promise = import('./lazy.js')
    promise.then((module) => {
        const fn = module.default
        fn()
    }, () => { console.log('加载失败'); })
}
div.appendChild(button)
