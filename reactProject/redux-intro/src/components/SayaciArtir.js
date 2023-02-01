import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { sayaciArtir } from '../redux/actions/counterActions'

class SayaciArtir extends Component {
  render() {
    return (
      <div>
        <button onClick={e => {
          this.props.dispatch(sayaciArtir());
        }}>
          1 Artır
        </button>
      </div>
    )
  }
}

//dispatch : bizim buradaki çağırmak istediğimiz aksiyonumuz 
function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(sayaciArtir, dispatch) }
  //bindActionCreators : aksiyonu bağlamak için kullanılan bir araç
  //içinde çağırdığımız aksiyon metodumuz counterAction içindeki
}

export default connect(mapDispatchToProps)(SayaciArtir)
