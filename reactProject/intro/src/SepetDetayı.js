import React, { Component } from 'react'
import { Table } from 'reactstrap'

export default class SepetDetayı extends Component {
  renderSepet() {
    return (
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Kategori Id</th>
            <th>Ürün Adı</th>
            <th>Birim Fiyat</th>
            <th>Stoktaki Miktar</th>
            <th>Adet</th>
          </tr>
        </thead>
        <tbody>
        {this.props.sepet.map(sepetItemi => (
            <tr key={sepetItemi.product.id}>
              <th scope="row">{sepetItemi.product.id}</th>
              <td>{sepetItemi.product.categoryId}</td>
              <td>{sepetItemi.product.productName}</td>
              <td>{sepetItemi.product.unitPrice}</td>
              <td>{sepetItemi.product.unitsInStock}</td>
              <td>{sepetItemi.quantity}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    )
  }
  render() {
    return (
      <div>
        {this.renderSepet()}
      </div>
    )
  }
}
