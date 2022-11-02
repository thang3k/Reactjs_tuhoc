import React from "react";

class Userinfor extends React.Component{
     state={
        name: " Thang",
        nick: " dep trai vai lon",
        state:"thieu tien cho gai",
    };
     handleClick (event){
        console.log(">> click me my button");
       this.setState({
        name:event.target.value,
        state:"chuan bi mua MTB bike",
       })
    }
    handleOnChangeInput=(event)=>{
        this.setState({
            name:event.target.value
        })
        console.log(event.target.value)
    }
    handleOnChangeState=(event)=>{
        this.setState({
            state:event.target.value
        })
        console.log(event.target.value)
    }
    handleOnSubmit=(event) =>{
        event.preventDefault();
        console.log(this.state);
    }
    render(){
        return(
            <div>
                  my nick Name is {this.state.nick + this.state.name} dang {this.state.state}

                 <form onSubmit={(event)=> this.handleOnSubmit(event)}>
                 <label>Your Name</label>
                    <input type="text"
                    value={this.state.name}
                    onChange={(event)=>{this.handleOnChangeInput(event)}}
                    />  
                    <button> Submit</button>
                </form>
                <form onSubmit={(event)=> this.handleOnSubmit(event)}>
                    <label>Your State</label>
                    <input type="text"
                    value={this.state.state}
                    onChange={(event)=>{this.handleOnChangeState(event)}}
                    />
                    <button> Submit</button>
                </form>
            </div>
        );
    }
}
export default Userinfor;