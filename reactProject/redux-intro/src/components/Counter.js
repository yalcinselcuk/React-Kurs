import React, { Component } from 'react'
import { connect } from "react-redux";
//üstteki connect react'e redux'ı bağlamayı sağlıyor 

class Counter extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.counter}</h1>
      </div>
    )
  }
}

//fonksiyonun aldığı "state" parametresi reducer'dan gelecek
function mapStateToProps(state) {
  return { counter: state.counterReducer }
}

export default connect(mapStateToProps)(Counter);
//mapStateToProps : props'lara state'leri bağla
//yani Counter'ın prop'larına state'leri bağla
