import React from 'react';

/*
리액트에서 정적 타입 정의하기

속성값 타입을 사용할경우 잘못된 타입이 입력되면 콘솔에 에러메시지가 출력된다. 콘솔에만

속성값에 타입 정보가 없는경우 각 속성의 타입이 무엇인지 코드를 분석하기 전까지는 명확히 유추가 불가능하다.
function User({ type, age, male, onChangeName, onChangTitle }){

    function onClick1(){
        const msg = 'type: ${type}, age: ${age ? age : "알 수 없음"};
        log(msg, {color: type === "gold" ? "red" : "black "});
        ...
    }

    function onClick2(){
        if (onChangeName){
            onChangeName(name);
        }
        onChangeTitle(title){
            male ? goMalePage() : goFemalePage();
            ...
        }
    }
}

속성값에 타입 정의하기
user.propTypes = {
    male: PropTypes.bool.isRequired,  논리값이고 필수값임
    age: PropTypes.number, 숫자
    type: PropTypes.oneOf(["gold","silver","bronze"]), 배열안에 해당 값이 있는지
    onChangeName: PropTypes.func 함수인지
}

propType에 대한 정보는 4-7 예제를 살펴보자 ^^


함수를 이용한 커스텀 속성값 타입 정의

MyComponent.propType = { 
    age: function(props, propName, componentName){
        const value = props[propName];
        if( value < 10 || value > 20 ){
            return new Error(
                `Invalid prop ${propName} supplied to ${componentName}. It must be 10 <= value <= 20.`
            )
        }
    }
}

*/




const DefinePropType = () => {
    return (
        <div>
            
        </div>
    );
};

export default DefinePropType;
