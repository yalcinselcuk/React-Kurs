import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

export default class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = { categories: [] };
  }

  // ilk once componentler yerlesir
  //sonra render'lar calisir

  //component yerlestiginde calis dedik
  componentDidMount() {
    this.getCategories();
  }

  getCategories = () => {
    //api'ye fetch uzerinden erisiyoruz
    fetch("http://localhost:3000/categories")
      // gelen istegi json 'a donustur
      .then(response => response.json())
      //o istek sonucunda gelen dataları attik
      .then(data => this.setState({ categories: data }));;
    //yukaridan asagiya katmanli calisti

  }

  render() {
    return (
      <div>
        <h1>{this.props.info.title}</h1>
        <ListGroup>
          {this.state.categories.map(category => (
            //eger ki tiklanilan yer isimlerden biriyle uyusursa true olacak yani active ; degilse false olacak
            <ListGroupItem active={category.categoryName === this.props.currentCategory ? true : false}
              onClick={() => this.props.changeCategory(category)} key={category.id}>
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}
