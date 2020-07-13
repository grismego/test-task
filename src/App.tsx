import React from 'react';
import { Content } from './components/content/content';
import './App.css';
import { Route } from 'react-router-dom';

function App() {
    return <Route path='/' component={Content} />;
}

export default App;
