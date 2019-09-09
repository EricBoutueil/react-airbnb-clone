import React, {Component} from 'react';
import "./flat.css";

class Flat extends Component {
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
      <div className="flat">
        <div className="flat-picture" style={style}></div>
        <div className="flat-title">
          {title}
        </div>
      </div>
      );
  }
}

export default Flat;
