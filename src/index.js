
import reportWebVitals from './reportWebVitals';
import store from './data/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

let rerenderEntiretree=(state)=>{

  ReactDOM.render(
    <BrowserRouter>
      <App state={state}  addPost={store.addPost.bind(store)}
       updateNewPostText={store.updateNewPostText.bind(store)}/>
      </BrowserRouter>,
    document.getElementById('root')
  );
  }

rerenderEntiretree(store.getState());

store.subscribe(rerenderEntiretree);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
