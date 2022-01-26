import React from 'react';
import styled, {css} from 'styled-components';


const sizes = {
    desktop: 1024,
    tablet: 768
};

const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
    @media(max-width: ${sizes[label]/16 }em){
        ${css(...args)}
    }
    `;
    return acc;
},{});


const Box = styled.div`
    /* props로 넣어 준 값을 직접 전달해 줄 수 있습니다. */
    background: ${ props => props.color || "blue" };
    padding: 1rem;
    display: flex;
    border:${props=> `4px solid ${props.color}`}
`;

const Span = styled.span`
    background: red;
    color: blue;
    font-size : 20px;
    display: block;
    ${media.desktop`margin-top:100px`}
    ${media.tablet`margin-top:200px`}

`;

const AlertBtn = styled.button`
    padding: 5px 20px;
    font-size: 14px;
    font-weight: bold;

    &:hover{
        color:white;
        background: black;
    }
    @media (max-width: 1024px) {
        background: blue;
        color: white;
    }
`;


const Button = styled.button`
    background : white;
    color : black;
    border-radius : 4px;
    padding : 0.5rem;
    display : flex;
    align-items : center;
    justify-content : center;
    box-sizing : border-box;
    font-size : 1rem;
    font-weight : 600;

    &:hover{
        background: rgba(255,255,255,0.9);
    }


    ${ props =>
        props.inverted &&
        css `
        background : none;
        border: 2px solid white;
        color : white;

        &:hover{
            background : white;
            color : black;
        }
    `};

    & + button {
        margin-left: 1rem;
    };
`; 

const styledComponent = () => {
    return (
        <div>
            <Box color="black">
            <Button>안녕하세요</Button>
            <Button inverted={true}>테두리만</Button>
            </Box>        
            <Span>컴포넌트에 스타일을 지정해서 만들어낸다</Span>
            <AlertBtn>경고버튼</AlertBtn>
        </div>
    );
};

export default styledComponent;