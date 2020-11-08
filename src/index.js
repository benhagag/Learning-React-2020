import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

// How React updates the DOM - https://www.codecademy.com/articles/react-virtual-dom#:~:text=A%20virtual%20DOM%20object%20has,because%20nothing%20gets%20drawn%20onscreen.

ReactDOM.render(<App appTitle="Learn React"/>, document.getElementById('root'));
registerServiceWorker();
