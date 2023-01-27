import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import { Container, Row, Col } from 'reactstrap';
import React, { Component } from 'react'



export default class App extends Component {
  
  state = {currentCategory : "", products : []};

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName })
  };

  componentDidMount(){
    this.getProducts();
  }
  getProducts = () =>{
    //api'ye fetch uzerinden erisiyoruz
    fetch("http://localhost:3000/products")
    .then(response => response.json())//gelen istegi json 'a donustur
    .then(data => this.setState({products : data}));;//o istek sonucunda gelen dataları attik
    //yukaridan asagiya katmanli calisti

  }

  render() {

    let categoryInfo = { title: "Kategori Listesi" };
    let productInfo = { title: "Ürün Listesi" };

    return (
      <div>
        <Container>
          <Row>
            <Navi></Navi>
          </Row>
          <Row>
            {/* xs dediğimiz = sayfamız 12 alana ayrıldığından hangi alanda olduğunu belirttik */}
            <Col xs="3">
              <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={categoryInfo}></CategoryList>
            </Col>
            <Col xs="9">
              <ProductList products = {this.state.products} currentCategory={this.state.currentCategory} info={productInfo}></ProductList>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}



