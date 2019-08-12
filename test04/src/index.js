import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App,{reduce} from './App';
import * as serviceWorker from './serviceWorker';
//내가 추가한거
//스토어에 지금 등록하려한다.
import {Provider} from 'react-redux'
import {createStore} from 'redux'

const store = createStore(reduce) 


//4단계

ReactDOM.render(<Provider store={store}> <App/> </Provider>
,document
.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


