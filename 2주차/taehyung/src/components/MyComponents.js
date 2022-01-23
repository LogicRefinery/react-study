import React ,{Component} from 'react';
import PropTypes from 'prop-types';

class MyComponents extends Component{
    render(){
        const {name, fvnumber, children} = this.props;
        
        return(
            <div>
                안녕하세요 제 이름은 {name} 입니다. <br/>
                children 값은 {children} 입니다. <br/>
                좋아하는 숫자는 {fvnumber} 입니다.
            </div>

        );
    }
}

MyComponents.defaultProps={
    name : "노답",
    fvnumber : 4,
    children : "칠드런"
}

// MyComponents.PropTypes = {
//     name : PropTypes.string,
//     fvnumber : PropTypes.number.isRequired
// }

// 이거 왜안댐; ㅂㄷㅂㄷ;

export default MyComponents;