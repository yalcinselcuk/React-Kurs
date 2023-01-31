import React, { Component } from 'react'
import { Form } from 'reactstrap'

export default class FormDemo1 extends Component {
    state = { username: "" }

    onChangeHandler = (event) =>{
        this.setState({username : event.target.value})
        /*event.target : event'e sebep olan nesne.Burada da input tetikliyor */
    }

    onSubmitHandler = (event) =>{
        event.preventDefault(); //sayfanın refresh olmasını engelledik
        alert(this.state.username);
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.onSubmitHandler}>
                    <h3>Username</h3>
                    <input onChange={this.onChangeHandler} type="text"></input>
                    <h4>Username : {this.state.username}</h4>
                    <input type="submit" value="Kaydet"></input>
                </Form>
            </div>
        )
    }
}
