import React, { Component } from 'react';

export default class login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        console.log("Handle submit", this.state.email, this.state.password);
        event.preventDefalt();
    }

    render() {
        return(
        <div>
          <h1>LOGIN TO ACCESS YOUR DASHBOARD</h1>

         <form onSubmit={this.handleSubmit}>
            <input 
            type="email" 
            name="email"
            placeholder="Your email"
            value={this.state.email}
            onChang={this.handleChange}
            />
            <input 
            type="password" 
            name="passward"
            placeholder="Your password"
            value={this.state.password}
            onChang={this.handleChange}
            />

            <div>
            <button type="submit"></button>
            </div>
         </form>
        </div>
        );
    }
}