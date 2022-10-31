import React from "react";

class MyComponent extends React.Component {
    state={
        name: " Thang",
        nick: " dep trai vai lon",
        state:"thieu tien cho gai",
    };
     handleClick (event){
       // console.log(">> click me my button");
       console.log(event.target);
    }
    render(){
        return(
            <div>
                 my nick Name is {this.state.nick+ this.state.name} dang {this.state.state}
                 <button onClick={this.handleClick}> Click me </button>
            </div>
           
        );
    }
}
export default MyComponent;