import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '@zendeskgarden/css-bedrock'; // Adds base Zendesk style to the compiled CSS

const mountNode = document.getElementById('app');
ReactDOM.render(<App/>, mountNode);
