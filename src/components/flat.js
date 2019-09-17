import React, {Component} from 'react';
import "./flat.css";

class Flat extends Component {
  handleClick = () => {
    this.props.selectFlat(this.props.flat);
    // -> 4) call the parent method selectFlat from the props, passing the flat
    // -> App giving the function to the child flat
    // + Flat call the parent function when the click event happen
    // -> needed because Flat component does not know about external world (vs App = 'God component')
  }

  render() {
    // this.props.flat.name
      // thanks to the API, we know that when we will render the component it will look like:
      // const flat = {
      //  name: "Great flat",
      //  price: 100,
      //  etc.
      //}
      // <Flat flat={flat} /> // single props passed to the component, containing all info

    // const title = this.props.flat.price // ugly way
    //   + this.props.flat.priceCurrency
    //   + " - "  + this.props.flat.name;
    const title = `${this.props.flat.price}
      ${this.props.flat.priceCurrency}
      - ${this.props.flat.name}`; // Template literal ES6

    const style = {
      // backgroundImage: "url('" + this.props.flat.imageUrl + "')" // ugly way
      backgroundImage: `url('${this.props.flat.imageUrl}')` // Template literal ES6
    };

    return (
      {/*<div className="flat" onClick={this.props.handleClick} >*/},
          {/* -> 1) We will call the handleClick method, that will get passed as a props from our parent
          I am giving the method as an argument to the onClick props,
          not calling the method handleClick() directly
          -> not sufficient to pass an argument 'flat' to it -> need intermediate step*/},
      <div className="flat" onClick={this.handleClick} >
      {/* -> 5) the way we react to an event, is by adding a property to an element
      -> define a method / callback on the component, that will be called each time it will get clicked */}
        <div className="flat-picture" style={style}></div>
        <div className="flat-title">
          {title}
        </div>
      </div>
      );
  }
}

export default Flat;
