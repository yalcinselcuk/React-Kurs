import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

export default class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = { categories: [{ categoryId: 1, categoryName: "Beverages" }, { categoryId: 2, categoryName: "Condimets" }], currentCategory: "" };
  }

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName })
  }

  render() {
    return (
      <div>
        <h1>{this.props.info.title}</h1>
        <ListGroup>
          {this.state.categories.map(category => (
            <ListGroupItem onClick={() => this.changeCategory(category)} key={category.categoryId}>
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
        <h4>{this.state.currentCategory}</h4>
      </div>
    );
  }
}
