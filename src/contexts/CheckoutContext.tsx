import * as React from "react";

const defaultState = {
  getName: () => {},
  getCity: () => {},
  getCountry: () => {},
  getAdress: () => {},
  getCardNr: () => {},
  getEmail: () => {},
  getExpireDay: () => {},
  fullname: "",
  mail: "",
  country: "",
  city: "",
  adress: "",
  expireDay: "",
  cardNr: ""
};

const CheckoutContext = React.createContext<State>(defaultState);

export interface Props {}

export interface State {
  getCardNr: (event: React.ChangeEvent<HTMLInputElement>) => void;
  getExpireDay: (event: React.ChangeEvent<HTMLInputElement>) => void;
  getName: (event: React.ChangeEvent<HTMLInputElement>) => void;
  getCity: (event: React.ChangeEvent<HTMLInputElement>) => void;
  getCountry: (event: React.ChangeEvent<HTMLInputElement>) => void;
  getAdress: (event: React.ChangeEvent<HTMLInputElement>) => void;
  getEmail: (event: React.ChangeEvent<HTMLInputElement>) => void;
  fullname: string;
  country: string;
  mail: string;
  city: string;
  adress: string;
  expireDay: string;
  cardNr: string;
}

class CheckoutProvider extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      fullname: "",
      country: "",
      city: "",
      adress: "",
      expireDay: "",
      cardNr: "",
      mail: "",
      getEmail: this.getEmail,
      getName: this.getName,
      getCountry: this.getCountry,
      getCity: this.getCity,
      getAdress: this.getAdress,
      getExpireDay: this.getExpireDay,
      getCardNr: this.getCardNr
    };
  }

  getCardNr = (event: React.ChangeEvent<HTMLInputElement>) => {
    const lastFour = event.target.value.substr(12);
    this.setState({ cardNr: lastFour });
  };
  getExpireDay = (event: React.ChangeEvent<HTMLInputElement>) => {
    const e = event.target.value;
    this.setState({ expireDay: e });
  };
  getName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const e = event.target.value;
    this.setState({ fullname: e });
  };

  getCity = (event: React.ChangeEvent<HTMLInputElement>) => {
    const e = event.target.value;
    this.setState({ city: e });
  };
  getEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const e = event.target.value;
    this.setState({ mail: e });
  };

  getCountry = (event: React.ChangeEvent<HTMLInputElement>) => {
    const e = event.target.value;
    this.setState({ country: e });
  };

  getAdress = (event: React.ChangeEvent<HTMLInputElement>) => {
    const e = event.target.value;
    this.setState({ adress: e });
  };

  render() {
    return (
      <CheckoutContext.Provider value={this.state}>
        {this.props.children}
      </CheckoutContext.Provider>
    );
  }
}
const CheckoutConsumer = CheckoutContext.Consumer;
export { CheckoutProvider, CheckoutConsumer };
