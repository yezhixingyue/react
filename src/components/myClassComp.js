import React from 'react';
import Student from './myFuncComp';

export default class myClassComp extends React.Component {
    render() {
        // console.log(this.props.stus)
        const lis = this.props.stus.map(item => (<Student key={item.id} {...item} />));
        console.log(lis)
        
        return (
            <ul>
                {lis}
            </ul>
        )
    }
}
