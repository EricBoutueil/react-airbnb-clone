import React, {Component} from 'react';
import "./marker.css";

class Marker extends Component {
  render() {
    let classes = "marker";
    if (this.props.selected) {
      // console.log(this);
      classes += " selected"; //need to pass it to the marker
    }

    // console.log(this);
    return (
      // <div className="marker">
      <div className={classes}> {/*let's extract as a variable*/}
        {this.props.text}€
      </div>
      );
  }

}

export default Marker;
