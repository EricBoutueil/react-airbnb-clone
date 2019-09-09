import React from 'react'; // import 'react' class from React library
import ReactDOM from 'react-dom';
import './index.css'; // allow auto refresh of browser thanks to WebPack
import App from './App';

// import Hello from './components/hello'
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<Hello name="Eric"/>, document.getElementById('root'));
// const root = <div>
//   <Hello name="Eric"/> {/*  create a new instance of the class Hello*/}
//   <Hello name="Killian"/> {/* -> create a new instance of the class Hello*/}
// </div>;
// ReactDOM.render(root, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));
// the key line to run React -> JSx with component name ('Hello') + DOM element where to inject the element

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
