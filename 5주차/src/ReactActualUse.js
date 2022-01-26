import React from 'react';

/*
컴포넌트 파일의 작성 순서

1.파일을 열었을 떄 가장먼저 컴포넌트에서 사용하는 속성값 타입을 알아야 하므로 최상단에 속성값의 타입을 정의
MyComponent.propTypes = {
    ...
};

1.컴포넌트 함수의 매개변수는 명명된 매개변수로 정의할 것, 속성값을 사용할 때 props. 을 생략할 수 있다.
2.컴포넌트 이름을 꼭 작성하자. function 처럼 이름없는 컴포넌트로 만들면 개발자 도에서 디버깅이 힘들다.
export default function Mycomponent({prop1,prop2}){
    ...
}


1.컴포넌트 바깥 변수와 함수는 파일의 가장 하단에 정의할 것
2.컴포넌트 내부에서 커다란 객체를 생성하는 코드가 있으면 가능한 컴포넌트 외부에서 상수 변수로 정의해서 사용하도록하자, 메모리 누수 줄일 수 있음.
const COLUMNES = [
    {id: 1, name: 'phoneNumber', width:200, color: 'white'},
    {id: 2, name: 'city', width:100, color: 'grey'}

];

const URL_PRODUCT_LIST = 'api/products';
function getTotalPrice({price, total}){
    ...
}
*/


/*

서로 연관된 코드를 한 곳으로 모으기
function Profile({ userId }){
    1. 모든 상태값 컴포넌트 상단에 정의
    const [user, setUser] = useState(null);
    const [width, setWidth] = useState(window.innerWidth);

    2. 모든 기능을 하단에 정의
    useEffect(()=>{
        getUserApi(userId).then(data => setUser(data));
    },[userId]);

    useEffect(()=>{
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    r
    return () => {
        window.removeEventListener("resize"m onResize);  
    };
    },[]);
}

연관된 코드별로 모으기
function Profile({ userId }){
    1.user 관련 코드 블럭
    const [user, setUser] = useState(null);
    useEffect(()=>{
        getUserApi(userId).then(data => setUser(data));
    },[userId]);

    2.window 관련 코드 블럭
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(()=>{
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    r
    return () => {
        window.removeEventListener("resize"m onResize);  
    };
    },[]);
}

커스텀 훅으로 분리하기
function Profile({ userId }){
    const user = useUser(userId);
    const width = useWindowWidth();
}

function useUser(userId){
    const [user, setUser] = useState(null);
    useEffect(()=>{
        getUserApi(userId).then(data => setUser(data));
    }, [userId]);
    return user;
}

function useWindowWidth(){
    const [width,setWidth] = usestate(window.innerWidth);
    useEffect(()=>{
        const onResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", onResize);
        return() => {
            window.removeEventListener("resize",onResize);
        };
    },[]);
}

*/

const ReactActualUse = () => {
    return (
        <div>
            
        </div>
    );
};

export default ReactActualUse;