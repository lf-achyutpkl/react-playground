import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Counter from './Counter';
import Form from './views/Form/Form';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Form />, document.getElementById('root'));
registerServiceWorker();
