// import React from 'react'; // just for function not class
import React, {Component} from 'react'; // Correct import. "class Xxx extends React.component" deprecated

// import logo from './logo.svg';
import './App.css';
import Flat from './components/flat';
import Map from './components/map';

// function App() { // not a class
class App extends Component {
  constructor(props) {
    super(props); // passing the props to your parent, the React component class
    this.state = {// define the state of the component and how it is initialized
      flats: [],
      allFlats: [],
      selectedFlat: null, //5b) need extend my state, need store new key
      search: ""
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
          flats: data, // assign data to flats
          allFlats: data
        });
      })

    console.log("DID MOUNT");
  }

  selectFlat = (flat) => {
    // 3) will take a flat and change the state // 5a) what should be done when the flat just got selected
    // need re-render (=== change the state of!) the map (markers + position)
    // console.log(flat);
    this.setState({ // 5c) assigning the flat that the child's passed for me
      selectedFlat: flat
      },
      // () => console.log(this.state.selectedFlat) // OK
    );
    // console.log(this.state.selectedFlat); // null for fist click, need include call back
  }

  handleSearch = (event) => {
    // debugger
    // console.log(event);
    this.setState({
      search: event.target.value,
      // flats: []
      flats: this.state.allFlats.filter((flat) => new RegExp(event.target.value, "i").exec(flat.name))
    })
    // this.setState(
    //   {
    //     search: event.target.value
    //   }, () => {
    //   // },
    //     // flats: []
    //     // debugger
    //     this.setState({
    //       flats: this.state.allFlats.filter((flat) => new RegExp(this.state.search, "i").exec(flat.name))
    //     })
    //   }
    // )
  }

  render() {
    let center = { // not using static props
        lat: 48.8566,
        lng: 2.3522
    };
    let zoom = 12;

    if (this.state.selectedFlat) { // 6) need change center to focus on selectedFlat
      center = {
        lat: this.state.selectedFlat.lat,
        lng: this.state.selectedFlat.lng
      };
      zoom = 16;
    }

    return (
      <div className="app">
        <div className="main">
          <div className="search">
            <input
              type="text"
              placeholder="Search..."
              value={this.state.search}
              onChange={this.handleSearch} />
          </div>
          <div className="flats">
            {/*<Flat flat={flat} />*/}
            {/*<Flat flat={flat} />*/} {/* render / instanciate a second flat */}
            {this.state.flats.map((flat) => {
                return <Flat
                  key={flat.name} /* usually key = xxx.id */
                  flat={flat}
                  selectFlat={this.selectFlat} />
                  /* 2) when I instantiate a flat I also pass the 'handleClick' / selectFlat method as a props from the App*/
              })
            }
          </div>
        </div>
        <div className="map">
          <Map
            flats={this.state.flats}
            center={center}
            zoom={zoom}
            selected={this.state.selectedFlat}/>
        </div>
      </div>
    );
  }
} // function App

export default App;
