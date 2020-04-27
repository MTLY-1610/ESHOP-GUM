import * as React from "react";
// import { Product } from "../sneakerData";
import { RouteProps, RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../contexts/ProductContext";
import DetailOfSneaker from "./DetailPageEachSneaker";

interface Params {
  item: string;
}

interface Props extends RouteComponentProps<Params> {}

interface State {}

class Item extends React.Component<Props & RouteProps, State> {
  render() {
    return (
      <ProductConsumer>
        {(productState) => {
          const { params } = this.props.match;
          const product = productState.products.find(
            (product) => product.id === Number(params.item)
          );

          return (
            <React.Fragment>
              <div className="item-flex">
                {!product ? (
                  <div style={centralizeDiv}>
                    <h1>
                      NO PRODUCT CHOSEN, GO BACK TO{" "}
                      <Link className="styleNav" to="/products">
                        products
                      </Link>
                    </h1>
                  </div>
                ) : (
                  <DetailOfSneaker key={product.id} item={product} />
                )}
              </div>
            </React.Fragment>
          );
        }}
      </ProductConsumer>
    );
  }
}

const centralizeDiv: React.CSSProperties = {
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export default Item;
