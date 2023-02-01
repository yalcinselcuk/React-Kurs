import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sayaciAzalt } from '../redux/actions/counterActions';

 class SayaciAzalt extends Component {
  render() {
    return (
      <div>
        <button onClick={e => {
          this.props.dispatch(sayaciAzalt());
        }}>
          1 Azalt
        </button>
      </div>
    )
  }
}

//dispatch : bizim buradaki çağırmak istediğimiz aksiyonumuz 
function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(sayaciAzalt, dispatch) }
  //bindActionCreators : aksiyonu bağlamak için kullanılan bir araç
  //içinde çağırdığımız aksiyon metodumuz counterAction içindeki
}

export default connect(mapDispatchToProps)(SayaciAzalt)
