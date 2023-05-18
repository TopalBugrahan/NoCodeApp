import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/Screen/ScreenStore';
import './index.css';
import './assets/css/utilities.css';
import App from './App';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { AuthProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
let asdasd = persistStore(store);
root.render(
    <Provider store={store}>
        <React.StrictMode>
            <PersistGate persistor={asdasd}>
                <AuthProvider>
                    <App />
                </AuthProvider>
            </PersistGate>
        </React.StrictMode>
    </Provider>
);
