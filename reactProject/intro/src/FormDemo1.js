import React, { Component } from 'react'
import { Form } from 'reactstrap'

export default class FormDemo1 extends Component {
    state = { username: "" }
    onChangeHandler = (event) =>{
        this.setState({username : event.target.value})
        /*event.target : event'e sebep olan nesne.Burada da input tetikliyor */
    }

    render() {
        return (
            <div>
                <Form>
                    <h3>Username</h3>
                    <input onChange={this.onChangeHandler} type="text"></input>
                    <h4>Username : {this.state.username}</h4>
                </Form>
            </div>
        )
    }
}
