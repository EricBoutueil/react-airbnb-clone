// import React from 'react'; // just for function not class
import React, {Component} from 'react'; // Correct import. "class Xxx extends React.component" deprecated

// import logo from './logo.svg';
import './App.css';
import Flat from './components/flat';

// function App() { // not a class
class App extends Component {
  constructor(props) {
    super(props); // passing the props to your parent, the React component class
    this.state = {// define the state of the componant and how it is initialized
      flats: []
    };
  }

  // const flat = {
  //   // https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json
  //   "id": 145,
  //   "name": "Charm at the Steps of the Sacre Coeur/Montmartre",
  //   "imageUrl": "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg",
  //   "price": 164,
  //   "priceCurrency": "EUR",
  //   "lat": 48.884211,
  //   "lng": 2.34689
  // };

  // const flats = [flat, flat, flat]; // ==> replaced by this.state

  componentDidMount() { // called directly by React
    const url = "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json";
    fetch(url)
      .then(response => response.json()) // transform row string I get from request into json
      .then((data) => {
        // console.log(data);
        this.setState({
          flats: data // assign data to flats
        });
      })
    console.log("DID MOUNT");
  }

  render() {
    return (
      <div className="app">
        <div className="main">
          <div className="search"></div>
          <div className="flats">
            {/*<Flat flat={flat} />*/}
            {/*<Flat flat={flat} />*/} {/*render a second flat */}
            {this.state.flats.map((flat) => {
                return <Flat flat={flat} />
              })
            }
          </div>
        </div>
        <div className="map">
        </div>
      </div>
    );
  }
} // function App

export default App;
