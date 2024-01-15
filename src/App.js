import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from './redux/store';
import { route } from './routes/route'; 
import './template/css/core-style.css'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {route.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;