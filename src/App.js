import React from 'react';
import logo from './logo.svg';
import './App.css';
import Book from './Book.js';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import store from './Bookstorer.js';

 export default class App extends React.Component {
   render(){

    return (
      <Provider store={store}>

      
      <div className="App">
        <header className="App-header">
          <p>
            Book Store
          </p>
        </header>
        <Book/>
      </div>
      </Provider>
    );
   }
  
}

