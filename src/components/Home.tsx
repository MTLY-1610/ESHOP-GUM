import * as React from "react";
import { Link } from "react-router-dom";

export interface Props {}

export interface State {}

class Home extends React.Component<Props, State> {
  render() {
    return (
      <div style={width}>
        <div style={styling}>
          <Link to="/products">
            <button className="buttonStyled">SHOP NOW</button>
          </Link>
        </div>
      </div>
    );
  }
}

const width: React.CSSProperties = {
  width: "100%",
  height: "100%",
  background: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};
const styling: React.CSSProperties = {
  width: "98%",
  height: "96%",
  backgroundImage:
    "url(https://images.unsplash.com/photo-1576037728058-ab2c538ac8d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3008&q=80)",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

export default Home;
