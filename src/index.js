import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PostList from './PostList'
import MyComponent from "./MyComponent"
import LoginForm from "./LoginForm"
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<PostList />, document.getElementById('root'));


serviceWorker.unregister();
