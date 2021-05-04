import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HelloComponent from './component/HelloComponent';
import StatefullComponent from './container/StatefullComponent';
import YoutubeComp from './component/YoutubeComp/YoutubeComp';
import Home from './container/Home';

//coba1
// const HelloWorld = () => {
//   return <p>Hello world!</p>
// }

//coba2
// function HelloComponent(){
//   return <p>Hello Functional Component!</p>
// }

//coba3
// const HelloComponent = () => {
//   return <p>Hello </p>
// }

//coba4
// class StatefullComponent extends React.Component {
//   render() {
//     return <p>Statefull Component!</p>
//   }
// }

ReactDOM.render(
  <React.StrictMode>
    <YoutubeComp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
