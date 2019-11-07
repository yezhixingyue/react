import React from 'react';
import ReactDOM from 'react-dom';
import image1 from './assets/image/1.jpeg';
import image2 from './assets/image/2.jpeg';
import image3 from './assets/image/3.jpeg';
import './assets/demo1.css';
import MyClassComp from './components/myClassComp.js';


const imageList = [image1, image2, image3]
let timer;
let i = 0;
const className = 'img-box';
function render() {
    const imgsrc = imageList[i];
    const img1 = (
        <div className={className} style={{
            margin: '0 auto',
            marginTop: '50px'
        }}> <img src={imgsrc} alt="" /></div>
    )
    ReactDOM.render(img1, document.getElementById('root'));
}

function run() {
    stop();
    timer = setInterval(() => {
        i = (i + 1) % 3;
        render();
    }, 2000);
}

function stop() {
    clearInterval(timer)
}
render();
run();

const box = document.getElementsByClassName(className)[0];
box.onmouseover = function () {
    stop();
}
box.onmouseleave = function () {
    run()
}


async function fetchStudents() {
    const api = 'yezhixingyue_1559031488126';
    const stus = await fetch('http://open.duyiedu.com/api/student/findAll?appkey=' + api)
        .then(res => res.json())
        .then(res => res.data)
    return stus
}    
const a = 1, b = 10;
const wrap = document.getElementById('student');
const div = React.createElement("div", {}, `${a} * ${b} = ${a*b}`,'学生信息正在加载中...')
async function render2() {
    ReactDOM.render((`${a} * ${b} = ${a*b} + 学生信息正在加载中...`),wrap)
    ReactDOM.render(<MyClassComp stus={await fetchStudents()} />,wrap);
}

render2()
