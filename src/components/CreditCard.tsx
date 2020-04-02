import * as React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

export interface Props {}

export interface State {}

class CreditCard extends React.Component<Props, State> {
  render() {
    return (
      <div className="adress-Recap">
        <div>
          <h5 className="headers">CARD DETAILS:</h5>
          <TextField
            type="name"
            name="Fullname"
            //   value={this.state.firstName}
            label="Name on card"
            // onChange={this.handleChange}
            //   onKeyDown={this.onlyLetter}
          />
          <TextField
            type="tel"
            name="cardNumber"
            //   value={this.state.firstName}
            label="Card Number"
            // onChange={this.handleChange}
            //   onKeyDown={this.onlyLetter}
          />
          <TextField
            type="tel"
            name="Valid Date"
            //   value={this.state.firstName}
            label="Valid (MM/YY)"
            // onChange={this.handleChange}
            //   onKeyDown={this.onlyLetter}
          />
          <TextField
            type="tel"
            name="ccv"
            //   value={this.state.firstName}
            label="CCV"
            // onChange={this.handleChange}
            //   onKeyDown={this.onlyLetter}
          />
        </div>
        <div>
          <Link to="/checkout">
            <Button>Next</Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default CreditCard;
