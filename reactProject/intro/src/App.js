import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import { Container, Row, Col } from 'reactstrap';


function App() {
  return (
    <div>
      <Container>
        <Row>
          <Navi></Navi>
        </Row>
        <Row>
          {/* xs dediğimiz = sayfamız 12 alana ayrıldığından hangi alanda olduğunu belirttik */}
          <Col xs="3">
            <CategoryList></CategoryList>
          </Col>
          <Col xs ="9">
            <ProductList></ProductList>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
