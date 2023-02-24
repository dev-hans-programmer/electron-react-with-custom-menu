import React from 'react';
import App from './app/App';

import { createRoot } from 'react-dom/client';

const rootContainer = document.getElementById('root');

const root = createRoot(rootContainer);

function render() {
  root.render(<App />);
}

render();
