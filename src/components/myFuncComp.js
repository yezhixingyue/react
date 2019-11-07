
import React from 'react'

export default function myFuncComp(props) {
    return (
        <li>
            [姓名]：{props.name},
            [年龄]: {new Date().getFullYear() - props.birth},
            [性别]: {props.sex ? '女' : '男'}，
            [邮箱]：{props.email}
        </li>
    )
}

