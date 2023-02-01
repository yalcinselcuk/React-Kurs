import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ikiserArtir } from '../redux/actions/counterActions';

class IkiserArtir extends Component {
  render() {
    return (
      <div>
        <button onClick={e => {
          this.props.dispatch(ikiserArtir());
        }}>
          2'şer Artır
        </button>
      </div>
    )
  }
}

//dispatch : bizim buradaki çağırmak istediğimiz aksiyonumuz 
function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(ikiserArtir, dispatch) }
  //bindActionCreators : aksiyonu bağlamak için kullanılan bir araç
  //içinde çağırdığımız aksiyon metodumuz counterAction içindeki
}

export default connect(mapDispatchToProps)(IkiserArtir)