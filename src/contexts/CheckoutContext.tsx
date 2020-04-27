import * as React from "react";

const defaultState = {
  onSubmit: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {},
  change: (event: React.ChangeEvent<HTMLInputElement>) => {},
  paymentMethod: (event: React.ChangeEvent<HTMLInputElement>) => {},
  changecardnr: (event: React.ChangeEvent<HTMLInputElement>) => {},
  firstname: "",
  firstnameError: "",
  presentcardnumber: "",
  presentcardnumberError: "",

  phonenumber: "",
  phonenumberError: "",
  cardnumber: "",
  cardnumberError: "",
  lastname: "",
  lastnameError: "",
  country: "",
  ccv: "",
  ccvError: "",
  countryError: "",
  city: "",
  cityError: "",
  adress: "",
  adressError: "",
  validdate: "",
  creditCard: false,
  swish: false,
  presentCard: false,
  validdateError: "",
  email: "",
  noError: false,
  emailError: "",
};

const CheckoutContext = React.createContext<State>(defaultState);

export interface Props {}

export interface State {
  change: (event: React.ChangeEvent<HTMLInputElement>) => void;
  paymentMethod: (event: React.ChangeEvent<HTMLInputElement>) => void;
  changecardnr: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  noError: boolean;
  firstname: string;
  firstnameError: string;
  presentcardnumber: string;
  presentcardnumberError: string;
  phonenumber: string;
  phonenumberError: string;
  lastnameError: string;
  emailError: string;
  countryError: string;
  cityError: string;
  ccv: string;
  ccvError: string;
  adressError: string;
  validdateError: string;
  cardnumberError: string;
  lastname: string;
  country: string;
  email: string;
  city: string;
  adress: string;
  validdate: string;
  cardnumber: string;
  creditCard: boolean;
  swish: boolean;
  presentCard: boolean;
}

class CheckoutProvider extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      creditCard: false,
      swish: false,
      presentCard: false,
      presentcardnumber: "",
      presentcardnumberError: "",
      firstname: "",
      firstnameError: "",
      cardnumber: "",
      cardnumberError: "",
      lastname: "",
      lastnameError: "",
      country: "",
      countryError: "",
      city: "",
      cityError: "",
      ccv: "",
      ccvError: "",
      adress: "",
      adressError: "",
      phonenumber: "",
      phonenumberError: "",
      validdate: "",
      validdateError: "",
      email: "",
      emailError: "",
      noError: false,
      change: this.change,
      changecardnr: this.changecardnr,
      onSubmit: this.onSubmit,
      paymentMethod: this.paymentMethod,
    };
  }
  paymentMethod = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === "CreditCard") {
      this.setState({ creditCard: true });
      this.setState({ swish: false });
      this.setState({ presentCard: false });
    } else if (event.target.value === "Swish") {
      this.setState({ swish: true });
      this.setState({ creditCard: false });
      this.setState({ presentCard: false });
    } else if (event.target.value === "PresentCard") {
      this.setState({ presentCard: true });
      this.setState({ creditCard: false });
      this.setState({ swish: false });
    }
  };
  change = (event: React.ChangeEvent<HTMLInputElement>) => {
    const e = event.target;
    this.setState({ [e.name]: e.value } as any);
  };
  changecardnr = (event: React.ChangeEvent<HTMLInputElement>) => {
    const e = event.target.value;
    this.setState({ cardnumber: e.substring(12) });
  };

  validate = () => {
    let isError = false;
    if (this.state.creditCard === true) {
      if (this.state.validdate.indexOf("/") === -1) {
        this.setState({ validdateError: "Must contain '/'." });
        isError = true;
      }
      if (this.state.ccv.length < 3) {
        this.setState({ ccvError: "Minimum 3 numbers" });
        isError = true;
      }
      if (this.state.cardnumber.length + 12 < 16) {
        this.setState({ cardnumberError: "Cardnumber must be 16 numbers" });
        isError = true;
      }
      if (
        this.state.email.indexOf("@") === -1 ||
        this.state.email.indexOf(".") === -1
      ) {
        this.setState({ emailError: "Must contain '@' and '.'" });
        isError = true;
      }
      if (this.state.country.length <= 3) {
        this.setState({ countryError: "Not a valid country" });
        isError = true;
      }
      if (this.state.firstname.length <= 2) {
        this.setState({
          firstnameError: "Your name must have more than 2 letters",
        });
        isError = true;
      }
      if (this.state.lastname.length <= 2) {
        this.setState({
          lastnameError: "Your name must have more than 2 letters",
        });
        isError = true;
      }
    }

    if (this.state.swish === true) {
      if (this.state.phonenumber.length <= 9) {
        this.setState({
          phonenumberError: "Your number must be 10 letters (07XXXXXXXX)",
        });
        isError = true;
      }
      if (
        this.state.email.indexOf("@") === -1 ||
        this.state.email.indexOf(".") === -1
      ) {
        this.setState({ emailError: "Must contain '@' and '.'" });
        isError = true;
      }
      if (this.state.country.length <= 3) {
        this.setState({ countryError: "Not a valid country" });
        isError = true;
      }
      if (this.state.firstname.length <= 2) {
        this.setState({
          firstnameError: "Your firstname must have more than 2 letters",
        });
        isError = true;
      }
      if (this.state.lastname.length <= 2) {
        this.setState({
          lastnameError: "Your lastname must have more than 2 letters",
        });
        isError = true;
      }
    }
    if (this.state.presentCard === true) {
      if (this.state.presentcardnumber.length <= 8) {
        this.setState({ presentcardnumberError: "Minimum 8 characters" });
      }
      if (
        this.state.email.indexOf("@") === -1 ||
        this.state.email.indexOf(".") === -1
      ) {
        this.setState({ emailError: "Must contain '@' and '.'" });
        isError = true;
      }
      if (this.state.country.length <= 3) {
        this.setState({ countryError: "Not a valid country" });
        isError = true;
      }
      if (this.state.firstname.length <= 2) {
        this.setState({
          firstnameError: "Your name must have more than 2 letters",
        });
        isError = true;
      }
      if (this.state.lastname.length <= 2) {
        this.setState({
          lastnameError: "Your name must have more than 2 letters",
        });
        isError = true;
      }
    }
    return isError;
  };

  onSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    this.setState({
      firstnameError: "",
      cardnumberError: "",
      lastnameError: "",
      countryError: "",
      cityError: "",
      adressError: "",
      validdateError: "",
      emailError: "",
      ccvError: "",
    });
    const error = this.validate();
    if (!error) {
      this.setState({
        noError: true,
        firstnameError: "",
        cardnumberError: "",
        lastnameError: "",
        countryError: "",
        cityError: "",
        adressError: "",
        validdateError: "",
        emailError: "",
      });
    }
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
