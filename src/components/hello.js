import React, {Component} from 'react'; // Correct import. "class Xxx extends React.component" deprecated

class Hello extends Component {
  render() { // min. method needed in a component
    // return <div>Hello from hello.js written in JSx</div>; // need to return
    return <div>Hello {this.props.name}!</div>; // need to return
  }
}

export default Hello; // for other files to use it. "default" acts as fallback import when the whole module is required
