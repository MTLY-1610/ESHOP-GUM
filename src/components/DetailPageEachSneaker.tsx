import * as React from "react";
import { Link } from "react-router-dom";
import { ShoppingCartConsumer } from "../contexts/CartContext";
import { Product } from "../sneakerData";

export interface Props {
  item: Product;
}

export interface State {
  size: string;
}

class DetailOfSneaker extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      size: "30"
    };
  }

  changeSize = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ size: event.target.value });
  };

  render() {
    return (
      <ShoppingCartConsumer>
        {cartState => (
          <React.Fragment key={this.props.item.id}>
            <div className="item-img-div">
              <img src={this.props.item.img} alt="img" />
            </div>
            <div className="restOfDetails">
              <div className="info-item-div">
                <div className="shoename">
                  <h1>{this.props.item.brand}</h1>
                  <h5>{this.props.item.model}</h5>
                </div>
                <div className="shoeprice">
                  <h1>{this.props.item.price}$</h1>
                </div>
              </div>
              <div className="description">
                <p>{this.props.item.description}</p>
              </div>
              <div className="dropdown">
                <div>
                  <label htmlFor="size">Choose size:</label>
                  <select onChange={this.changeSize} name="size" id="size">
                    <option value={30}>30</option>
                    <option value={31}>31</option>
                    <option value={32}>32</option>
                    <option value={33}>33</option>
                    <option value={34}>34</option>
                    <option value={35}>35</option>
                    <option value={36}>36</option>
                    <option value={37}>37</option>
                    <option value={38}>38</option>
                    <option value={39}>39</option>
                    <option value={40}>40</option>
                    <option value={41}>41</option>
                    <option value={42}>42</option>
                    <option value={43}>43</option>
                    <option value={44}>44</option>
                    <option value={45}>45</option>
                    <option value={46}>46</option>
                    <option value={47}>47</option>
                    <option value={48}>48</option>
                    <option value={49}>49</option>
                    <option value={50}>50</option>
                    <option value={51}>51</option>
                  </select>
                </div>
              </div>
              <div className="buttondiv">
                <button
                  onClick={() =>
                    cartState.addToCart(
                      this.props.item,
                      Number(this.state.size)
                    )
                  }
                  className="addtocart"
                >
                  Add to cart
                </button>
              </div>
              <div className="secondButtondiv">
                <Link className="link" to="/cart">
                  <div className="basket">
                    <span>view </span>
                    <span>basket</span>
                  </div>
                </Link>
                <Link className="link" to="/products">
                  <div className="cart">
                    <span>continue </span>

                    <span>shopping</span>
                  </div>
                </Link>
              </div>
            </div>
          </React.Fragment>
        )}
      </ShoppingCartConsumer>
    );
  }
}

export default DetailOfSneaker;
