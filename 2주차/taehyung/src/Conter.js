import React, { Component } from 'react';

class Counter extends Component{
    // constructor(props){
    // super(props);
    //     this.state ={
    //         number : 0,
    //         fixedNumber : 0
    //     }
    // }
    state = { //위와 같은 결과
        number : 0,
        fixedNumber : 0
    };
    render(){
        const {number , fixedNumber} =this.state;
        return <div>
            <h1>{number}</h1>
            <h2>고정값 {fixedNumber}</h2>
            <button onClick={()=>{
                this.setState(prevState =>{
                    return{
                        number:prevState.number+1
                    }
                }
                )
            }
            }
            >
            +1
            </button>
        </div>
    }
}

export default Counter;