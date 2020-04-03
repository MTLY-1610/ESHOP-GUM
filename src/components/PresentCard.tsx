import * as React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";


export interface Props {}

export interface State {}

class PresentCard extends React.Component<Props, State> {
  render() {
    return (
      <div className="payment">
       
          <h5 className="headers">PRESENTCARD DETAILS:</h5>
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
            name="PresentCard"
            //   value={this.state.firstName}
            label="Present Card"
            // onChange={this.handleChange}
            //   onKeyDown={this.onlyLetter}
          />
        
        <div>
        
          <Link to="/checkout">
            <Button variant="outlined" color="secondary">Next</Button>
          </Link>
          
        </div>
      </div>
    );
  }
}


export default PresentCard;