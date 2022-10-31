import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import MyComponent from './Components/MyComponent';
const App = () => {
  return (
    <MyComponent></MyComponent>
  );
}

export default App;
