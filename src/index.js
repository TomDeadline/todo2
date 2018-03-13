import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './routes/Login/components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
