import * as React from "react";
// import { Product } from "../sneakerData";
import { RouteProps } from "react-router";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../UserContext";

export interface Props {}

export interface State {}

class Item extends React.Component<Props & RouteProps, State> {
  render() {
    return (
      <ProductConsumer>
        {value => {
          return (
            <React.Fragment>
              <div className="item-flex">
                {value.detail.length === 0 ? (
                  <div style={centralizeDiv}>
                    <h1>
                      NO PRODUCT CHOSEN, GO BACK TO{" "}
                      <Link className="styleNav" to="/products">
                        products
                      </Link>
                    </h1>
                  </div>
                ) : (
                  value.detail.map(item => {
                    return (
                      <React.Fragment key={item.id}>
                        <div className="item-img-div">
                          <img src={item.img} alt="img" />
                        </div>
                        <div className="restOfDetails">
                          <div className="info-item-div">
                            <div className="shoename">
                              <h1>{item.brand}</h1>
                              <h5>{item.model}</h5>
                            </div>
                            <div className="shoeprice">
                              <h1>{item.price}</h1>
                            </div>
                          </div>
                          <div className="description">
                            <p>{item.description}</p>
                          </div>
                          <div className="dropdown">
                            <label htmlFor="size">Choose size:</label>
                            <select name="size" id="size">
                              <option value="30">30</option>
                              <option value="31">31</option>
                              <option value="32">32</option>
                              <option value="33">33</option>
                              <option value="34">34</option>
                              <option value="35">35</option>
                              <option value="36">36</option>
                              <option value="37">37</option>
                              <option value="38">38</option>
                              <option value="39">39</option>
                              <option value="40">40</option>
                              <option value="41">41</option>
                              <option value="42">42</option>
                              <option value="43">43</option>
                              <option value="44">44</option>
                              <option value="45">45</option>
                              <option value="46">46</option>
                              <option value="47">47</option>
                              <option value="48">48</option>
                              <option value="49">49</option>
                              <option value="50">50</option>
                              <option value="51">51</option>
                            </select>
                          </div>
                          <div className="buttondiv">
                            <button
                              onClick={() => value.addToCart()}
                              className="addtocart"
                            >
                              Add to cart
                            </button>
                          </div>
                        </div>
                      </React.Fragment>
                    );
                  })
                )}
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
  alignItems: "center"
};

export default Item;
