import * as React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

export interface Props {
  onlyNumber: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export interface State {}

class Swish extends React.Component<Props, State> {
  render() {
    return (
      <div className="payment">
        
          <h5 className="headers">SWISH DETAILS:</h5>
          <TextField
            type="name"
            name="Fullname"
            //   value={this.state.firstName}
            label="Full name"
            // onChange={this.handleChange}
            //   onKeyDown={this.onlyLetter}
          />
          <TextField
            type="tel"
            name="PhoneNumber"
            //   value={this.state.firstName}
            label="Phone Number"
            // onChange={this.handleChange}
            onKeyDown={this.props.onlyNumber}
          />
        
        <div>
          <Link to="/checkout">
            <Button>Next</Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Swish;
