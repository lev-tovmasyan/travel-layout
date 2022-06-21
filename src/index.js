import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import './assets/styles/index.scss';

const root = createRoot(document.getElementById('root'));

root.render(<App />);

serviceWorker.unregister();
