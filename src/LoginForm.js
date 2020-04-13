import React, {Component} from "react";

class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {react:false,redux:false,mobx:false};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({[event.target.name]:event.target.checked})
    }

    handleSubmit(event){
        // alert('You picked '+this.state.value)
        event.preventDefault()
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                {/* <label>用户名：
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange}></input>
                </label>
                <label>
                    密码：
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange}></input>
                </label>
                <label>
            </label> */}
                {/* <label>
                    Pick on library:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="react">React</option>
                        <option value="redux">Redux</option>
                        <option value="mobx">MobX</option>
                    </select>
                    <input type="submit" value="submit"></input>
                </label> */}
                <label>React
                    <input type="checkbox" name="react" value="react" checked={this.state.react} onChange={this.handleChange}></input>
                </label>
                <label>Redux
                    <input type="checkbox" name="redux" value="redux" checked={this.state.redux} onChange={this.handleChange}></input>
                </label>
                <label>Mobx
                    <input type="checkbox" name="mobx" value="mobx" checked={this.state.mobx} onChange={this.handleChange}></input>
                </label>
                <input type="submit" value="Submit"></input>
            </form>
        )
    }
}
export default LoginForm