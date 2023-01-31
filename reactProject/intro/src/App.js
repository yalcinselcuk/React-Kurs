import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import { Container, Row, Col } from 'reactstrap';
import React, { Component } from 'react'
import alertify from "alertifyjs";
import { Route, Routes } from "react-router-dom";
import NotFound from './NotFound';
import SepetDetayı from "./SepetDetayı";
import FormDemo1 from "./FormDemo1";



export default class App extends Component {

  state = { currentCategory: "", products: [], sepet: [] };

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName })
    this.getProducts(category.id);
  };

  componentDidMount() {
    this.getProducts();
  }
  getProducts = (categoryId) => {

    let url = "http://localhost:3000/products";
    if (categoryId) {//eger bu seoUrl tanimlanmissa
      url += "?categoryId=" + categoryId;
    }

    //api'ye fetch uzerinden erisiyoruz
    fetch(url)
      .then(response => response.json())//gelen istegi json 'a donustur
      .then(data => this.setState({ products: data }));;//o istek sonucunda gelen dataları attik
    //yukaridan asagiya katmanli calisti

  }
  sepeteEkle = (product) => {
    let yeniSepet = this.state.sepet;
    //tekrar edip etmediğini hesapladık
    var itemEkle = yeniSepet.find(c => c.product.id === product.id);
    if (itemEkle) {
      itemEkle.quantity += 1;
    } else {
      yeniSepet.push({ product: product, quantity: 1 });
    }
    this.setState({ sepet: yeniSepet });
    alertify.success(product.productName + " Sepete Eklendi", 2);//2 olarak belirttiğimiz ekranda kalma süresi. sn cinsinden
  }
  sepettenSil = (product) => {
    let yeniSepet = this.state.sepet.filter(c => c.product.id !== product.id)
    this.setState({ sepet: yeniSepet });
    alertify.success(product.productName + " Sepetten Silindi", 2);
  }
  render() {

    let categoryInfo = { title: "Kategori Listesi" };
    let productInfo = { title: "Ürün Listesi" };

    return (
      <div>
        <Container>
          <Row>
            <Navi sepettenSil={this.sepettenSil} sepet={this.state.sepet} />
          </Row>
          <Row>
            {/* xs dediğimiz = sayfamız 12 alana ayrıldığından hangi alanda olduğunu belirttik */}
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo}
              />
            </Col>
            <Col xs="9">
              <Routes>
                <Route
                  exact
                  path="/"
                  element={
                    <ProductList
                      products={this.state.products}
                      sepeteEkle={this.sepeteEkle}
                      currentCategory={this.state.currentCategory}
                      info={productInfo}
                    />
                  } /> {/*localhost direk çalışınca ProductList'in default olarak çalışmasını istiyoruz ve exact'da direk gelmesini sağlıyor */}
                <Route 
                exact 
                path="/sepet" 
                element={
                    <SepetDetayı
                      sepet={this.state.sepet}
                      sepettenSil={this.sepettenSil}
                    />
                  } />
                  <Route exact path="/form1" element={<FormDemo1/>} />
                <Route element={<NotFound />} />{/* Routes bütün Route'ları tek tek gezdi ve hiçbiri uymazsa en sondakini çalıştırdı*/}
              </Routes>

            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}



