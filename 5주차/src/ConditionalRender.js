import React from 'react';

/*
조건부 렌더링
&& 와 삼항연산중 &&가 가독성이 더 좋아서 자주 사용되는거같다.

function GreetingA({ isLogin, name }){
    if(isLogin){
        return <p>{`${name}님 안녕하세요.`}</p>;
    }else{
        return <p>권한이 없습니다.</p>;
    }
}

function GreetingB({ isLogin, name }){
    return <p>{isLogin ? `${name}님 안녕하세요? : '권한이 없습니다'}</p>
}

복잡한 조건부 렌더링
function GreetingA({ isLogin, name }){
    if(isLogin){
        return (
            <p className="greeting" onClick={showMenu} >
                {`${name}님 안녕하세요.`}
            </p>
        );
    } else {
        return(
            <p className="noAuth" onClick={goToLoginPage}>
                권한이 없습니다.
            </p>
        );
    }

}

function GreetingB({ isLogin, name }){
    return (
        <p className={isLogin ? 'greeting' : 'noAuth'} onClick={isLogin ? showMenu : goToLoginPage}>
        {isLogin ? `${name}님 안녕하세요` : '권한이 없습니다.' }
        </p>
    )
}

*/


/*

삼항연산자 vs if vs && 

위 세가지 모두 조건부 렌더링이 가능하지만 무분별하게 사용하면 금방 스파게티 코드가 되어버리니 항상 고민하면서 사용하도록 하자.



삼항연산자

function Greeting({ isLogin, name, cash }){
    return (
        <div>
            저희 사이트에 방문해 주셔서 감사합니다.
            {isLogin ? (
                <div>
                    <p>{name}님 안녕하세요</p>
                    <p>현재 보유하신 금액은 {cash}원 입니다.</p>
                </div>
            ) : null }
        </div>
    );
}


&& 연산자

function Greeting({ isLogin, name, cash }){
    return (
        <div>
            저희 사이트에 방문해 주셔서 감사합니다.
            {isLogin && (
                <div>
                    <p>{name}님 안녕하세요</p>
                    <p>현재 보유하신 금액은 {cash}원 입니다.</p>
                </div>
            )}
        </div>
    );
}


*/




const ConditionalRender = () => {
    return (
        <div>
            
        </div>
    );
};

export default ConditionalRender;