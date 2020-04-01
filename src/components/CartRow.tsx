import * as React from "react";

export interface Props {}

export interface State {}

class CartRow extends React.Component<Props, State> {
  render() {
    return (
      <></>
      //   <React.Fragment>
      //     <div className="cart-img-info-div-header">
      //       <h3>Shopping Cart</h3>
      //     </div>
      //     <div className="cart-img-info-div">
      //       <div className="cart-imgdiv">
      //         <img src={item.product.img} alt="img" />
      //       </div>
      //       <div className="cart-qty-size-price-div">
      //         <div className="flex-cart-info">
      //           <div>
      //             <p className="modeldiv">{item.product.brand}</p>
      //             <p className="modeldiv">{item.product.model}</p>
      //           </div>
      //           <div className="pricediv">
      //             <p>{item.product.price * item.count}$</p>
      //           </div>
      //         </div>
      //         <div className="flex-cart-info">
      //           <div>
      //             <p className="qtydiv">QTY: {item.count}</p>
      //             <p className="qtydiv">SIZE: {item.size}</p>
      //           </div>
      //           <div className="icondiv">
      //             <MdClear
      //               onClick={() =>
      //                 value.removeCartRow(item.product.id, item.count)
      //               }
      //               id="icon"
      //             />
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </React.Fragment>
    );
  }
}

export default CartRow;
