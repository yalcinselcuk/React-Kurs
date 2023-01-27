import React, { Component } from 'react'
import { Table } from 'reactstrap'

export default class ProductList extends Component {

  render() {
    return (
      <div>
        <h1>{this.props.info.title}</h1>
        <h4>{this.props.currentCategory}</h4>
        <Table
        >
          <thead>
            <tr>
              <th>#</th>
              <th>Ürün Name</th>
              <th>Birim Miktar</th>
              <th>Birim Fiyat</th>
              <th>Stoktaki Miktar</th>
            </tr>
          </thead>

          <tbody>
          {this.props.products.map(product => (
            <tr key={product.id}>
              <th scope="row">{product.id}</th>
              <td>{product.productName}</td>
              <td>{product.quantityPerUnit}</td>
              <td>{product.unitPrice}</td>
              <td>{product.unitsInStock}</td>
            </tr>
          ))}
          </tbody>
        </Table>
      </div>
    )
  }
}
