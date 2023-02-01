import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './reducers';
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
    <Provider store={store}>
        <App />
    </Provider>
)

const devMode = process.env.NODE_ENV === "development";
if(devMode && module && module.hot) {
    module.hot.accept();
}
