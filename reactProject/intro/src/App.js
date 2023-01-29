import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import { Container, Row, Col } from 'reactstrap';
import React, { Component } from 'react'



export default class App extends Component {
  
  state = {currentCategory : "", products : [], sepet : []};

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName })
    this.getProducts(category.id);
  };

  componentDidMount(){
    this.getProducts();
  }
  getProducts = (categoryId) =>{

    let url = "http://localhost:3000/products";
    if(categoryId){//eger bu seoUrl tanimlanmissa
      url+="?categoryId="+categoryId;
    }

    //api'ye fetch uzerinden erisiyoruz
    fetch(url)
    .then(response => response.json())//gelen istegi json 'a donustur
    .then(data => this.setState({products : data}));;//o istek sonucunda gelen dataları attik
    //yukaridan asagiya katmanli calisti

  }
  sepeteEkle=(product)=>{
    let yeniSepet = this.state.sepet;
    //var itemEkle = yeniSepet.find(c => c.product.id === product.id);
    yeniSepet.push({product : product, quantity : 1});
    this.setState({sepet : yeniSepet});
  }
  render() {

    let categoryInfo = { title: "Kategori Listesi" };
    let productInfo = { title: "Ürün Listesi" };

    return (
      <div>
        <Container>
          <Row>

            <Navi sepet = {this.state.sepet}></Navi>
          </Row>
          
          <Row>
            {/* xs dediğimiz = sayfamız 12 alana ayrıldığından hangi alanda olduğunu belirttik */}
            <Col xs="3">
              <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={categoryInfo}></CategoryList>
            </Col>
            <Col xs="9">
              <ProductList sepeteEkle = {this.sepeteEkle} products = {this.state.products} currentCategory={this.state.currentCategory} info={productInfo}></ProductList>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}



