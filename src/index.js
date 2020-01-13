import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    { id: 1, message: "ihor the best boy on thr=e villege", likeCount: "15" },
    { id: 2, message: "How are you?", likeCount: "11" },
    
]

let dialogs = [
    { id: "1", name: "Ihor" },
    { id: "2", name: "Maria" },
    { id: "3", name: "Nika" },
    { id: "4", name: "Grygory" },
    { id: "5", name: "Oksana" }
]

let messages = [
    { id: "1", message: "Hdvsmdnvkjdi" },
    { id: "2", message: "How old are you?" },
    { id: "3", message: "Where xbdvndkfjnvdfkjvndkjv you from?" },
    { id: "4", message: "I love you" }
]

ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();