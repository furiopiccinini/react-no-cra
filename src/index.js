/** Empty React app boilerplate with CSS, made without create-react-app.
 * It's faster, loads less dependencies and it's almost empty!
 * Author: Furio Piccinini
 * License: Apache
 */

import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/styles.css';

const container = document.querySelector('#jsx');
const root = createRoot(container);

root.render(<h1>Injected by jsx</h1>);