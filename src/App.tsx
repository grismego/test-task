import React from 'react';
import { Content } from './components/content/content';
import './App.css';
import { Route } from 'react-router-dom';

function App(props: any) {
    return <Route path='/' component={Content} />;
}

export default App;
