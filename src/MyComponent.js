import React, {Component} from "react";

class MyComponent extends React.Component{
    constructor(props){
        super(props)
        this.state ={number:0};
        //this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
        const number = ++this.state.number;
        this.setState({number: number})
    }

    render(){
        return(
            <div>
                <div>{this.state.number}</div>
                <button onClick={this.handleClick.bind(this)}>Click</button>
            </div>
        )
    }
}

export default MyComponent