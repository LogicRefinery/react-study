import React, { cloneElement, Component } from 'react';

class Event extends Component{
    // state = {
    //     name : ''
    // }
    // render(){
    //     return(
    //         <div>
    //             <h1>이벤트 연습</h1>
    //             <input type="text" name="messege" placeholder="name" value={this.state.name} onChange={(e) => {this.setState({name:e.target.value})}}></input>
    //             <button onClick={() =>{ alert(this.state.name); this.setState({name:''}) }}>값 확인</button>
    //         </div>
    //     )
    // }

    state = {
        name:''
    }

    constructor(props){
        super(props);
        this.nameSave = this.nameSave.bind(this);
        this.chkAge = this.chkAge.bind(this);

    }
    
    // handleChange(e){
    //     this.setState({name:e.target.value});
    // }
    // handleClick(){
    //     alert(this.state.name);
    //     this.setState({name:''});
    // }

    nameSave = (e) =>{
        this.setState({name : e.target.value});        
    }
    nameValidate = (name) =>{
        name = this.state.name;
        alert(`사용가능한 친구이름 입니다. 안녕 ${name}`);
    }

    chkAge = (e) => {
        let age = e.target.value;
        age > 30 ? alert('하.. 너무 늙어서 태형이의 친구가 될 수 없습니다;; 나가주세요;;') : console.log("그에게 주어지는 햅격목걸이");
    }

    render(){
        return(
            <div>
                <h1>태형이 친구 회원가입( 친구비 1일 10만원 )</h1>
                <input type="text" name="name" placeholder="이름" value={this.state.name} onChange={this.nameSave} /> <button onClick={this.nameValidate}>중복확인</button> <br/>
                <input type="text" name="age" placeholder="나이" value={this.state.age} onChange={this.chkAge} /> 살

                {/* <input type="text" name="messege" placeholder="name" value={this.state.name} onChange={this.handleChange}></input> */}
                {/* <button onClick={ this.handleClick }>값 확인</button> */}
            </div>
        )
    }
}

export default Event;