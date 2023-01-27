import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

export default class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = { categories: []};
  }

  // ilk once componentler yerlesir
  //sonra render'lar calisir

  //component yerlestiginde calis dedik
  componentDidMount(){
      this.getCategories();
  }

  getCategories = () =>{
    //api'ye fetch uzerinden erisiyoruz
    fetch("http://localhost:3000/categories")
    .then(response => response.json())//gelen istegi json 'a donustur
    .then(data => this.setState({categories : data}));;//o istek sonucunda gelen dataları attik
    //yukaridan asagiya katmanli calisti

  }

  render() {
    return (
      <div>
        <h1>{this.props.info.title}</h1>
        <ListGroup>
          {this.state.categories.map(category => (
            <ListGroupItem onClick={() => this.props.changeCategory(category)} key={category.id}>
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
        <h4>{this.props.currentCategory}</h4>
      </div>
    );
  }
}
