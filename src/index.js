import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import "./i18n.js"
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/react"
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <React.Fragment>
        <App />
        <Analytics />
        <SpeedInsights />
    </React.Fragment>
);
