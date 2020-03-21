import * as React from "react";
import { Link } from "react-router-dom";

export interface Props {}

export interface State {}

class Home extends React.Component<Props, State> {
  render() {
    return <h5>Welcome Home!</h5>;
  }
}

export default Home;
