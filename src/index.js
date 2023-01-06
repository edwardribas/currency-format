import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.module.scss';

// Pages
import { Main } from './pages/Main';

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<>
    <Main/>
</>)