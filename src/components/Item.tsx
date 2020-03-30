import * as React from "react";
// import { Product } from "../sneakerData";
import { RouteProps } from "react-router";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../contexts/ProductContext";
import DetailOfSneaker from "./DetailPageEachSneaker";

export interface Props {}

export interface State {}

class Item extends React.Component<Props & RouteProps, State> {
  render() {
    return (
      <ProductConsumer>
        {productState => (
          <React.Fragment>
            <div className="item-flex">
              {productState.detail.length === 0 ? (
                <div style={centralizeDiv}>
                  <h1>
                    NO PRODUCT CHOSEN, GO BACK TO{" "}
                    <Link className="styleNav" to="/products">
                      products
                    </Link>
                  </h1>
                </div>
              ) : (
                productState.detail.map(item => {
                  // TODO: bryt ut till en egen komponent
                  return <DetailOfSneaker key={item.id} item={item} />;
                })
              )}
            </div>
          </React.Fragment>
        )}
      </ProductConsumer>
    );
  }
}

const centralizeDiv: React.CSSProperties = {
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

export default Item;
