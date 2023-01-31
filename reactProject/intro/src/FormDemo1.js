import React, { Component } from 'react'
import { Form } from 'reactstrap'

export default class FormDemo1 extends Component {
    state = { username: "", city:"" }

    onChangeHandler = (event) =>{
        //this.setState({username : event.target.value})
        /*event.target : event'e sebep olan nesne.Burada da input tetikliyor */
        //üstteki yazılan kod tek bir input için doğru.Eger birden fazla input varsa aşağıdaki kod kullanılır

        let name = event.target.name; //event i tetikleyen nesnenin adını aldık
        let value = event.target.value;
        this.setState({[name]:value})
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
                    <input name = "username" onChange={this.onChangeHandler} type="text"></input>
                    <h3>Username : {this.state.username}</h3>

                    <h3>City</h3>
                    <input name = "city" onChange={this.onChangeHandler} type="text"></input>
                    <h3>City : {this.state.city}</h3>
                    {/*input'larda name'lere verilenler ile this.state'te kullanılanlar aynı olmalı */}

                    <input type="submit" value="Kaydet"></input>
                </Form>
            </div>
        )
    }
}
