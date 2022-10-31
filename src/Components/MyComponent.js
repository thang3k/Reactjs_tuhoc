import React from "react";

class MyComponent extends React.Component {
    state={
        name: " Thang",
        nick: " dep trai vai lon",
        state:"thieu tien cho gai",
    }
    render(){
        return(
            <div> my nick Name is {this.state.nick+ this.state.name} </div>
        );
    }
}
export default MyComponent;