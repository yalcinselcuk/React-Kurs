import React, { Component } from 'react'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Badge, NavItem, NavLink } from 'reactstrap'
export default class SepetOzeti extends Component {
  renderOzet(){
    return (<UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>
        Sepetiniz
      </DropdownToggle>
      <DropdownMenu>
        {
          this.props.sepet.map((sepetItemi) => (
            <DropdownItem key={sepetItemi.product.id}>
              <Badge color='danger' onClick={()=>this.props.sepettenSil(sepetItemi.product)}>Sil</Badge>{" "}
              {sepetItemi.product.productName}{" "}
              <Badge color='success'>{sepetItemi.quantity}</Badge>{/*itemin yanında sayısını belirttik */}
            </DropdownItem>
          ))
        }
        <DropdownItem divider />
        <DropdownItem>Reset</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>)
  }
  renderBosSepet(){
    return(
    <NavItem>
      <NavLink>
        Sepette Ürün Yok
      </NavLink>
    </NavItem>)
  }
  render() {
    return (
      <div>
        {this.props.sepet.length>0?this.renderOzet():this.renderBosSepet()}
        {/*eger sepette ürün varsa metodu döndür yoksa boş bir div dondur */}
      </div>
    )
  }
}
